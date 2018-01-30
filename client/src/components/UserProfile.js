import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

import UserEditForm from './UserEditForm'
import ChorePage from './ChorePage'
import NavBar from './NavBar'
import bdayLogo from '../bday-icon.svg'

class UserProfile extends Component {

    state = {
        user: {},
        chores: [],
        redirect: false
    }

    componentWillMount() {
        this.getUserProfile()
        this.getAllChores()
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

    getAllChores = async() => {
        try {
            console.log('Hello from getAllChores')
            const userId = this.props.match.params.userId
            const res = await axios.get(`/api/users/${userId}/chores`)
            const chores = res.data
            this.setState({chores})
        } catch (error) {
            console.log(error)
        }
    }

    handleInputChange = (event) => {
        console.log('Changing user profile', event.target.name, event.target.value)
        const attributeName = event.target.name
        let attributeValue = event.target.value

        const user = {
            ...this.state.user
        }
        user[attributeName] = attributeValue
        this.setState({user})
    }

    handleSubmit = async(event) => {
        event.preventDefault()
        const userId = {
            _id: this.state.user._id,
            firstName: this.state.user.firstName,
            birthMonth: this.state.user.birthMonth,
            profilePic: this.state.user.profilePic
        }
        console.log('Updating User', userId)
        const res = await axios.patch(`/api/users/${this.state.user._id}`, userId)
        console.log('Posting User', res.data)
        this.setState({redirect: false, newUser: res.data.user})
    }

    //  RENDER ////////////////////////////////////////

    render() {
        const user = this.state.user
        console.log('getAllChores', this.state.chores)
        if (this.state.redirect) {
            return (<Redirect to={`/users`}/>)
        }
        return (
            <div>
                <NavBar/>
                <div>
                    <h1>Hello, {user.firstName}</h1>
                </div>

                <UserSection>
                    <img width={100} src={this.state.user.profilePic} alt={user.firstName}/>

                    <div>{user.firstName}</div>

                    <div>
                        <img width={30} src={bdayLogo} alt="bday logo"/>{user.birthMonth}
                    </div>

                </UserSection>

                <FormSection>
                    <UserEditForm
                        user={this.state.user}
                        handleInputChange={this.handleInputChange}
                        handleSubmit={this.handleSubmit}/>
                </FormSection>

                <ChorePage userId={this.props.match.params.userId} chores={this.state.chores}/>

            </div>

        )
    }
}

export default UserProfile

// STYLED COMPONENTS /////////////////////

const FormSection = styled.div `
display: grid;
justify-content: center;
margin: 5px;
`

const UserSection = styled.div `
display: grid;
justify-items: center;


`
