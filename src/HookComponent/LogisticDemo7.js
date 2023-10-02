// src/components/ColorChooser.js

import React, {useState} from 'react';

function LogisticDemo7() {

  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);


  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === 'red'){
         setRed(value)
    } else if (id === 'green') {
         setGreen(value)
    } else if (id === 'blue') {
         setBlue(value)
    }
  };
  return (
    <div onChange={handleInputChange}>
      <div>
        <label htmlFor="red">Red:</label>
        <input
          type="range"
          id="red"
          min="0"
          max="255"
          value={red}
        />
        <input
          type="number"
          id="red"
          min="0"
          max="255"
          value={red}
        />
      </div>
      <div>
        <label htmlFor="green">Green:</label>
        <input
          type="range"
          id="green"
          min="0"
          max="255"
          value={green}
        />
         <input
          type="number"
          id="green"
          min="0"
          max="255"
          value={green}
        />
      </div>
      <div>
        <label htmlFor="blue">Blue:</label>
        <input
          type="range"
          id="blue"
          min="0"
          max="255"
          value={blue}
        />
         <input
          type="number"
          id="blue"
          min="0"
          max="255"
          value={blue}
        />
      </div>
      <div
        className="color-box"
        style={{ backgroundColor: `rgb(${red},${green},${blue})` }}
      >
        RGB({red}, {green}, {blue})
      </div>
    </div>
  );
}

export default LogisticDemo7;
