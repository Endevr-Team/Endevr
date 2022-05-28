//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./EndeavourDeployer.sol";

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract Endeavour is AccessControl, VRFConsumerBaseV2 {
    //Endeavour Data
    string public ipfsStorage;
    uint256 minDonation;
    uint256 minimumFundingGoal;
    uint256 randomNFTAmount;
    uint256 biggestNFTAmount;

    //Roles
    bytes32 public constant CREATOR_ROLE = keccak256("CREATOR_ROLE");
    bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE");
    address owner;

    //Raffle / Donation Data
    address[] public donors;
    mapping(address => uint256) public entries;
    address[] public randomWinners;
    address[] public biggestWinners;

    //Chainlink VRF
    VRFCoordinatorV2Interface COORDINATOR;
    uint64 s_subscriptionId = 4776;
    address vrfCoordinator = 0x6168499c0cFfCaCD319c818142124B7A15E857ab;
    bytes32 keyHash =
        0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc;
    uint32 callbackGasLimit = 100000;
    uint16 requestConfirmations = 3;
    uint256[] public randomWords;
    uint256 public requestId;

    //Price feeds
    AggregatorV3Interface internal priceFeed;
    address ethToUsdRinkeby = 0x8A753747A1Fa494EC906cE90E9f37563A8AF630e;

    constructor(
        uint256 _minDonation,
        uint256 _minimumFundingGoal,
        uint256 _randomNftAmount,
        uint256 _biggestNFTAmount,
        address _endeavourCreator,
        address _owner
    ) VRFConsumerBaseV2(vrfCoordinator) {
        //Set Data
        minDonation = _minDonation;
        minimumFundingGoal = _minimumFundingGoal;
        randomNFTAmount = _randomNftAmount;
        biggestNFTAmount = _biggestNFTAmount;

        //Attach VRF Coodinator
        COORDINATOR = VRFCoordinatorV2Interface(vrfCoordinator);

        //Price feeds
        priceFeed = AggregatorV3Interface(ethToUsdRinkeby);

        //Setup access roles
        _setupRole(CREATOR_ROLE, _endeavourCreator);
        _setupRole(OWNER_ROLE, _owner);
        owner = _owner;
    }

    function changeSubscriptionId(uint64 _subscriptionId) public {
        require(
            hasRole(OWNER_ROLE, msg.sender),
            "caller is not authorized to change subscription id"
        );
        s_subscriptionId = _subscriptionId;
    }

    function getMinimumDonationAmount() public view returns (uint256) {
        int256 latestPrice = getLatestPrice(); //decimal of 8
        uint256 newPrice = uint256(latestPrice) * 10**10;
        return (minDonation * 10**18) / newPrice;
    }

    function donate() public payable {
        require(
            msg.value >= getMinimumDonationAmount(),
            string(
                abi.encodePacked(
                    "The minimum donation amount is $",
                    Strings.toString(minDonation),
                    " USD, so ",
                    Strings.toString(getMinimumDonationAmount()),
                    " ETH"
                )
            )
        );

        //add to donors if nothing was sent yet
        if (entries[msg.sender] == 0) {
            donors.push(msg.sender);
        }
        //track donation amounts
        entries[msg.sender] += msg.value;
    }

    function refundDonors() public {
        require(
            hasRole(OWNER_ROLE, msg.sender),
            "caller is not authorized to refund"
        );

        for (uint256 i = 0; i < donors.length; i++) {
            payable(donors[i]).transfer(entries[donors[i]]);
        }

        selfdestruct(payable(msg.sender));
    }

    function releaseFunds(uint256 _amount) public {
        require(
            hasRole(CREATOR_ROLE, msg.sender),
            "caller is not authorized to release funds"
        );
        require(
            address(this).balance >= minimumFundingGoal,
            "Funding goal has not been reached"
        );
        require(
            _amount <= address(this).balance,
            string(
                abi.encodePacked(
                    "You can refund at most",
                    Strings.toString(address(this).balance) / (10**18),
                    " ETH"
                )
            )
        );

        payable(msg.sender).transfer(_amount);
    }

    function selectWinner() public {
        require(
            hasRole(OWNER_ROLE, msg.sender) ||
                hasRole(CREATOR_ROLE, msg.sender),
            "caller is not authorized to select winner"
        );
        require(
            address(this).balance >= minimumFundingGoal,
            "Funding goal has not been reached"
        );

        //make sure it works and account for failure
        requestId = COORDINATOR.requestRandomWords(
            keyHash,
            s_subscriptionId,
            requestConfirmations,
            callbackGasLimit,
            uint32(randomNFTAmount)
        );
    }

    function burn(address[] storage array, uint256 index) internal {
        require(index < array.length);
        array[index] = array[array.length - 1];
        array.pop();
    }

    function fulfillRandomWords(
        uint256, /* requestId */
        uint256[] memory _randomWords
    ) internal override {
        randomWords = _randomWords;

        address[] storage nonWinners = donors;

        //find random winner for each nft
        for (uint256 i = 0; i < randomNFTAmount; i++) {
            uint256 latestWinnerIndex = randomWords[i] % nonWinners.length;
            randomWinners.push([payable(nonWinners[latestWinnerIndex])]);
            burn(nonWinners, latestWinnerIndex);
        }

        address[] storage allDonors = donors;

        //get winners
        for (uint256 i = 0; i < biggestNFTAmount; i++) {
            for (uint256 i = 0; i < donors.length; i++) {
                //get x biggest
                //entries[donors[i]]
            }

            uint256 latestWinnerIndex = randomWords[i] % nonWinners.length;
            winners[payable(nonWinners[latestWinnerIndex])] = ipfsNFTs[i];
            burn(nonWinners, latestWinnerIndex);
        }

        //distribute nft to winners
        EndeavourDeployer(owner).transferToWinners(
            randomWinners,
            biggestWinners
        );
    }

    function getLatestPrice() public view returns (int256) {
        (, int256 price, , , ) = priceFeed.latestRoundData();
        return price;
    }
}
