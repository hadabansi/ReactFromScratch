import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selecteddropdown } from './dropdownSlice';
import { changeinputvalue } from './inputSlice';
import { managecheckbox1, managecheckbox2, managecheckbox3 } from './checkboxSlice';
import Child from './Child';

function Parent16() {
  const dropdownvalue = useSelector((state) => state.dropdown.selectvalue);
  const inputvalue=useSelector((state)=>state.inputval.initialvalue);
  const checkbox1val=useSelector((state)=>state.checkboxval.chone);
  const checkbox2val=useSelector((state)=>state.checkboxval.chtwo);
  const checkbox3val=useSelector((state)=>state.checkboxval.chthree);
  console.log(checkbox1val);
  console.log(checkbox2val);
  console.log(checkbox3val);
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
  const changecheckbox1=(e)=>{
    dispatch(managecheckbox1(e.target.checked));
  }
  const changecheckbox2=(e)=>{
    dispatch(managecheckbox2(e.target.checked));
  }
  const changecheckbox3=(e)=>{
    dispatch(managecheckbox3(e.target.checked));
  }
  return (
    <div><br/>
    <h2><b>Parent Checkbox</b></h2>
    <input type="checkbox" checked={checkbox1val} onChange={changecheckbox1}/><b>IOS</b><br/>
    <input type="checkbox" checked={checkbox2val} onChange={changecheckbox2}/><b>Android</b><br/>
    <input type="checkbox" checked={checkbox3val} onChange={changecheckbox3}/><b>Angular</b><br/>
    <h2><b>Parent Input</b></h2>
    <input value={inputvalue} onChange={chageIpValue}/>
    <h2><b>Parent dropdown</b></h2>
     <select value={dropdownvalue} onChange={changeValue}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
     </select> 
     <Child checkboxval={[checkbox1val,checkbox2val,checkbox3val]} changecheckbox={[changecheckbox1,changecheckbox2,changecheckbox3]}/>
    </div>
  );
}

export default Parent16;
