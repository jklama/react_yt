import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <article className="question">
      <h4>{title}</h4>
      <button className="btn" onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </button>

      {showInfo && <p>{info}</p>}
    </article>
  )
}

export default Question
