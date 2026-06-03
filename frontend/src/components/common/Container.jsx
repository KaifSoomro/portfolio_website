import React from 'react'

const Container = ({ children, styles }) => {
  return (
    <div className={`max-w-7xl mx-auto ${styles}`}>{ children }</div>
  )
}

export default Container