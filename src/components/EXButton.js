import React, { useState } from 'react';

export default function EXButton() {
  const [count, updateCount] = useState(0);

  return (
    <button type='button' onClick={() => updateCount(count + 1)}>
      Count: {count}
    </button>
  );
}
