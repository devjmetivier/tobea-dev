---
title: "How To: Make A Github Proxy With Dark Mode"
date: "2019-05-10"
categories:
- JavaScript
- Proxy
- Serverless
---

In this article I'll be showing you how you can make a proxy that serves Github in dark mode. We'll be creating a serverless function that serves as the proxy and deploying to [Now](https://zeit.co/now). We'll use Now's configuration file to route all traffic through a single endpoint: `index.js`. 

## What's A Proxy?
TLDR;

Proxy's serve as a layer between you and the rest of the internet by providing things like extra security, privacy, access to blocked resources, etc.

There's also a [longer read](https://www.varonis.com/blog/what-is-a-proxy-server/) that dives deeper into what a proxy is and what it can do. Along with the **potential risks** associated with using one.

## What's A Serverless Function?
TLDR;

Serverless functions can be broken down simply as _a software design patter where applications are hosted by a third-party service_, which eliminates the need for a developer to manage a server with hardware and/or software. In other words, you push your code and tell the service how to handle it. 

The [Twilio docs](https://www.twilio.com/docs/glossary/what-is-serverless-architecture) have a really good explanation diving into greater detail about serverless functions.



## Something You Should Know
A proxy can be a bit of a double edged sword when it comes to privacy and security. Organizations have and to this day use proxys to monitor employee activity amongst other things. Because a proxy's main feature is processing the traffic that passes through it, it can do a lot of things with that data. You should take care with the actions you take when using a proxy.

What I'm _specifically_ doing here is doing checks and routing traffic through a single endpoint that transforms the `<head>` and some links to achieve proper routing and the dark theme for Github. I could write something that modifies inputs on the login page to do whatever I want. I'm not doing that, and my deployment is public so that can be confirmed. The lesson is that if you're not absolutely sure what a third party proxy is doing, you shouldn't be doing any actions that could harm you.
