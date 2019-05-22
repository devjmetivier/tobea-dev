import React, { createContext, useState } from 'react';

export const CountContext = createContext();

export function CountProvider(props) {
  const [count, setCount] = useState(0);
  const value = React.useMemo(() => [count, setCount], [count]);
  return <CountContext.Provider value={value} {...props} />;
}
