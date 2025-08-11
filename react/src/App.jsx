import React from 'react'
import { useState, useEffect } from 'react'

function Card({title}){
  const[count, setCount] = useState(0); //useState is a hook that allows you to add state to functional components.
  const[hasLiked, sethasLiked] = useState(false);

  useEffect(() => {
    console.log(`The card titled "${title}" has been ${hasLiked ? 'liked' : 'unliked'}.`);
  },[hasLiked, title]); //useEffect is a hook that allows you to perform side effects in function components. It runs after the component renders and whenever the dependencies change.



  return (
    <div className='card' onClick={()=> setCount((count + 1))}>
      <h2>{title} - {count}</h2>
      <button onClick={() => sethasLiked(!hasLiked)}>
        {hasLiked ? 'Unlike' : 'Like'}  {/*//when the button is clicked, it toggles the state of hasLiked without reloading the page. */}
      </button>
    </div>
  )
}
 // This is a reusable card component.
//or
// function Card(props){
//   return (
//     <div className='card'>
//       <h2>{props.title}</h2>
//       <p>This is a reusable card component.</p>
//     </div>
//   )
//}

function App() {

  return (
    <div className='main'>
      <h1>Hello People....!</h1>
      <Card title="Star wars"/>
      <Card title="Harry Potter"/>
    </div>
  )
}

export default App






















// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
