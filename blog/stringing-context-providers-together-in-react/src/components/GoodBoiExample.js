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
