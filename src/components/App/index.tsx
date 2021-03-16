import React, { useState } from 'react';
import UiNumeral, { format } from '../UiNumeral';

function App() {
  const [value, setValue] = useState<number>(0);
  return (
    <div>
      <div style={{ marginTop: 15 }}>
        <UiNumeral format={format.money}>{value}</UiNumeral>
      </div>
      <div style={{ marginTop: 15 }}>
        <UiNumeral format={format.bytes}>{value}</UiNumeral>
      </div>
      <div style={{ marginTop: 15 }}>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(+e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
