import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount]

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          distinctio numquam dolorum, quaerat minus repellat. Reprehenderit
          mollitia id ipsam eum, perspiciatis consequuntur quis esse fugit eos
          molestias voluptate voluptatum soluta. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Non tempore quasi, in nam aliquidn
          veniam, placeat nulla quod id odio maiores. Maiores quasi possimus
          amet quas ratione neque sunt et.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, atque? Accusamus enim at, eos reprehenderit sapiente saepe quasi! Nemo animi eum exercitationem corporis laboriosam odit ut quaerat? Ipsam, placeat velit.
        </p>
      </div>
      <h1>Vite + React = Development</h1>
      <h2>New branch added</h2>
      <h3>final test</h3>
      <div className="card">
        <button
          onClick={() => setCount((count) => count + 1)}
          disabled={true}
          className="some class"
        >
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
