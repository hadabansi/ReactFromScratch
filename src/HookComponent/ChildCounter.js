import React, { useState } from 'react';

function ChildCounter(props) {
  const { counter, updateCount } = props;
  const [count, setCount] = useState(counter.count);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    updateCount(counter.id, newCount);
  };

  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    updateCount(counter.id, newCount);
  };

  return (
    <div>
      <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default ChildCounter;
