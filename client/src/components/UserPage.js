import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import UserList from './UserList'

class UserPage extends Component {

    state = {
        users: []
    }

    async componentWillMount () {
        const response = await axios.get('/api/ideas')
        this.setState({users: response.data})
    }

    createUser = async () => {
        const response = await axios.get(`/api/ideas`)
        const newUser = response.data

        const newUsers = [this.state.users]
        newUsers.unshift(newUser)
        this.setState({users: newUsers})
    }

    deleteUser = async (user) => {
        try {
            await axios.delete(`/api/users/${user._id}`)

            const indexToDelete = this.state.users.indexOf(user)
            const newUsers = [...this.state.users]
            newUsers.splice(indexToDelete, 1)
            this.setState({users: newUsers})
        } catch (error) {
            console.log(error)
        }
    }

    render () {
        return (
            <div>

                <div>
                    <h1>UserPage: showing all users</h1>
                    <button onClick={this.createUser}>New User</button>
                </div>

                    <UserList 
                    users={this.state.users}
                    handleChange={this.handleChange}
                    updateUser={this.updateUser}
                    deleteUser={this.deleteUser}/>
    
            </div>

        )
    }
}

export default UserPage