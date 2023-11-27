import logo from './logo.svg';
import './App.css';
import { Var } from './demo';
import React,{useState} from 'react'
import Demo from './new/Demo';

function App() {

  // USE STATE

  // const [first, setfirst] = useState(0)
  //   const a =()=>{
  //     setfirst(first+1)
  //   }
  //   const b=()=>{
  //     setfirst(first-1)
  //   }
  
  // return (
  //   <div className="App">
  //    <Var />
  //   <button onClick={a}>click</button>
  //   {first}
  //   <button onClick={b}>click</button>
    
    
     
  //   </div>
  // );
  return(
    <Demo/>
  )



}


export default App;
