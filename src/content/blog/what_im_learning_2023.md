# What I'm Learning 2023

So 2022 was a year of learning lots of new things for me. I'm going to go down the list of things I learnt this year and talk about what I'm going to learn in 2023.

## What I learnt in 2022

### Meta Frameworks

So I learnt two primary meta frameworks this year Next.js and Nuxt both of which get their own sections. But this is on meta frameworks as a whole. Meta frameworks are in an interesting place, there is tons of development and tons of new ones have been relased (SolidStart, SvelteKit, Astro, etc). So the main thing with meta frameworks is they reduce your boilerplate and let you write complex applications in ways we couldn't easily do before. For example, they enable easy multipage applications (MPAs), easy server side rendering (SSR) which prerenders content so that it can be ingested by search engines for better SEO. I think meta frameworks are great once you understand the basics of a framework. Often they are going to be preferred to just using a regular framework because they get you up and running faster and they have a lot of features that are hard to implement yourself.

But meta framework abstractions have to be good or else they ruin. So there are a few elements of these new abstractions that I'm not loving:

- *Specific pages to do things (Next.js 13, SvelteKit, etc).* The problem with this abstraction is you get a billion files named index.tsx or +page.svelte. **This is terrible for autocompletion and searching!** I'm not sure if this people only develop using the file tree in their IDE but if you actually want to fuzzy search these new frameworks it's a terrible experience. I think everyone here needs to look at SolidStart and how for their file based routing they not only let you opt out and place it in a component but also let you wrap rename the base page to whatever you want as long as you wrap it in parenthesis. Terrible DX, this needs to get better because this is going the wrong way.
- *Server component weirdness (SolidStart, Next.js 13, React).* Server components are a great idea that is so weird and new that it's being handled poorly. Top level async calls for functional components makes sense to me. In fact it largely replaces the getServerSide props abstraction in Next.js 13. But sometimes we are hitting poorly typed leaky abstractions (I'm looking at you SolidStart closure scoping on createServerData$). While it's very exciting how performant we can get these sites and how much better the experience is going to be. **It's important to recognize that the more abstractions we add and the worse they are, the harder it's going to be bring on new developers who have never used these meta frameworks before**.
- *Just use a meta framework as the advice to new developers.* Yes, using a meta framework is nice because it's gives us all the pretty and shinny things that are hard to do and sets our projects up for long term. **However, for someone's very first project please don't tell them to use Next.js. People who are starting don't have the knowledge to deal with this meta frameworks right out of the gate.** I think it's better to just a regular framework to start and then move to a meta framework once you have a good grasp of the basics.

### Vue

So Vue is an interesting project to me. Vue Single File Components (SFC) are a different way of writing components. Previously I've written sites using plain JS (never do this, Typescript is the only choice in the modern web) and jQuery (fortunately we don't use this anymore either). But both have a nice quality of having seperate HTML, CSS and JS files. On the other hand we have React where you are using JSX so your logic and UI (HTML and JS) are mixed and sometimes your styling too (shoutout TailwindCSS). Vue SFCs have this interesting quality where it kind of like the old web where you aren't context switching with components but rather you have 3 nicely defined sections for style, content, and logic. But the way the logic is written is much closer to React and feels fairly nice. **Overall Vue is an intersting framework and it is being used in production but for me I don't think people should start with Vue. The return on investment of learning JSX (React, React Native, SolidJS) is much higher than learning SFCs which is specific to Vue. I think Vue is still worth learning but I would recommend only learning it for a job, if you're intested in it, or if you've already tried more exciting options like Svelte and SolidJS.**

### NUXT

So NUXT was the first meta framework I learnt this year. My comments regarding Vue apply here to Nuxt. Although I will say the one thing Nuxt has an amazing feel for is DX (developer experience) it does feel great to use especially with a properly configured IDE. **Overall, if you are looking to use Vue (because you are an intermediate to advanced developer) just take the extra leap and use Nuxt for all the metaframework benefits (SSR, SEO, etc).**

### Next.js

The meta framework to end all meta frameworks. The new king of hill, Next.js. So it's good, ish. It does the fundamental things well, the developer exprience is great, deploying on Vercel is great. It is the best React meta framework for production apps (Remix is interesting, but not widely adopted yet) and is what I recommend most people use after they have some experience in React. getServerSideProps is a terrible abstraction and the typing experience is terrible and I can't wait for Next.js 13 server components except their file based routing in Next.js 13 is terrible and needs a revamp because I don't want a dozen identically named files. **It's the king for a reason, if you need a meta framework for React, use Next.js (but I recommend a specific template for Next.js later).**

