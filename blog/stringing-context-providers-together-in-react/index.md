---
title: "Stringing Context Providers Together In React"
date: "2019-05-20"
categories:
- React
- Context
---

State management in React can be an incredible beast of a task. With the introduction of the [Context API](https://reactjs.org/docs/context.html), React has come up with a great alternative to [Redux](https://redux.js.org). However, there's been some discussion that the API for context isn't quite as pretty as Redux (even though under the hood, Redux is using Context). Creating multiple context providers for different data points in your application using Context can look a little something like this:

```js
import React, { createContext, useState, useContext } from 'react';

const PatsContext = createContext();

function usePats() {
  const context = useContext(PatsContext);
  if (!context) throw new Error('usePats must be used within a PatsProvider');
  return context;
}

function PatsProvider(props) {
  const [pats, givePats] = useState(0);
  const value = React.useMemo(() => [pats, givePats], [pats]);
  return <PatsContext.Provider value={value} {...props} />;
}

function GoodBoi() {
  const [, givePats] = usePats();
  return (
    <button type='button' onClick={() => givePats(prevPats => prevPats + 1)}>
      Good Boi!
    </button>
  );
}

function PatsDisplay() {
  const [pats] = usePats();
  return <div>The good boi has received {pats} pats.</div>;
}

function GoodBoiPage() {
  return (
    // shorthand for <React.Fragment>
    <>
      <PatsProvider>
        <PatsDisplay />
        <GoodBoi />
      </PatsProvider>
    </>
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

This works fine for the context of having one provider. If we have multiple contexts controlling different bits of state in our applications, it can start looking a little messy:

```js
//...
function AppContainer() {
  return (
    <ContextProvider>
      <AnotherContextProvider>
        <YetAnotherContextProvider>
          <PatsDisplay />
          <GoodBoi />
        </YetAnotherContextProvider>
      </AnotherContextProvider>
    </ContextProvider>
  );
}
```

You get the idea... But how can we mitigate this so it doesn't look like an enormous cluster🤬🤬🤬🤬 of Providers that we're unnecessarily deeply nesting? We can compose a Context Provider that combines all of the contexts into one top-level component! We'll use the `.reduceRight()` array method and `React.cloneElement()` to achieve this:

```js
import React, { cloneElement } from 'react';

// import providers
import { ExportedProvider } from './path/to/provider';

function ProviderComposer({ contexts, children }) {
  return contexts.reduceRight(
    (kids, parent) =>
      cloneElement(parent, {
        children: kids,
      }),
    children
  );
}

export function ContextProvider({ children }) {
  return (
    <ProviderComposer
      // add providers to array of contexts
      contexts={
        [
          <ExportedProvider/>,
          <AnotherExportedProvider/>
        ]
      }
    >
      {children}
    </ProviderComposer>
  );
}
```

import GoodBoiWithCount from './src/components/GoodBoiWithCount';

<GoodBoiWithCount />
