import React, { Component } from 'react'
import loading from './loading.gif'
import './Spinner.css'
export default class Spinner extends Component {
  render() {
    return (
      <div className="hell" >
        <img  src={loading} alt="loading" height="100%" width="100%"/>
      </div>
    )
  }
}
