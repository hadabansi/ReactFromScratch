import React, { useState, useEffect } from 'react';

function LogisticDemo5() {
  const [price, setPrice] = useState('');
  const [qty, setQty] = useState('');
  const [total, setTotal] = useState();

  const updateTotal = (priceValue, qtyValue) => {
    console.log(typeof(priceValue));
    const calculatedTotal = priceValue * qtyValue;
    console.log(typeof(calculatedTotal));
    setTotal(calculatedTotal);
  };

  useEffect(() => {
    updateTotal(price, qty);
  }, [price, qty]);

  return (
    <div>
      <label>Price</label>
      <input
        type="number"
        id="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      X
      <label>Quantity</label>
      <input
        type="number"
        id="qty"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
      /><br />
      <p id="total">{total}</p>
    </div>
  );
}

export default LogisticDemo5;
