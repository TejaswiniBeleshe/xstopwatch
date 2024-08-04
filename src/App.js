import React,{useEffect, useState} from "react"
import './App.css';

function App() {
  const [min,setMin] = useState(0);
  const [l,setL] = useState(0);
  const [r,setR] = useState(0);
  const [tog,setTog] = useState(false)
  const [t,setT] = useState(0);
  useEffect(()=>{
    let intervalId,time=t;
    if(tog){
        intervalId = setInterval(()=>{
        time=time+1;
        if(time===60){
          setMin((prev)=>prev+1);
          setR(0);
          // setL(0);
          time=0;
        }else{
        setR(time);
        setT(time);
        }
        },1000);
      }else{
          clearInterval(intervalId)
      }
      return ()=>{
        clearInterval(intervalId)
      }
    },[tog])
    const resetFun = ()=>{
      setMin(0);
      setR(0);
      setT(0)
      setTog(false);
    }
  return (
    <div className="App">
         <h2>Stopwatch</h2>
         <p>{min}:{r>=10?"":l}{r}</p>
         <button onClick={()=>setTog((prev)=>!prev)}>{!tog?"Start":"Stop"}</button>{" "}
         <button onClick={resetFun}>Reset</button>
    </div>
  );
}

export default App;
