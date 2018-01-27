import React, { Component } from 'react'
import axios from 'axios'

import UserEditForm from './UserEditForm'



class UserProfile extends Component {

    state = {
        user: {},
        redirect: false
    }

    componentWillMount() {
        this.getUserProfile()
    }

    getUserProfile = async () => {
        try {
            const {userId} = this.props.match.params
            const res = await axios.get('/api/users/${userId}')
            this.setState({ user: res.data })
        } catch (error) {
            console.log(error)
        }
    }

    deleteUser = async () => {
        const userId = this.props.match.params.userId
        console.log('Deleting User')
        const res = await axios.delete(`/api/users/${userId}`)
        console.log(res.data)
        // this.setState({user: newUser})
    }

    handleInputChange = (event) => {
        const attributeName = event.target.name
        let attributeValue = event.target.value
        const newUser = {...this.state.newUser}
        newUser[attributeName] = attributeValue
        this.setState({newUser})
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const userId = this.props.match.params.userId
        const payload = {userName: this.state.user._id}
        const resetForm = {userName: ''}
        const res = await axios.patch(`/api/users/${userId}`, payload)
        this.setState({ user: res.data })
    }

    render () {
        const { user } = this.state
        // if (this.state.redirect) {
        //     return (<Redirect to={`/users`} />)
        // }
        return (
            <div>This is a Show Page for individual user.
                <div>
                    <h1>Hello, {user.userName}</h1>
                </div>
                <div>
                <img 
                width={100} 
                src={user.profilePic} 
                alt="{user.userName} pic"/><br/>
                {user.firstName}<br/>
                <p>Birth Month: {user.birthMonth}</p><br/>
                <button onClick={() => {this.deleteUser(user)}}>Delete</button>
                <button>Edit</button>

                <div>
                    user={this.state.user}
                    id={this.state.user._id}
                    handleInputChange={this.handleInputChange}
                    handleSubmit={this.handleSubmit}
                </div>

                </div>


            </div>
        )
    }
}

export default UserProfile