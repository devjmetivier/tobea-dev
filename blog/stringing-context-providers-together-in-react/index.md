---
title: "Stringing Context Providers Together In React"
date: "2019-05-20"
categories:
- React
- Context
---

State management in React can be an incredible beast of a task. With the introduction of the [Context API](https://reactjs.org/docs/context.html), React has come up with a great alternative to [Redux](https://redux.js.org). However, there's been some discussion that the API for context isn't quite as pretty as Redux (even though under the hood, Redux is using Context). Creating multiple context providers for different data points in your application using Context can look a little something like this:
