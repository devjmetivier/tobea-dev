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

<div style="border: 2px solid black; padding: 8px; margin-bottom: 15px; backgorund: white;">
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

Now... What happens when we use multiple contexts in our app? Let's assume that we're using something that uses the same structure as our `GoodBoi` example that counts up and we've already extracted previous functionality into it's own file `GoodBoi.js`. Ee'll call this one "Count":

```js
// src/App.js
import React from 'react';
import { PatsProvider, PatsDisplay, GoodBoi } from './components/GoodBoi';
import { CountProvider, CountDisplay, Count } from './components/Count';

function App() {
  return (
    <PatsProvider>
      <CountProvider>
        <PatsDisplay />
        <GoodBoi />
        <CountDisplay />
        <Count />
      </CountProvider>
    </PatsProvider>
  );
}

export default App;
```

And it works!

import MultipleContexts from './src/components/MultipleContexts';

<div style="border: 2px solid black; padding: 8px; margin-bottom: 15px; backgorund: white;">
  <MultipleContexts />
</div>

But do you see how ugly it is that we have to nest our providers?

```js {3-4, 9-10}
function App() {
  return (
    <PatsProvider>
      <CountProvider>
        <PatsDisplay />
        <GoodBoi />
        <CountDisplay />
        <Count />
      </CountProvider>
    </PatsProvider>
  );
}
```

🤮 We can do better... Especially as the layers of complexity pile into our applications. "But Devin... That's just something that we have to deal with. Multiple contexts require that you just nest a bunch of providers". I beg to differ. Let's compose and string all of our context providers together into a single provider we can use as the global wrapper for our application:

```js
// src/components/ProviderComposer
import React, { cloneElement } from 'react';

// import providers
import { PatsProvider } from '../components/GoodBoiContext';
import { CountProvider } from '../components/CountContext';

function ProviderComposer({ contexts, children }) {
  return contexts.reduceRight(
    (kids, parent) =>
      cloneElement(parent, {
        children: kids,
      }),
    children
  );
}

export default function ContextProvider({ children }) {
  return (
    <ProviderComposer
      // add providers to array of contexts
      contexts={[
        <PatsProvider />, 
        <CountProvider />
      ]}
    >
      {children}
    </ProviderComposer>
  );
}
```

And in our `App.js`, we'll just import the single ContextProvider and wrap our application:

```js {3-5, 9, 14}
// src/App.js
import React from 'react';
import ContextProvider from './components/ProviderComposer';
import { PatsDisplay, GoodBoi } from './components/GoodBoi';
import { CountDisplay, Count } from './components/Count';

function App() {
  return (
    <ContextProvider>
      <PatsDisplay />
      <GoodBoi />
      <CountDisplay />
      <Count />
    </ContextProvider>
  );
}

export default App;
```

