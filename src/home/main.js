import React, { Component } from 'react'
import { withRouter,Route,Switch,Redirect } from 'react-router-dom'
import Login from '@/pages/login/phone-login'

@withRouter
class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/' exact render={()=> (
                <Redirect to="/login"/>
            )}/>
          <Route path={'/login'} component={Login}/>
        </Switch>
        <Login/>
      </div>
    )
  }
}

export default Main