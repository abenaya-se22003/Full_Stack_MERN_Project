import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-zinc-900 transition-colors duration-200">
      <h1 className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-8">
        Vite + React + Tailwind
      </h1>
      
      <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-xl flex flex-col items-center">
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
          Click the button below to test state:
        </p>
        
        <button
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all active:scale-95"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
