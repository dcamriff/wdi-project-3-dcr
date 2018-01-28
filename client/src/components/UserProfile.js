import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
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

    getUserProfile = async() => {
        try {
            console.log('Hello from getUserProfile')
            const userId = this.props.match.params.userId
            const res = await axios.get(`/api/users/${userId}`)
            this.setState({user: res.data.user})
        } catch (error) {
            console.log(error)
        }
    }

    

    handleInputChange = (event) => {
        const attributeName = event.target.name
        let attributeValue = event.target.value
        const newUser = {
            ...this.state.newUser
        }
        newUser[attributeName] = attributeValue
        this.setState({newUser})
    }

    handleSubmit = async(event) => {
        event.preventDefault()
        const userId = this.props.match.params.userId
        const payload = {
            userName: this.state.user._id
        }
        const resetForm = {
            userName: '',
            birthMonth: '',
            profilePic: ''
        }
        const res = await axios.patch(`/api/users/${userId}`, payload)
        this.setState({user: res.data})
    }

    render() {
        console.log(this.state.user)
        const user = this.state.user
        console.log(user)
        console.log(this.state.user.user)
        if (this.state.redirect) {
            return (<Redirect to={`/users`}/>)
        }
        return (
            <div>This is a Show Page for individual user.
                <div>
                    <h1>Hello, {user.firstName}</h1>
                </div>

                <div>
                    <img width={100} src={this.state.user.profilePic} alt={user.firstName}/>
                    <br/> {user.firstName}<br/>
                    <p>Birthday Month: {user.birthMonth}</p><br/>
                    
                    <button>Edit</button>

                    {/* <div>
                        user={this.state.user}
                        id={this.state.user._id}
                        handleInputChange={this.handleInputChange}
                        handleSubmit={this.handleSubmit}
                    </div> */}

                </div>

            </div>
        )
    }
}

export default UserProfile