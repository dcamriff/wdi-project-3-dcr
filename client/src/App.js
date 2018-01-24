import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import axios from 'axios'

import HomePage from './components/HomePage'
import UserPage from './components/UserPage'
import UserShow from './components/UserShow'
import RewardsPage from './components/RewardsPage'


class App extends Component {
  state = {
    users: []
  }

  // /GET USERS////
  async componentWillMount() {
    const response = await axios.get('/api/users')
    this.setState({users: response.data})
  }

  render() {
    const HomePageComponent = () => (<HomePage/>)
    const UserPageComponent = () => (<UserPage users={this.state.users}
    {...this.props}/>)

    return (
      <Router>
        {/* <div className="App"> */}
        <Switch>
            <Route exact path="/" render={HomePageComponent}/>
            <Route exact path="/users" render={UserPageComponent}/>
            <Route exact path="/users/:userId" component={UserShow}/>
            {/* <Route exact path="/credits" render={CreditsPageComponent}/> */}
            {/* <Route exact path="/debits" render={DebitsPageComponent}/> */}
          </Switch>
        {/* </div> */}
        
          
        
      </Router>
    )
  }
}

export default App
