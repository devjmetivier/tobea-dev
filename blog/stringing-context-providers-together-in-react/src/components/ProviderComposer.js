import React, { cloneElement } from 'react';

// import providers
import { PatsProvider } from '../context/GoodBoiContext';
import { CountProvider } from '../context/CountContext';

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
      contexts={[<PatsProvider />, <CountProvider />]}
    >
      {children}
    </ProviderComposer>
  );
}
