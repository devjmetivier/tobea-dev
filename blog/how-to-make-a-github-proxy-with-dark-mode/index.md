---
title: "How To: Make A Github Proxy With Dark Mode"
date: "2019-05-10"
categories:
- JavaScript
- Proxy
---

In this article I'll be showing you how you can make a proxy that serves Github in dark mode. We'll be creating a serverless function that serves as the proxy and deploying to [Now](https://zeit.co/now). We'll use Now's configuration file to route all traffic through a single endpoint: `index.js`. 

## What's A Proxy?
TLDR;

Proxy's serve as a layer between you and the rest of the internet by providing things like extra security, privacy, access to blocked resources, etc.

There's also a [longer read](https://www.varonis.com/blog/what-is-a-proxy-server/) that dives deeper into what a proxy is and what it can do. Along with the **potential risks** associated with using one.

## What's A Serverless Function?
