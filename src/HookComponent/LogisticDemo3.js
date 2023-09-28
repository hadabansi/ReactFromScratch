import React,{useState} from 'react'

function LogisticDemo3() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        id="ipval"
        value={inputValue}
        onChange={handleInputChange}
      />
      <p id="iptxt">{inputValue}</p>
    </div>
  );
}
export default LogisticDemo3