![wallpaper](https://user-images.githubusercontent.com/65676392/170804066-40764783-0419-4c8d-bc0a-0dde614e7be5.png)

- `Deployer Contract (Rinkeby): 0xce3C9De726bfD23409e2d25c99d7de57FE9b8c16`
- `Controller Contract (Rinkeby): 0x2d0481a64fC4f8C3B7A70a419b9858D4606f30AE`

## Inspiration

We are inspired by researchers, pioneers, and project creators. We inspired by [a programmer who fought cancer with 50 Nvidia Geforce 1080Ti](https://howardchen.substack.com/p/this-amateur-programmer-fought-cancer?s=r). We are inspired by endeavours. 

!["coolwulf"](https://user-images.githubusercontent.com/65676392/170809467-d3f3f5ee-def8-43ec-bc28-ed4d36424899.png)

We want to make charity and research projects happen by connecting contributor with pioneers while fostering a transparent and accountable platform to fund these endeavours. We also want people to be incentivized to donate via social proof rewards on the platform such as NFTs.

Currently, charity fundraising is in the dark ages. There’s no incentives for people to donate. No transparency about where contributors’ money is going[.](http://donors.No) And since we don’t see what’s happening with the money, we can’t truly hold the charity accountable for what its doing with it. Endevr seeks to resolve this. 

The key to resolving this is to ensure the people funding the projects have a clear and transparent view of what’s going on with their money. While also giving them an incentive to support these projects. 

We endeavoured to create a space that fosters public good by ensuring open and transparent funding between individuals.

## What it does

We hope to incentivize public good projects through rewards and community engagement. 

- **The Project Creator** (Pioneer) creates an Endeavour, which contains a mission statement/summary, a description, a fundraising goal, and the creators. The NFT option is available, which allows rewards for top donors and random donors. These NFTs are generate completely randomly by AI. The raffle cost and rewards are also defined.
- **The Project Donor** (Contributor) views the Endeavours, reads the descriptions, and donates. The Contributor receives awards, which may include a Twitter post for donation and money.

## How we built it

Moralis: 

- Integrates our back-end elements with the front-end
- Stores data from our operations.

React:

- Front-end display

Chainlink:

- Automate prize distribution
- Verifiable random winners
- Minimum USD donation amounts (price feed)
- Chainlink keepers automate smart contract to distribute fund (automate checking smart contract)

Artificial Intelligence:

- Generate NFTs’ using their own logo
- We have used Neural style transfer which is the state of the art network for generating arts using AI, NST is an optimization technique used to take two images a content image and a style reference image where the style image can be a design or painting or any artwork) and we blend them together so the output image looks like the content image, but “painted” in the style of the style reference image. Here we have used AI to perform this task. We used a VGG network for this task.
- This works on the values of the intermediate feature maps to indicate the content of a picture.
The means and correlations among the numerous feature maps, it turns out, may identify an image's style. We calculate a Gram matrix that contains this information by calculating the feature vector's outer product with itself at each place and averaging it across all locations.
- Some examples are shown below.
![Examples of the nft art generator](https://user-images.githubusercontent.com/65676392/170810723-d791ccd8-f35f-479a-9596-a685407b7bbc.png)

To keep the community engaged, we used NFTs that the Pioneers can generate on their own to give to their donators.

## Challenges we ran into

We started a week before the due date and two developer stopped working because they got COVID-19.

## Accomplishments that we're proud of

We are all university students running on coffee! We have successfully built a working smart contract backend with all the features we have mentioned above! 

## What we learned

How to code frontend in Svelte, even though we ended up backpedaling to React. 
How to work with Chainlink and smart contract framework. 
How Moralis simplifies working with smart contract process. It is a tool that sped up development by a lot.

## What's next for Endevr
Expand to more general projects that require funding such as research and others.
