---
title: "Global State Cleanliness With React Context"
date: "2019-05-20"
categories:
- React
- Context
---

State management in React can be an incredible beast of a task. With the introduction of the [Context API](https://reactjs.org/docs/context.html), React has come up with a great alternative to [Redux](https://redux.js.org). However, there's been some discussion that the API for context isn't quite as pretty as Redux (even though under the hood, Redux is using Context). In this article I'm going to teach you some best practices with context using hooks, and a clever way to string your context providers together into a single component to wrap your applications.

## Initial Setup

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

That looks pretty good 👍🏻 But hooks can be used a little better than that. Take the `GoodBoi` component for example:

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

Using Array Destructuring we can extract the `givePats()` method from `PatsContext`, but it's not very elegant. We only need the `givePats()` method from context in this component, so we have to put a comma in front of it to get ONLY the method that we need for that component from context. I'm not a particular fan of that. We'll delve into why this isn't ideal later, but for now let's extract our context and write a hook that uses `PatsContext` and returns all its methods:

```js {2-7,10,20}
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

In the above code we're making a basic hook that uses `PatsContext`. It then destructures the context and returns an object with `pats` and the `givePats()` method. The benefit here is that destructuring looks a lot cleaner in our components, and there's better intellisense support in editors when using Object Destructuring. Gotta love autocomplete 💚

## Deep Nesting

Now... What happens when we use multiple contexts in our app? Let's assume that we're using something that uses the same structure as our `GoodBoi` example that counts up and we've already extracted previous functionality into it's own file `GoodBoi.js`. We'll call this one "Retrieve":

```js {3-4}
// src/App.js
import React from 'react';
import { PatsProvider, PatsDisplay, GoodBoi } from './components/GoodBoi';
import { RetrieveProvider, RetrieveDisplay, RetrieveCount } from './components/Retrieve';

function App() {
  return (
    <PatsProvider>
      <RetrieveProvider>
        <PatsDisplay />
        <GoodBoi />
        <RetrieveDisplay />
        <RetrieveCount />
      </RetrieveProvider>
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

![fetch!](https://media.giphy.com/media/klPeFHrWqzPDW/giphy.gif)

But don't you see how ugly it is that we have to nest our providers?

```js {4-5,10-11}
// src/App.js
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

## Let's Get Fancy

🤮 We can do better... Especially as the layers of complexity pile into our applications. 

> "But Devin... That's just something that we have to deal with. Multiple contexts require that you just nest a bunch of providers..."

Well... Yes... But it doesn't have to be ugly. Let's compose and string all of our context providers together into a single provider we can use as the global wrapper for our application:

```js
// src/components/ProviderComposer.js
import React, { cloneElement } from 'react';

// import providers
import { PatsProvider } from '../components/GoodBoiContext';
import { CountProvider } from '../components/CountContext';

function ProviderComposer({ contexts, children }) {
  return contexts.reduce(
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

And in our `App.js`, we'll just import the single `ContextProvider` and wrap our application:

```js {3-5,9,14}
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

import MultipleContextsComposed from './src/components/MultipleContextsComposed';

<div style="border: 2px solid black; padding: 8px; margin-bottom: 15px; backgorund: white;">
  <MultipleContextsComposed />
</div>

![cool dog](https://media.giphy.com/media/LqafmeaBVxCRG/giphy.gif)

🤯 That works pretty darn good!

> "What in the world is going on here?"

Glad you asked! The `ProviderComposer` works like this:

* Grab all contexts from `contexts` props array
* Use `.reduce()` to accumulate contexts
* Recursively use `cloneElement()` from the [React Top-Level API](https://reactjs.org/docs/react-api.html#cloneelement) to preserve props from multiple contexts
* Add all providers to `contexts` prop inside `ContextProvider`
* Done!

Look at how happy we made this corgi's butt:

![happy corgi butt](https://media.giphy.com/media/4EFqTtNjMBmJzKTm1N/giphy.gif)

What this is essentially doing is the equivalent of wrapping contexts over and over inside of more contexts. A visual representation:

```js
function ContextProvider({ children }) {
  return (
    <OneProvider>
      <TwoProvider>
        <ThreeProvider>
          <FourProvider>
          {children}
          </FourProvider>
        </ThreeProvider>
      </TwoProvider>
    </OneProvider>
  );
}
```

But that's ugly 🤮 and we don't like that. So we use some clever tricks to reduce how convoluted React Context Providers can be. And there you have it! What you have now is an understanding of how to compose multiple contexts to any scale using hooks and a clever trick to string your contexts together. It's sort of like recreating Redux in a way, only it doesn't have all the same features like "time travel" for example.

## Attributions

* [Kent C Dodds](https://kentcdodds.com/blog/how-to-use-react-context-effectively) for his awesome article teaching us how to use context more efficiently
* [Scott Tolinski](https://www.youtube.com/watch?v=52W__dKdNnU) for his method that he found for stringing context providers together


