import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './counterSlice';
import Child from './Child';

function Parent() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const incrementCount = () => {
    dispatch(increment());
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
      <Child />
    </div>
  );
}

export default Parent;
