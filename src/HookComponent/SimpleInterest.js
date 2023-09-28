
import React, { useState, useEffect } from 'react';

function InterestCalculator() {

  const [principal, setPrincipal] = useState('10000');
  const [rate, setRate] = useState('10');
  const [time, setTime] = useState('year');
  const [period, setPeriod] = useState(1);
  const [result, setResult] = useState(null);
  const [InterestType,setInterestType] = useState('simple');
  const [compoundFrequency, setCompoundFrequency] = useState('year');


  const handleInpput=(e)=>{
    if(e.target.id==='principal'){
        setPrincipal(e.target.value)
    }
    else if(e.target.id==='period'){
        setPeriod(e.target.value)
    }
    else{
        setRate(e.target.value)
    }
  }
 
  
  const calculateInterest = () => {
    console.log("it goes")
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100; 
    let t = parseFloat(period);
    let n = 1;

     switch (time) {
        case 'day':
          t /= 365;
          break;
        case 'month':
          t /= 12;
          break;
        case 'week':
          t /= 52;
          break;
        default:
          t /= 1;
      }

    if (p && r ) {
      switch (compoundFrequency) {
        case 'day':
          n = 365;
          break;
        case 'month':
          n = 12;
          break;
        case 'week':
          n = 52;
          break;
        default:
          n = 1;
      }
      if (InterestType === 'compound') {
        const compoundInterest = p * (Math.pow(1 + r / n, n * t) - 1);
        setResult(compoundInterest.toFixed(2));
      } else {
        const simpleInterest = (p * r * t);
        setResult(simpleInterest.toFixed(2));
      }
    } else {
      setResult(null);
    }
};

  useEffect(() => {
    calculateInterest();
  }, [principal, rate, time, InterestType, compoundFrequency,period]);

    const compoundFrequencyStyle = {
    display: InterestType==='compound' ? 'block' : 'none',
  };

  return (
    <div>
      <h2>Interest Calculator</h2>
       <div>
        <label><b>Interest Type</b></label><br/>
        <select
          value={InterestType}
          onChange={(e) => setInterestType(e.target.value)}
        >
          <option value="simple">Simple Interest</option>
          <option value="compound">Compound Interest</option>
        </select>
      </div>
       <div style={compoundFrequencyStyle}>
        <label><b>Compound Frequency:</b></label><br/>
        <select
          value={compoundFrequency}
          onChange={(e) => setCompoundFrequency(e.target.value)}
        >
          <option value="day">Daily</option>
          <option value="month">Monthly</option>
          <option value="week">Weekly</option>
          <option value="year">Annually</option>
        </select>
      </div>
      <div> 
        <label><b>Principal Amount:</b></label><br/>
        <input
          type="number"
          value={principal}
          id="principal"
          onChange={handleInpput}
        />
      </div>
      <div>
        <label><b>Rate of Interest (% per annum):</b></label><br/>
        <input
          type="number"
          value={rate}
          id="rate"
          onChange={handleInpput}
        />
      </div>
      <div>
        <label><b>Period Unit:</b></label><br/>
         <select
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          <option value="day">Daily</option>
          <option value="month">Monthly</option>
          <option value="week">Weekly</option>
          <option value="year">Annually</option>
        </select>
      </div>
       <div> 
        <label><b>Period Optional:</b></label><br/>
        <input
          type="number"
          value={period}
          id="period"
          onChange={handleInpput}
        />
      </div>
      {result !== null && (
        <div>
          <p>
            {InterestType==='compound'
              ? 'Compound Interest:'
              : 'Simple Interest:'}
            ₹{result}
          </p>
          <p>Principal Amount ₹{principal}</p>
          <p>Total Value:₹{(parseFloat(principal)+parseFloat(result)).toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default InterestCalculator;
