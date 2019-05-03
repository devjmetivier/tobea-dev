import React from 'react';

const DataView = props => {
  const { data } = props;

  return (
    <div>
      <button type='button'>i</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataView;
