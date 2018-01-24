import React, { Component } from 'react'
import Link from 'react-router-dom'

import NavBar from './NavBar'
import UserList from './UserList'

class HomePage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <h1>Home Page Component</h1>
                {/* <img src={logo} alt=""/> */}
                <UserList/>
            </div>
        )
    }
}

export default HomePage