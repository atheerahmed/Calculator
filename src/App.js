import './App.css';
import Result from './components/Result';
import Inputs from './components/Inputs'
import { useState } from 'react';


function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');


  const onclick1 = () => {
    setResult(Number(number1)  + Number (number2))

  };
  const onclick2 = () => {
    setResult(Number(number1) - Number(number2))

  };
  const onclick3 = () => {
    setResult(Number(number1)*Number(number2))

  };
  const onclick4 = () => {
    setResult(Number(number1)/Number(number2))

  };
  const onclick5 = () => {
    setResult(Number(number1)%Number(number2))
  };

  const onChange1 = (e) => {
    setNumber1=(e.target.value);
    setResult(0);
  };
  const onChange2 = (e)=>{
    setNumber2=(e.target.value);
    setResult(0);
  };
  return (
    <>
      <h1 className='header'> Calculator</h1>
     <Inputs number1={number1}  number2={number2} onChange1={onChange1} onChange2={onChange2} />   
    <div >
        <button onClick={onclick1} type="button" className="btn btn-secondary buttons">+</button>
        <button onClick={onclick2} type="button" className="btn btn-secondary  buttons">-</button>
        <button onClick={onclick3} type="button" className="btn btn-secondary  buttons">*</button>
        <button onClick={onclick4} type="button" className="btn btn-secondary  buttons">/</button>
        <button onClick={onclick5} type="button" className="btn btn-secondary  buttons">%</button>

    </div>

   <Result result={result}/>
    </>
  );
}

export default App;
