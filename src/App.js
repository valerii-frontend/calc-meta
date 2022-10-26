import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);
  const [isZero, setIsZero] = useState(null);

  function plus(e) {
    e.preventDefault();
    setIsZero(false);
    setResult((result) => +(result + Number(inputRef.current.value)).toFixed(8));
  }

  function minus(e) {
    e.preventDefault();
    setIsZero(false);
    setResult((result) => +(result - Number(inputRef.current.value)).toFixed(8));
  }

  function times(e) {
    e.preventDefault();
    setIsZero(false);
    setResult((result) => +(result * Number(inputRef.current.value)).toFixed(8));
  }

  function divide(e) {
    e.preventDefault();

    if (result == 0 || inputRef.current.value == 0) {
      setIsZero(true);
    } else {
      setIsZero(false);
      setResult((result) => +(result / Number(inputRef.current.value)).toFixed(8));
    }
  }

  function resetInput(e) {
    e.preventDefault();
    setIsZero(false);
    inputRef.current.value = 0;
  }

  function resetResult(e) {
    e.preventDefault();
    setIsZero(false);
    setResult(0);
  }

  return (
    <div className='App'>
      <h1>Simplest Working Calculator</h1>
      <form>
        <div className='input'>
          <input pattern='[0-9]' ref={inputRef} type='number' placeholder='Type a number' title='input' />
          <div className='more'>+</div>
          <div className='less'>-</div>
          {isZero && <em>You can't divide to zero!</em>}
        </div>
        <p ref={resultRef}>
          Result: <span title='result'>{result}</span>
        </p>
        <div className='buttons'>
          <button onClick={plus} title='add'>
            ➕
          </button>
          <button onClick={minus} title='minus'>
            ➖
          </button>
          <button onClick={times} title='multiply'>
            ❌
          </button>
          <button onClick={divide} title='divide'>
            ➗
          </button>
        </div>
        <div>
          <button className='reset' title='reset result' onClick={resetResult}>
            reset result
          </button>
          <button className='reset' title='reset input' onClick={resetInput}>
            reset input
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
