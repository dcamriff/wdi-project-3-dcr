import React, {Component} from 'react'
import axios from 'axios'
import styled from 'styled-components'

import UserList from './UserList'
import UserNewForm from './UserNewForm'

class UserPage extends Component {

    state = {
        users: []
    }

    async componentWillMount() {
        const response = await axios.get('/api/users')
        // console.log('USERPAGE', response.data)
        this.setState({users: response.data})

    }

    addNewUser = (newUser) => {
        const users = [...this.state.users]
        users.push(newUser)
        this.setState({users})
    }


    render() {
        const users = this.state.users
        console.log('Under render', users)

        return (
            <div>
                <h1>UserPage: showing all users</h1>
                <button onClick={this.createUser}>New User</button>
                <UserNewForm />
                <div>
                    {users.map((user) => {
                        return (
                            <div>
                                {user.firstName}
                                {user.birthMonth}
                                <img width="50" src={user.profilePic} alt=""/> {/* <div>
                                    <UserNewForm />
                                    </div> */}
                            </div>
                            )
                        })
                    }
                </div>
                {/* users={this.state.users}
                    handleChange={this.handleChange}
                    updateUser={this.updateUser}
                    deleteUser={this.deleteUser}
                    /> */}

            </div>

        )
    }
}

export default UserPage