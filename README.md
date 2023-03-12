## Raccoon Country is a blog dedicated to exposing the truth about raccoon related conspiracies.

## References:
 - Following along to: https://www.youtube.com/watch?app=desktop&v=HYv55DhgTuA
 - Dark mode toggle from https://electricanimals.com/articles/next-js-dark-mode-toggle
 - Pink Color Palettes:
    - https://coolors.co/palette/ffe0e9-ffc2d4-ff9ebb-ff7aa2-e05780-b9375e-8a2846-602437-522e38
    - https://coolors.co/palette/590d22-800f2f-a4133c-c9184a-ff4d6d-ff758f-ff8fa3-ffb3c1-ffccd5-fff0f3
 - Purple Color Palettes
    - https://coolors.co/palette/ebe0ff-dac7ff-c7adff-ac8bee-916dd5-7151a9-573d7f-46325d-3f3649

---
## Technologies Used:
 - Next.js for the frontend application
 - Tailwind CSS for designing the frontend
 - GraphQL for the backend API stuff using Hygraph (Once known as GraphCMS)
 - Frontend hosted on Vercel using their free hosting service

I'm not a big fan of blindly following internet tutorials, so I will be building a blog application similar enough to the tutorial where I can follow along, but distinct enough to truly call my own. I also plan to cut a couple of unnecessary features and add a couple of my own ones. I imagine a couple things need to modified anyways just because the tutorial happens to be two years out of date. 

In the future, I would probably look at creating my own CMS either from scracth or using FOSS software like Strapi (https://strapi.io/) or WordPress so I'm not beholden to a third party to have all my data stored/accessible.

---

## The schemas are all built inside of Hygraph and use GraphQL to connect to the Next.js application

Author
 - Name (required) 
 - Photo
 - Bio

Comment
 - Name (required)
 - Email (required)
 - Comment (required)


Category
 - Name (required)
 - Slug (required)

Post
 - Title (required)
 - Author (Two way relation)
 - Category (Two way relation)
 - Slug (required)
 - Excerpt (required)
 - IsFeatured  (required)
 - Content1 (required)
 - Image1 (required)
 - Content2
 - Image2
 - Content3
 - Image3
 - Content4
 - Image4









