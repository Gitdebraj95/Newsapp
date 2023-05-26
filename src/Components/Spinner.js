import React, { Component } from 'react'
import loading from '../loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className="d-flex align-items-center justify-content-center">
        <img className="d-flex align-items-center justify-content-center" style={{marginTop: "200px", marginBottom: "200px"}} src={loading} height={"80px"} width={"80px"} alt="loading"/>
      </div>
    )
  }
}

export default Spinner
