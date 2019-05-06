import React from 'react';

const DataView3 = props => {
  const { data } = props;
  const [visible, setVisible] = React.useState(false);

  return (
    <div>
      <button type='button' onClick={() => setVisible(prev => !prev)}>
        i
      </button>
      {visible && (
        <pre style={{ display: visible ? 'block' : 'none' }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default DataView3;
