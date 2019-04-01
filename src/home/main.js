import React, { Component } from 'react'
import { withRouter,Route,Switch,Redirect } from 'react-router-dom'
import Login from '@/pages/login/phone-login'

@withRouter
class Main extends Component {
  render() {
    return (
      <div>
        <Login/>
      </div>
    )
  }
}

export default Main