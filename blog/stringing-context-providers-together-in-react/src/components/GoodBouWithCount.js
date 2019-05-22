import React, { useContext } from 'react';
import { ContextProvider } from './ProviderComposer';
import { PatsContext } from '../context/GoodBoiContext';
import { CountContext } from '../context/CountContext';

export default function GoodBoiWithCount() {
  const pats = useContext(PatsContext);
  const count = useContext(CountContext);

  console.log(pats, count);

  return (
    <ContextProvider>
      <div>Good Boi</div>
      <button type='button'>+1</button>
      <div>Count</div>
      <button type='button'>+1</button>
    </ContextProvider>
  );
}
