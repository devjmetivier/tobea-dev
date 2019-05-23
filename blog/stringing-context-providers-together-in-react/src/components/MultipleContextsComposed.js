import React, {
  createContext,
  useState,
  useContext,
  useMemo,
  cloneElement,
} from 'react';

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

const RetrieveContext = createContext();

function RetrieveProvider(props) {
  const [times, getBall] = useState(0);
  const value = useMemo(() => [times, getBall], [times]);
  return <RetrieveContext.Provider value={value} {...props} />;
}

function useRetrieve() {
  const context = useContext(RetrieveContext);
  if (!context)
    throw new Error(`useRetrieve must be used with a CountProvider`);
  const [times, getBall] = context;
  return { times, getBall };
}

// import providers
// import { PatsProvider } from '../contexts/GoodBoiContext';
// import { CountProvider } from '../contexts/CountContext';

function ProviderComposer({ contexts, children }) {
  return contexts.reduce(
    (kids, parent) =>
      cloneElement(parent, {
        children: kids,
      }),
    children
  );
}

function ContextProvider({ children }) {
  return (
    <ProviderComposer
      // add providers to array of contexts
      contexts={[<PatsProvider />, <RetrieveProvider />]}
    >
      {children}
    </ProviderComposer>
  );
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

function RetrieveCount() {
  const { getBall } = useRetrieve();

  return (
    <button type='button' onClick={() => getBall(prevBalls => prevBalls + 1)}>
      Go get it!
    </button>
  );
}

function RetrieveDisplay() {
  const { times } = useRetrieve();
  return <div>The good boi has retrieved the ball {times} times.</div>;
}

function GoodBoiPage() {
  return (
    <ContextProvider>
      <PatsDisplay />
      <GoodBoi />
      <RetrieveDisplay />
      <RetrieveCount />
    </ContextProvider>
  );
}

export default GoodBoiPage;
