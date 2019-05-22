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

function GoodBoiExample() {
  return (
    <PatsProvider>
      <PatsDisplay />
      <GoodBoi />
    </PatsProvider>
  );
}

export default GoodBoiExample;
```

import GoodBoiExample from './src/components/GoodBoiExample';

<div style="border: 2px solid black; padding: 8px; margin-bottom: 15px;">
  <GoodBoiExample />
</div>

Good bois love a good pat 😀

![good boi](https://media.giphy.com/media/8P4SDAYxUNuk3HqIHb/giphy.gif)

That looks pretty good 👍🏻 But hooks can be used a little better than that. Take the `GoodBoi` component:

```js {2}
function GoodBoi() {
  const [, givePats] = useContext(PatsContext);

  return (
    <button type='button' onClick={() => givePats(prevPats => prevPats + 1)}>
      Good Boi!
    </button>
  );
}
```

Using Array Destructuring we can extract the `givePats()` state updater method from `PatsContext`, but it's not the prettiest way to do that. We only need the `givePats()` method from context, so we have to put a comma in front of it to get ONLY the method that we need for that component from context. I'm not a particular fan of that. We'll delve into why this isn't ideal later, but for now let's extract our context and compose a hook that uses `PatsContext` and all its methods:

```js {2-7, 10, 20}
// src/App.js
function usePats() {
  const context = useContext(PatsContext);
  if (!context) throw new Error(`usePats must be used with a PatsProvider`);
  const [pats, givePats] = context;
  return { pats, givePats };
}

function GoodBoi() {
  const { givePats } = usePats();

  return (
    <button type='button' onClick={() => givePats(prevPats => prevPats + 1)}>
      Good Boi!
    </button>
  );
}

function PatsDisplay() {
  const { pats } = usePats();
  return <div>The good boi has received {pats} pats.</div>;
}
```

In the above code we're making a basic hook that uses `PatsContext`. It then destructures the context and returns an object with `pats` and the `givePats()` method. The benefit here is that destructuring looks a lot cleaner in our components, and there's better intellisense support in editors when using Object Destructuring. Gotta love autocomplete code 💚

