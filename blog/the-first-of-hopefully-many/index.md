---
title: "The First of (Hopefully) Many"
date: "2019-04-30"
categories:
- Gatsby
- MDX
---

I've wanted to make my own blog for quite some time now. I've made every excuse not to, and I've scrapped and restarted at least 10 times. Now is the time where I'm finally comfortable enough to release something that I think has a great tech stack, is malleable enough for the future, and is simple enough (for now) to get going with both visually and from a management perspective.

In my first post I'm going to talk a lot about the process it took and how I came to this point to say "this is good enough".

## Early Beginnings
Web Development is a fun but very humbling field. I primarily keep a lot of what I do to myself and don't make things very public. Anything to do with things that I learn, AHA moments, and little stupid things I make to help myself along the way is usually under lock and key. Trying to break out of that shell presents one obstacle for me that's always the same (everybody's favorite):

* Imposter Syndrome

A lot of what I do I never deem to be good enough to share with the world even if it's just to reiterate in a different fashion. Many times I will read up on something new from 3 different places before I find the best way to understand what it is I'm trying to learn. To be fair, it's much easier to sweep it under the rug than to share it either way. That's just the objective truth. However, that doesn't always make it right. If the information I have is of certain value to me, it's likely valuable to others. Why not share it?

That brings me to this blog. The culmination of:

* Messing around with HTML & CSS when I was 12
* Taking a rudimentary programming class Senior year of high school
* Graduating from an accelerated Bachelor's Degree program at Full Sail
* To finally 2+ years of doing this professionally

You figure I'd get in gear sooner - ❌

## Focus
It's taken quite some time to get settled with my bread, butter and love for JavaScript ♥ It's not going anywhere anytime soon. It's got a great syntax that's mostly intuitive and easy to understand. I could've went in a few different directions... I've had run-ins in the past, either through college or curiosity, with:

* PHP (I thought I was going to be a PHP dev, I did it all through college and switched on the outside)
    * CodeIgniter
    * Laravel (I really, really liked Laravel)
* Python (A hard NOPE at the time, but wouldn't mind trying it again)
* Ruby (Nah, never tried Rails, though)
* WordPress (Kinda despise it now)
* C# (They tried to get me to write this during an internship, but I fell flat)

Even in my early days with JavaScript I used jQuery like a crutch for a sprained pinky toe. Not a diss on jQuery, it's great. Once I stepped out of it, though, I would've much preferred going with Vanilla JS as my go-to. I think it only becomes hard to step away from jQuery if you used it more than just a learning tool, which is bad.

That's not to say my journey with JavaScript hasn't had its faults. There was a lot of 🤬🤬🤬🤬🤬 in the early days. I'm sure we can all relate. But, we've seen many a therapist, and counseling has made our love stronger ♥

## What Changed? Why Now?
Motivation and intention. Nothing more, nothing less. I want to do it, and enough to intend to do my best at it.

## What I've Learned (so far)
Oh boy 😅

TLDR;

Lots

Longer read:

Let's start with the everything it took to get this up and running. Starting from the top and onward:

* [Domain](#domain)
* [Gatsby](#gatsby)
* [MDX](#mdx)
* [React Hooks](#react-hooks)
* [Theming](#theming)
* [Hosting (Zeit 😘)](#hosting)

### Domain
I grabbed a couple domains during the whole [Google .dev domain hustle](https://domains.google/tld/dev). One that I'm going to hold onto for a bit and the other you're seeing in use now - [tobea.dev](https://www.tobea.dev). There's some really good ones that **weren't** taken that I don't intend to pay for, but thought were awesome domains (at the time):

* [likeaboss.dev](https://domains.google.com/m/registrar/search?hl=en&_ga=2.5335091.1807434317.1556564198-183035411.1556564198&_gac=1.48353042.1556564198.EAIaIQobChMIwbm-v_314QIVB7XACh3uZQxdEAAYASAAEgJ4r_D_BwE&searchTerm=likeaboss.dev)
* [girlboss.dev](https://domains.google.com/m/registrar/search?hl=en&_ga=2.5335091.1807434317.1556564198-183035411.1556564198&_gac=1.48353042.1556564198.EAIaIQobChMIwbm-v_314QIVB7XACh3uZQxdEAAYASAAEgJ4r_D_BwE&searchTerm=girlboss.dev)
* [polygon.dev](https://domains.google.com/m/registrar/search?hl=en&_ga=2.5335091.1807434317.1556564198-183035411.1556564198&_gac=1.48353042.1556564198.EAIaIQobChMIwbm-v_314QIVB7XACh3uZQxdEAAYASAAEgJ4r_D_BwE&searchTerm=polygon.dev)
* [triangle.dev](https://domains.google.com/m/registrar/search?hl=en&_ga=2.5335091.1807434317.1556564198-183035411.1556564198&_gac=1.48353042.1556564198.EAIaIQobChMIwbm-v_314QIVB7XACh3uZQxdEAAYASAAEgJ4r_D_BwE&searchTerm=triangle.dev) (can you tell I like shapes?)
* [rectangle.dev](https://domains.google.com/m/registrar/search?hl=en&_ga=2.5335091.1807434317.1556564198-183035411.1556564198&_gac=1.48353042.1556564198.EAIaIQobChMIwbm-v_314QIVB7XACh3uZQxdEAAYASAAEgJ4r_D_BwE&searchTerm=rectangle.dev)
* [prev.dev](https://domains.google.com/m/registrar/search?hl=en&_ga=2.5335091.1807434317.1556564198-183035411.1556564198&_gac=1.48353042.1556564198.EAIaIQobChMIwbm-v_314QIVB7XACh3uZQxdEAAYASAAEgJ4r_D_BwE&searchTerm=prev.dev)
* [funky.dev](https://domains.google.com/m/registrar/search?hl=en&_ga=2.5335091.1807434317.1556564198-183035411.1556564198&_gac=1.48353042.1556564198.EAIaIQobChMIwbm-v_314QIVB7XACh3uZQxdEAAYASAAEgJ4r_D_BwE&searchTerm=funky.dev)

I actually picked up [rhombus.dev](https://rhombus.dev) as my second .dev domain.

### Gatsby ♥
Not only one of my favorite stories and movies, but some really powerful stuff in the mix here. I use Gatsby to build and statically serve this site. Seeing as it's just static content for the most part I don't see the need to do anything else. I have future plans to try and take this thing 100% offline.

I've learned a fair bit about Gatsby over the last couple months. There's a really large community surrounding the development of it, and has quite a few [plugins](https://www.gatsbyjs.org/plugins/) to satisfy the "I'd rather just use what someone else did" people. I couldn't find one that had all the features I wanted for a page reading progression indicator at the top of the page, so I [made my own](https://www.gatsbyjs.org/packages/gatsby-plugin-page-progress/?=page%20progr). It's actually the second thing I published to [npm](https://www.npmjs.com/~devjmetivier).

I've had pretty few challenges with Gatsby, especially in the v2 release. Dipping your toes into the [API](https://www.gatsbyjs.org/docs/api-reference/) isn't as scary as you might think. I'm of the opinion that they make it very intuitive and they document it **very well**.

### MDX 😍/🤬
What a roller coaster. I have to preface that at the time of developing this blog - in the beginning I was on the `v0` release, and upgraded to `v1` shortly before I launched my blog. I really, really liked the idea of this and had all sorts of cool ideas for things that I would be able to demo in code blocks directly on my blog page. The concept was great, and the power potential was limitless. It fell pretty flat to start.

I had all sorts of issues for even the simple things working with Gatsby. Image routing was wildly inconsistent. Syntax highlighting with Prism was a pain... in... the... 🤬🤬🤬. It was my first introduction to the fact that `v0` libraries are no guarantee. BUT... that all kinda went away.

As soon as all my adjacent packages were updated to support v1 upon it's release (which took maybe 3 days?), pretty much all of my problems went away 🚀 I'm by no means a MDX power user (yet), but now the experience is a very modest thumbs up 👍 I can even do cool stuff like inline editors:

```js react-live
const Button = () => {
  const [num, setNum] = React.useState(0);
  
  return (<button onClick={() => setNum(prev => prev + 1)}>🥳 {num}</button>)
}

// I need to call a render method for react-live
render(Button);
```

I can also just import components directly into my markdown files (I can use either `.md` or `.mdx` files):

import BigHello from './src/components/BigHello';

<BigHello />

JS:

```js
import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 100px;
  line-height: 1;
`;

export default function BigHello() {
  return <H1>Hello!</H1>;
}
```

And I import it directly in markdown:

```md
import BigHello from './src/components/BigHello';

<BigHello />
```

One gripe I really have with MDX right now is that there's not any syntax highlighting support at all for the editor I use. I do recognize, though, that that's a shortcoming of WebStorm and not MDX's fault. Pretty sure VS Code has syntax support for it already through third party plugins.

### React Hooks
Hooks are a new syntax for React. I've had my own challenges using them, but for the most part it's been pretty pleasant. I've made it a rule of thumb to not use class-based components in my blog's code. So far so good 👍 I haven't felt the pressure to use class-based components or switch to it because I didn't understand how to do something in hooks. Custom hooks are really nice too.

### Theming
I originally tried to isolate everything to [styled-components](https://www.styled-components.com), but really only found that, after adding a `dark mode` feature to the blog, it wasn't the best approach. Users can now set a system preference to have a light or dark theme. If you're like me, you have it set to be `dark` by default. I wasn't aware that the plugin that I'm using checks to see what preference of the user is and it took me forever to figure out why I was loading some light mode styles when dark mode was turned on. I've since extracted most of the theming elements that have to do with changing colors depending on light/dark mode.

styled-components has a really great system for theming applications. I have my blog tied to a few dimensions in a configuration file. Anytime I need a change, I change it in one place and it works like magic 🧝‍♂️ I'm not completely happy with the way my blog looks as of writing this first post, but I hope to hire a designer in the future to work out something that's unique to my likeness and fits the mood I want to set for my content. If you're interested - [@me](https://www.styled-components.com) 😁

### Hosting
I've been messing around with Zeit's [Now](https://zeit.co/now) deployment platform for about a year and a half. I didn't think it was all that powerful in the beginning but I really like that they allowed you the option to deploy from so many avenues. Now with the Github integration that makes my life a lot easier. Especially when it comes to working on my blog. I gotta say that I love what they do.

There's a lot of great things about Zeit. Everything from their deployment platform, their CDN, their domain management, integrations, and down to their pricing and design is just great. They're incredibly competitive too. They even take care of Lambda scaling for you so that you never pay more than you have to for your lambda functions. They do everything within their power to make it as stupid cheap as it can possibly be. They're very ethically sound when it comes to operations even being a relatively young company. Then they just pass the savings on to their customers. I don't need to tell you that that's extremely attractive for both small business and enterprise development teams to hop on board with them.

If I had to pick one favorite thing about Zeit's Now platform, I'd have to pick their thinking about deployment. Specifically if you have the Github integration, you have the ability to treat every commit as a deployment instance. Anytime I push code to Github, in any branch, Now takes that latest commit and builds everything attached to it. Every. Single. Time. At no cost 🎉 It's incredible. You can even alias your deployments to whatever names you like `example.now.sh` and show it off if need be.

> Hold on a second. Doesn't that mean that if you have a domain attached to a project that every time you deploy everyone can see the changes you just made?

No.

Now has the concept of `aliasing` all of your deploys. They handle a lot of it for you for any wild commit that you make to your project, sure. But by default you can alias your domain once, and that deployment instance will always be aliased to that domain for as long as you keep the alias to that deploy.

> Ok that sounds good, but the aliasing of the domain once you want to push new code live must be a pain in the butt **AND** take a long time...

It's one command, and it's near instant 🎉 Everything is so fast it's akin to flipping a light switch to take your code live. It's... Awesome...

I will be using this service for near everything I do if I have the choice.
