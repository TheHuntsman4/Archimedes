import React from 'react'

const Popup = ({response}) => {
  return (
    <div className='bg-white'>
      <h1>This is popup</h1> 
      <p>{response}</p>
    </div>
  )
}

export default Popup
