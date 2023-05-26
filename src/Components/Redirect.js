import React, { Component } from 'react'

export class Redirect extends Component {
  render() {
    return (
      <div>
        <button style={{height: '50px', width: '50px', backgroundColor: '#000', fontSize: '30px', color: 'white', float: 'right', marginBottom: '71px', marginRight: '41px', right: '0', bottom: '0', position: 'fixed'}}><a href='#nav'> &uarr;</a></button>
      </div>
    )
  }
}

export default Redirect
