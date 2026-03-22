import { useState } from 'react'
import FastGoPage from './components/FastGoPage'
import Home from './components/Home'
import HeaderTravel from './components/HeaderTravel'

function App() {

  const [page, setPage] = useState("")

  return (
    <>
      <HeaderTravel />
      {page === "" && <Home updateFunction={setPage} />}
      {page === "FastGo" && <FastGoPage updateFunction={setPage} />}

    </>
  )
}

export default App
