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
