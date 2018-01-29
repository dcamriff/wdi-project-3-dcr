import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

import UserEditForm from './UserEditForm'
import ChorePage from './ChorePage'
import NavBar from './NavBar'

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
    
    // handleInputChange = (event) => {
    //     const attributeName = event.target.name
    //     let attributeValue = event.target.value
    //     const newUser = {
    //         ...this.state.newUser
    //     }
    //     newUser[attributeName] = attributeValue
    //     this.setState({newUser})
    // }

    // handleSubmit = async(event) => {
    //     event.preventDefault()
    //     const userId = this.props.match.params.userId
    //     const payload = {
    //         userName: this.state.user._id
    //     }
    //     const resetForm = {
    //         userName: '',
    //         birthMonth: '',
    //         profilePic: ''
    //     }
    //     const res = await axios.patch(`/api/users/${userId}`, payload)
    //     this.setState({user: res.data})
    // }

    //  RENDER ////////////////////////////////////////

    render() {
        const user = this.state.user
        console.log('getAllChores', this.state.chores)
        if (this.state.redirect) {
            return (<Redirect to={`/users`}/>)
        }
        return (
            <div>
                <NavBar />
                <div>
                    <h1>Hello, {user.firstName}</h1>
                </div>

                <div>
                    <FormSection>
                    <img width={100} src={this.state.user.profilePic} alt={user.firstName}/>
                    <br/> {user.firstName}<br/>
                    <p>Birthday Month: {user.birthMonth}</p><br/>
                    
                    <button>Edit</button>
                    </FormSection>
                
                    <ChorePage 
                    userId = {this.props.match.params.userId} 
                    chores = {this.state.chores}/>

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

// ///////////////////////////////////////
//          STYLED COMPONENTS           //
// ///////////////////////////////////////

const FormSection = styled.div `
display: grid;
justify-content: center;
/* margin: 5px; */
`