### TailwindCSS

TailwindCSS is a utilty library for CSS where you use specific class names to style your components. It's terrible, it makes the HTML look awful and it can be inflexible and yet IT IS THE BEST SOLUTION FOR CSS!!! This has made CSS actually tolerable to use in big projects, it's quick to use, and after you learn it a bit you can start to move really fast. I also bought TailwindUI this year and it's actually the best component library I have ever used and I can't recommend it enough. **If you are doing CSS, use TailwindCSS, if you aren't allowed to use TailwindCSS, use TailwindCSS. This is as good as it gets.**

### TanStack Query (React Query)

Firstly, TanStack is not a data fetching libary, it's a caching library that happens to be alright for data mangement. I can't say this enough, TanStack Query will simplify getting your data from the backend and managing the invalidation and revalidation of that data. It's the choice in production, yes SWR exists and I tried it this year but it never felt good. Also now it is TanStack Query so you can use it in a ton of other projects. **If you fetch data, use TanStack Query**.

### TRPC

TRPC is a paradigm shift, it will be in your apps and it will be in your life and you will enjoy it. TRPC essentially lets you share types between your frontend and Typescript backend. It is seamless and with TanStack query under the hood it is the best way to write a node backend in 2022 and beyond. I can't descript to you in words how good it feels to use. Go build with it, now, go, do it, enjoy it. **If you have Typescript on the frontend and backend, use TRPC. If you have a backend and don't know what to write it in, write it in Typescript and use TRPC you'll thank me.**

### Flutter

Flutter just ain't it. If you just need to prototype a language, or it's a simple app which you just need to look decent use Flutter. The setup is fine, perfomance is fine, but the use of nested compoents to do everything along with specific methods on those components which you need to override feels terrible. The giant waves of code that ebb and flow because things are so deeply nested are just unsusable and ugly. We have better more popular languages, we can do better, why do we punish ourselves with such a terrible experience and is so seperate from the web. **If you need to prototype something, use Flutter. If you need to build a mobile app, use React Native.**

### React Native / Expo

React Native is bad. It's a mediocore experience to develop on, half the libraries you want don't want, most of the component libraries are ugly and terrible but it's the only way to build a decent mobile app. React Native is only redemable over Flutter because it uses the web. Nativewind which is TailwindCSS for React Native makes styling infinitely better than Flutter. TRPC makes the API's infinitely better than Flutter. Expo is a framework on top of React Native and it makes deploying and publishing so much better. Expo brings React Native deployment and developer close to if not better than Flutter and having all the tools and technologies you already know makes it the clear choice. **If you need to build a mobile app, build it using React Native and Expo Unless you are someone who knows they need a native app in which case you already know so why are you reading this.**

### Prisma

Prisma is a typesafe way of accessing databases without writing SQL. I don't write SQL anymore, I just use Prisma. It's great, it's fast, it's typesafe. **If you need to access a database, use Prisma.**

### T3 Stack

So this is a template modeled after the work of Theo Browne who is an excellent tech youtuber and is a big advocate of typesafety. The T3 stack is Next.js, TailwindCSS, Prisma, TRPC, and Typescript. This is a really good template but what's better is what is called t3-turbo which is the same thing but also for React Native. Being able to spin up a React Native and Next.js web app and share the backend and develop side by side is soooooooooo nice. It's honestly the best way to develop a web app and mobile app at the same time. **If you need to build a web app and a mobile app, use t3-turbo. If you need a mobile app use t3-turbo. If you need a web app use t3-stack**

### ChatGPT

ChatGPT is a chatbot AI that has blown up. It's incredible but is vastly overhyped. It's decent and will let you do some things faster as a developer (prototype, or solve problems) but it's still not there yet. **No, it's not going to take your job, it's not going to replace developers, please stop worrying.**

### Github Copilot

Github Copilot is an AI to help you write code. It's genuinely incredible. Most times it gives dumb suggestions but sometimes it gives these absolutely incredible respones. Mostly though Github Copilot automates the boring stuff. This thing destroys unit tests, it just writes the boilerplate for you. Github Copilot especially if you write a lot of tests will make you soooo much faster. **If you can get it for free or you have the money to burn (because you have a job and want more free time) use it.**

### Lighting Round

Below is a list of technologies I used and my quick thoughts since this is already long.

- Vercel - Easiest way to deploy web apps
- Railway - Easiest way to deploy infrastructure
- AWS - If you need AWS use AWS, otherwise don't
- Figma - Best design tool
- Headless UI - A great component library for getting the functionality you want
