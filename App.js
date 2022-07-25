import React, { useState } from "react";
import './App.css';
 const App = () => {
  const  [result,setResult] =useState('');

const addHandler = (event) => {
  setResult(result.concat(event.target.value))
}
 const ClearHandler = () => {
  setResult('')
 } 
 const Calculate =() =>{
  setResult(eval(result).toString());
 }
  return (
    <div className="arman">
      <input type='text' placeholder="0" id="answer"  value={result}/>
      <input type='button' value='9' className="button"  onClick={addHandler}/>
      <input type='button' value='8' className="button" onClick={addHandler}/>
      <input type='button' value='7' className="button" onClick={addHandler}/>
      <input type='button' value='6' className="button" onClick={addHandler}/>
      <input type='button' value='5' className="button" onClick={addHandler}/>
      <input type='button' value='4' className="button" onClick={addHandler}/>
      <input type='button' value='3' className="button" onClick={addHandler}/>
      <input type='button' value='2' className="button" onClick={addHandler}/>
      <input type='button' value='1' className="button" onClick={addHandler}/>
      <input type='button' value='0' className="button" onClick={addHandler}/>
      <input type='button' value='*' className="button" onClick={addHandler}/>
      <input type='button' value='+' className="button" onClick={addHandler}/>
      <input type='button' value='.' className="button" onClick={addHandler}/>
      <input type='button' value='/' className="button" onClick={addHandler}/>
      <input type='button' value='%' className="button" onClick={addHandler}/>
      <input type='button' value='-' className="button" onClick={addHandler}/>
      <input type='button' value='clear' className="button button1"  onClick={ClearHandler}/>
      <input type='button' value='=' className="button button1" onClick={Calculate}/>
      

    </div>
    
  )
 };
 export default App;
//css//

//.arman{
width: 320px;
margin: 100px auto;
}
#answer{
  background-color: greenyellow;
  padding: 10px;
  font-size: 35px;
  width: 295px;
  height: 45px;
  text-align: right;
  border: 3px solid #333;
}
.button{
  background: #333;
  height: 80px;
  width: 80px;
  color: white;
  font-size: 30px;
  border: 1px solid black;
  float: left;
}
.button1{
  width: 160px;
}//






