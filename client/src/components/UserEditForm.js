import React, {Component} from 'react'
import styled from 'styled-components'
import axios from 'axios'

class UserEditForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            updatedUser: {}
        }
    }

    async componentWillMount() {
        const response = await axios.get('/api/users')
        this.setState({users: response.data})

    }

    updateUser = async (user) => {
        try {
            await axios.patch(`/api/users/${user._id}`, user)
        } catch (error) {
            console.log(error)
        }
    }

    handleInputChange = (event) => {
        const attributeName = event.target.name
        let attributeValue = event.target.value
        const updatedUser = {
            ...this.state.updatedUser
        }
        updatedUser[attributeName] = attributeValue
        this.setState({updatedUser})
    }

    handleSubmit = async(event) => {
        console.log('Updating User')
        event.preventDefault()
        const userId = {
            _id: this.state.user._id,
            firstName: this.state.users.firstName,
            birthMonth: this.state.birthMonth,
            profilePic: this.state.profilePic
        }
        const res = await axios.patch(`/api/users/${this.state.users._id}`, userId)
        this.setState({redirect: false, user: res.data})
    }

    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>

                            <Input
                                name="firstName"
                                type="text"
                                placeholder="Update your Name"
                                value={this.state.user.userName}
                                onChange={(event) => {
                                this.handleInputChange
                            }}/>
                            <br/>
                            <Input
                                name="birthMonth"
                                type="text"
                                placeholder="Birth Month"
                                value={this.state.user.birthMonth}
                                onChange={(event) => {
                                this.handleInputChange
                            }}/>
                            <br/>
                            <Input
                                name="profilePic"
                                type="text"
                                placeholder="URL to Profile Pic"
                                value={this.state.user.profilePic}
                                onChange={(event) => {
                                this.handleInputChange
                            }}/>
                            <br/>
                            {/* <input className="input-button" type="submit" value="Edit"/> */}
                            <input className="input-button" type="submit" value="Edit"/>

                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default UserEditForm

// STYLED COMPONENTS /////////////////////

const Input = styled.input `
    width: 300px;
    padding: 12px;
    border: 1px solid black;   
`