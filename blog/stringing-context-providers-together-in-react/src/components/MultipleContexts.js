import React, { createContext, useState, useContext, useMemo } from 'react';

const PatsContext = createContext();

function PatsProvider(props) {
  const [pats, givePats] = useState(0);
  const value = useMemo(() => [pats, givePats], [pats]);
  return <PatsContext.Provider value={value} {...props} />;
}

function usePats() {
  const context = useContext(PatsContext);
  if (!context) throw new Error(`usePats must be used with a PatsProvider`);
  const [pats, givePats] = context;
  return { pats, givePats };
}

const CountContext = createContext();

function CountProvider(props) {
  const [count, setCount] = useState(0);
  const value = useMemo(() => [count, setCount], [count]);
  return <CountContext.Provider value={value} {...props} />;
}

function useCount() {
  const context = useContext(CountContext);
  if (!context) throw new Error(`useCount must be used with a CountProvider`);
  const [count, setCount] = context;
  return { count, setCount };
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

function Count() {
  const { setCount } = useCount();

  return (
    <button type='button' onClick={() => setCount(prevPats => prevPats + 1)}>
      +1
    </button>
  );
}

function CountDisplay() {
  const { count } = useCount();
  return <div>Count: {count}</div>;
}

function GoodBoiPage() {
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

export default GoodBoiPage;
