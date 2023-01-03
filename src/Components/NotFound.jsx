import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div>
        <h1>404</h1>
        <p>NotFound</p>
        <Link to="/"><p>Go back home</p></Link>
        </div>
  )
}
