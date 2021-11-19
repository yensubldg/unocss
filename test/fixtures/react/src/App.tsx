import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header>
        <p className="text-red" font="mono">Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount(count => count + 1)}>
            count is: {count}
          </button>
        </p>
        <div className="i-logos-react" text="4xl"></div>
      </header>
    </div>
  )
}

export default App
