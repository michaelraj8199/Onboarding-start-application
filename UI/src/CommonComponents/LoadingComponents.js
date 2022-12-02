import React from 'react'
import logo from '../../src/Assets/logo.png';
import logogif from '../../src/Assets/loader.gif'

function LoadingComponents() {
  return (
    <div className="loaderblock">
    <div className="loaderdiv">
      <img src={logo} alt="Ajex Logo"/>
      <img src={logogif} alt="Loading..." />
    </div>
  </div>
  )
}

export default LoadingComponents