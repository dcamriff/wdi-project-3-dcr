import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import HomePage from './components/HomePage'
import UserPage from './components/UserPage'
import RewardsPage from './components/RewardsPage'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello World!</h1>
        </header>
      </div>
      <div>
        <Switch>
          {/* <Route exact path= */}
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App
