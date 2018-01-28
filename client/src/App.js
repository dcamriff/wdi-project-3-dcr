import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import axios from 'axios'

import HomePage from './components/HomePage'
import UserPage from './components/UserPage'
import UserProfile from './components/UserProfile'
import RewardsPage from './components/RewardsPage'


class App extends Component {
//   state = {
//     users: []
//   }

//   async componentWillMount () {
//     const response = await axios.get('/api/users')
//     console.log(response.data)
//     this.setState({users: response.data})

// }

  // /GET USERS////
  // async componentWillMount() {
  //   const response = await axios.get('/api/users')
  //   this.setState({users: response.data})
  // }

  render() {
    const HomePageComponent = () => (<HomePage/>)
    const UserPageComponent = () => (<UserPage/>)

    // const UserPageComponent = () => (<UserPage users={this.state.users}
    // {...this.props}/>)

    return (
      <Router>

        <Switch>
            <Route exact path="/" render={HomePageComponent}/>
            <Route exact path="/users" render={UserPageComponent}/>
            <Route exact path="/users/:userId" component={UserProfile}/>
            {/* <Route exact path="/users/:userId/chores/:choreId" component={ChoresShow}/> */}
            <Route exact path="/rewards" component={RewardsPage}/>
          </Switch>      
        
      </Router>
    )
  }
}

export default App
