import React, { Component } from 'react'
import loading from './loading.gif'
// import PropTypes from 'prop-types'


// export class Spinner extends Component{
  const Spinner = ()=>{

  // render() {
    return (
      <div className = "text-center">
        <img src={loading} alt="loading" />
        
      </div>
    )
  }
// }

export default Spinner

