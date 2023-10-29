import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }
  const fetchTours = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const newTour = await response.json()
      setIsLoading(false)
      setTours(newTour)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchTours()
  }, [])

  if (isLoading) {
    return <Loading />
  } else {
    if (tours.length !== 0) {
      return (
        <>
          <h1>Tours</h1>
          <Tours tours={tours} removeTours={removeTours} />
        </>
      )
    }
    return (
      <>
        <h1>No tours to show</h1>
        <button onClick={() => fetchTours()}>Click me to get tours</button>
      </>
    )
  }
}

export default App
