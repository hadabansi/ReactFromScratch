import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selecteddropdown } from './dropdownSlice';
import { changeinputvalue } from './inputSlice';

function Child({checkboxval,changecheckbox}) {
  const dropdownvalue = useSelector((state) => state.dropdown.selectvalue);
  const inputvalue=useSelector((state)=>state.inputval.initialvalue);
  console.log(dropdownvalue)
  const dispatch = useDispatch();

  const changeValue = (e) => {
    const newValue = e.target.value;
    dispatch(selecteddropdown(newValue));
  };
  const chageIpValue=(e)=>{
    const newValue=e.target.value;
    dispatch(changeinputvalue(newValue))
  }
  return (
    <div><br/><br/>
    <h1><b>Duplicating State in Child Component</b></h1><br/><br/>
    <h2><b>Child Checkbox</b></h2>
    <input type="checkbox" checked={checkboxval[0]} onChange={changecheckbox[0]}/><b>IOS</b><br/>
    <input type="checkbox" checked={checkboxval[1]} onChange={changecheckbox[1]}/><b>Android</b><br/>
    <input type="checkbox" checked={checkboxval[2]} onChange={changecheckbox[2]}/><b>Angular</b><br/> 
    <h2><b>Child Input</b></h2>
    <input value={inputvalue} onChange={chageIpValue}/>
    <h2><b>Child dropdown</b></h2>
     <select value={dropdownvalue} onChange={changeValue}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
     </select>
    </div>
  );
}

export default Child;
