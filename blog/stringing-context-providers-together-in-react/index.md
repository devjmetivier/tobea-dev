---
title: "Global State Cleanliness With React Context"
date: "2019-05-20"
categories:
- React
- Context
---

State management in React can be an incredible beast of a task. With the introduction of the [Context API](https://reactjs.org/docs/context.html), React has come up with a great alternative to [Redux](https://redux.js.org). However, there's been some discussion that the API for context isn't quite as pretty as Redux (even though under the hood, Redux is using Context). In this article I'm going to teach you some best practices with context using hooks, and a clever way to string your context providers together into a single component to wrap your applications:

Creating a context provider with hooks can look a little something like this:

```js
// src/App.js
import React, { createContext, useState, useContext, useMemo } from 'react';

const PatsContext = createContext();

function PatsProvider(props) {
  const [pats, givePats] = useState(0);
  const value = useMemo(() => [pats, givePats], [pats]);
  return <PatsContext.Provider value={value} {...props} />;
}

function GoodBoi() {
  const [, givePats] = useContext(PatsContext);

  return (
    <button type='button' onClick={() => givePats(prevPats => prevPats + 1)}>
      Good Boi!
    </button>
  );
}

function PatsDisplay() {
  const [pats] = useContext(PatsContext);
  return <div>The good boi has received {pats} pats.</div>;
}

function GoodBoiPage() {
  return (
    <PatsProvider>
      <PatsDisplay />
      <GoodBoi />
    </PatsProvider>
  );
}

export default GoodBoiPage;
```

import GoodBoiPage from './src/components/GoodBoiPage';

<div style="border: 2px solid black; padding: 8px; margin-bottom: 15px;">
  <GoodBoiPage />
</div>

Good bois love a good pat...

![good boi](https://media.giphy.com/media/8P4SDAYxUNuk3HqIHb/giphy.gif)
