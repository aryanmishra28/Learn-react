import { useState } from "react";

function App() {
  // useState hook to manage counter state
  const [counter, setCounter] = useState(0);

  function reset() {
    setCounter(0);
  }

  function increase() {
    setCounter(counter + 1);
     if(counter >= 20){
      setCounter(20);
    }
  }

  function decrease() {
    setCounter(counter - 1);
    if(counter <= 0){
      setCounter(0);
    }
  }


  return (
    <div>
      <h1>Counting People</h1>
      <h2>Counter : {counter}</h2>
      <button id="increment" onClick={increase}>Increment</button>
      <button id="decrement" onClick={decrease}>Decrement</button>
      <button id="reset" onClick={reset}>Reset</button>
    </div>
  );
}

export default App;


//Through Javascript DOM Manipulation
// function App() {
//   let counter = 15;

//   function increase() {
//     counter++;
//     document.getElementById("count").innerText = counter;
//   }

//   function decrease() {
//     counter--;
//     document.getElementById("count").innerText = counter;
//   }

//   function reset() {
//     counter = 0;
//     document.getElementById("count").innerText = counter;
//   }

//   return (
//     <div>
//       <h1>Counting People</h1>
//       <h2 id="count">{counter}</h2>
//       <button id="increment" onClick={increase}>Increment</button>
//       <button id="decrement" onClick={decrease}>Decrement</button>
//       <button id="reset" onClick={reset}>Reset</button>
//     </div>
//   );
// }

// export default App;
