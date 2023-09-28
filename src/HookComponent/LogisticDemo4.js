import React,{useState} from 'react'

function LogisticDemo4() {
  const [isVisible, setIsVisible] = useState(true);

  const show = () => {
    setIsVisible(true);
  };

  const hide = () => {
    setIsVisible(false);
  };
  return (
      <div>
      <p id="showp" style={{ display: isVisible ? 'block' : 'none' }}>
        You can Show and Hide me with these buttons
      </p>
      <button onClick={hide}>Hide the text above</button>
      <button onClick={show}>Show the text above</button>
    </div>
  )
}

export default LogisticDemo4