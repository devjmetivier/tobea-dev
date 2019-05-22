import React, { createContext, useState } from 'react';

export const PatsContext = createContext();

export function PatsProvider(props) {
  const [pats, givePats] = useState(0);
  const value = React.useMemo(() => [pats, givePats], [pats]);
  return <PatsContext.Provider value={value} {...props} />;
}
