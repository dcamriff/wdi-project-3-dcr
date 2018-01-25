import React, {Component} from 'react'
import axios from 'axios'
import styled from 'styled-components'

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
    // createUser = async () => {
    //     const response = await axios.post(`/api/users`)
    //     const newUser = response.data

    //     const newUsers = [...this.state.users]

    // }

    addNewUser = (newUser) => {
        console.log(newUser)
        axios.post(`/api/users`, {newUser})
        .then(response => {
            console.log('Did it post?')
            const resUser = response.data
            const users = [...this.state.users]
            users.push(resUser)
            this.setState({users})
            
        })
        .then(() => {
            this.setState({redirect: true})
        })
        .catch(function (error) {
            console.log(error)
        })
    }


    render() {
        const users = this.state.users
        console.log('Under render', users)

        return (
            <div>
                <h1>UserPage: showing all users</h1>
                <UserNewForm addNewUser={this.addNewUser} {...this.props}/>
                <div>
                    {users.map((user) => {
                        return (
                            <div>
                                {user.firstName}
                                {user.birthMonth}
                                <img width="50" src={user.profilePic} alt=""/>
                            </div>
                            )
                        })
                    }
                </div>
                

            </div>

        )
    }
}

export default UserPage