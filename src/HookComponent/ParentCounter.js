import React, { useState } from 'react';
import ChildCounter from './ChildCounter';


function ParentCounter() {
  const [counters, setCounters] = useState([{ id: 1, count: 0 }]);

  const cloneCounter = () => {
    const newCounterId = counters.length + 1;
    setCounters([...counters, { id: newCounterId, count: 0 }]);
  };

  const updateCount = (id, newCount) => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) =>
        counter.id === id ? { ...counter, count: newCount } : counter
      )
    );
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={cloneCounter}>Clone</button>
      <div className='container'>
      {counters.map((counter) => (
        <div key={counter.id} id={counter.id} className='clonedivcss'>
          <ChildCounter counter={counter} updateCount={updateCount} />
          <span>Count: {counter.count}</span>
        </div>
      ))}
      </div>
    </div>
  );
}

export default ParentCounter;
