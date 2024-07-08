# TikTok-TechJam--Group-JamJam

Our group is tackling **Track 3** with the problem statement on **Enhancing Tailored Discovery on TikTok Shop**.

## Premise:
* <ins>TikTok For You page, a powerful recommender</ins>:
Currently, TikTok For You page effectively curates content catered to each users’ interests and preferences ahead of competitors. The algorithm is particularly effective in correctly recommending based on factors like interest areas, emerging and mainstream trends, style, and location. 

* <ins>TikTok Shop and Creator Landscape</ins>:
  
Building upon the well established trend of haul and product recommendation videos, [TikTok affiliate commissions programme](https://seller-sg.TikTok.com/university/essay?knowledge_id=7999945010038530&default_language=en&identity=1) incentivises creators to promote products from TikTok Shop – thereby driving traffic to the TikTok Shop.

### Joining Forces:
These two forces are currently at play in TikTok’s For You page. Users are exposed to new and interesting products that match their taste (the current season, or what is hot in the region and the world) through haul and product recommendation videos. From here, creators help bridge the gap between interested buyers and sellers on TikTok Shop through affiliate links in video description. 

## The gap and opportunity
Our group has identified gaps to address. Here are several ‘what if’ scenarios to consider:
1. What if the user is interested in products **not explicitly mentioned by the creator**?
2. What if the user is interested in products mentioned in a video that is **not linked with the TikTok affiliate commissions programme**?

TikTok For You page introduces many products which users are interested in buying, but convenience of identifying and searching for the product is low. We believe that users will be left without a choice but to hop on to other platforms (potentially competitors’ platforms) in search of the product. There is a need to address these potential purchasers who ‘have fallen through the cracks’. We aim to increase the convenience and ease of product discovery on TikTok, ultimately converting browsers to purchasers, while leveraging and staying true to TikTok's hyperpersonalised core experience. 

## Problem Statement
Putting the premise, gap, and opportunity derived from by group as well as the brief provided into consideration through the lens of the brief main objective outlined, we come to the problem statement:

> How might we enrich the TikTok Shop experience by closing the gap between TikTok Shop and For You page to achieve hyperpersonalised experience?

## Solution
### Appearance:
We first add a new ‘Shop’ button that is located with the regular buttons on videos (e.g. Likes, Comments, Share, etc). Since these buttons are the most interacted in the core TikTok browsing experience, it makes sense to have a Shop button here to increase user traffic.

We want to avoid compromising the core experience of TikTok, thus this button should follow the main simplistic aesthetic of current buttons. Yet, we also want to make it standout to notify users of a new opportunity to interact with TikTok. A mild halo effect is added to the button to achieve this intent. This halo will be activated when there are products identified in the video. 

### Core feature/functionality:
When pressed, the ‘Shop’ button pulls up a sidebar containing cards of all **products identified** – both those **inputted by the creator** (for the affiliate programme) and those **identified automatically**. When pressed, the cards bring users to the TikTok Shop. We effectively bridge curious users to the TikTok Shop via appealing uniquely to their interests. 

## Value Proposition
Our solution provides value to 3 main identified stakeholders:
* <ins>Users</ins>: Easily discover new intriguing products and conveniently learn more about these products or even purchase them solely on the TikTok platform. All past viewings and purchases help to further curate recommendations further enriching discovery journey
* <ins> *Creators/Sellers </ins>: Enjoy more traffic to their listings leading to more purchases
* <ins>TikTok</ins>: Further cement expansion from a short video content platform to the e-commerce field via prevention of customer defection. 

## Technical Specifications
How might this solution be implemented?
We need to address the problem of extracting possible products existing in a video and reverse searching them for similar listings in the TikTok store. This will power the core functionality of our solution. Assuming the microservice architecture, we can devise a system flow below:
<img width="842" alt="System_flow" src="https://github.com/lMinHui/TikTok-TechJam--Group-JamJam/assets/123468516/a55b797f-5c8d-47df-8415-40bd92fa85f0">

## Implementing an MVP 
Our main focus for the MVP is to demonstrate a mock user's experience flow of browsing the For You page and encountering the new ‘Shop’ button which ultimately leads the user to TikTok Shop. Considering the short time span allocated for this project and rapid prototyping, our group decided to stick to a simple web application to simulate the enhanced TikTok user interface and user flow. 
The tech stack we have used:
* Frontend: React and Next.js (styled with Tailwind css)
* Backend: MongoDB

We did not implement the Vision Model and Visual Search Model, which are 2 large areas that can be further studied and worked upon given more time. 

## Details on running our app
* To run the front-end: `cd front-end` then run `npm run dev` (or `npm run build` then `npm run dev`)
* To run the back-end: `cd back-end` then run `flask run`


Credits: For illustration purposes, product images sourced from various brands were used in our app.
