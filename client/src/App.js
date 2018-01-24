import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

import styled from 'styled-components'
import HomePage from './components/HomePage'
// import UserPage from './components/UserPage'
// import RewardsPage from './components/RewardsPage'

import axios from 'axios'

class App extends Component {
  state = {
    users: []
  }

  ///GET ALL USERS////
  // componentWillMount() {
  //   const response = () => {
  //     return (axios.get('/api/users').then(response => {
  //       const users = response.data
  //       console.log(users)
  //       this.setState({users: users})
  //     }))
  //   }
  // }


  render() {
    const HomePageComponent = () => (<HomePage/>)

    return (
      <Router>
        <div className="App">
        <Switch>
            <Route exact path="/" render={HomePageComponent}/>
            {/* <Route exact path="/userProfile" render={UserProfileComponent}/> */}
            {/* <Route exact path="/login" render={LogInComponent}/> */}
            {/* <Route exact path="/credits" render={CreditsPageComponent}/> */}
            {/* <Route exact path="/debits" render={DebitsPageComponent}/> */}
          </Switch>
        </div>
        
          
        
      </Router>
    )
  }
}

export default App
