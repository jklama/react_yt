import React, { useState } from 'react'
import data from './data'
import List from './List'
import './index.css'
function App() {
  const [people, setPeople] = useState(data)

  return (
    <>
      <h1>{people.length} have birthday today</h1>
      <div>
        <List people={people} className="container" />
        <button onClick={() => setPeople([])} className="container button">
          clear all birthday
        </button>
      </div>
    </>
  )
}

export default App
