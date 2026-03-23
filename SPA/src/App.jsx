import { useState } from 'react'
import FastGoPage from './components/FastGoPage'
import Home from './components/Home'
import TravelPage from './components/TravelPage'

function App() {

  const [page, setPage] = useState("")

  return (
    <>
      {page === "" && <Home updateFunction={setPage} />}
      {page === "FastGo" && <FastGoPage updateFunction={setPage} />}
      {page === "Travel" && <TravelPage updateFunction={setPage} />}
    </>
  )
}

export default App
