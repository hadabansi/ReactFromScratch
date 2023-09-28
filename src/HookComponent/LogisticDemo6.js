import React, { useState } from 'react';

function LogisticDemo6() {
  const [selectedUnit, setSelectedUnit] = useState('Temperature');
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  const handleInputChange = (e, inputNumber) => {
    const value = parseFloat(e.target.value);
      setInputValue1(inputNumber === 1 ? value : (selectedUnit === 'Temperature' ? ((value - 32) * 5/9) : value * 60));
      setInputValue2(inputNumber === 2 ? value : (selectedUnit === 'Temperature' ? (value * 9/5 + 32) : value / 60));
  };

  const handleUnitChange = (e) => {
    setSelectedUnit(e.target.value);
    setInputValue1('');
    setInputValue2('');
  };

  const handleInput1Change = (e) => {
    handleInputChange(e, 1);
  };
  const handleInput2Change = (e) => {
    handleInputChange(e, 2);
  };
  return (
    <div>
      <select className="design" onChange={handleUnitChange} value={selectedUnit}>
        <option value="Temperature">Temperature</option>
        <option value="Time">Time</option>
      </select>
      <div style={{ marginTop: '20px' }}>
        <div>
          <input
            type="number"
            value={inputValue1}
            onChange={handleInput1Change}
            placeholder={selectedUnit === 'Temperature' ? 'Celsius' : 'Seconds'}
          />
          <input
            type="number"
            value={inputValue2}
            onChange={handleInput2Change}
            placeholder={selectedUnit === 'Temperature' ? 'Fahrenheit' : 'Minutes'}
          />
        </div>
        <div>
          <label style={{ padding: '0px 50px 0px 70px' }}>{selectedUnit === 'Temperature' ? 'Celsius' : 'Seconds'}</label>
          <label style={{ padding: '0px 55px 0px 85px' }}>{selectedUnit === 'Temperature' ? 'Fahrenheit' : 'Minutes'}</label>
        </div>
      </div>
    </div>
  );
}

export default LogisticDemo6;
