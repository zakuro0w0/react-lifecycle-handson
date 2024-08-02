import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("useEffect start")
    const fetchData = async () => {
      console.log("---------- async ------------ fetchData start")
      const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      console.log("---------- async ------------ fetch return")
      const id = (await res.json())["id"]
      console.log("---------- async ------------ get id", id)
      console.log("---------- async ------------ call setCount, current count is", count)
      setCount(prev =>
        prev + id
      );
      console.log("---------- async ------------ setCount end")
      console.log("---------- async ------------ fetchData end")
    };
    fetchData();
    console.log("useEffect end")
  }, []);

  useEffect(() => {
    console.log("count updated, current count is", count)
  }, [count])

  console.log("App rendering...")

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
