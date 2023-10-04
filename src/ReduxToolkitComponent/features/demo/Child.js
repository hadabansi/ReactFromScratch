import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement } from './counterSlice';

function Child() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const decrementCount = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h2>Child Component</h2>
      <p>Count in Child: {count}</p>
      <button onClick={decrementCount}>Decrement Count in Child</button>
    </div>
  );
}

export default Child;
