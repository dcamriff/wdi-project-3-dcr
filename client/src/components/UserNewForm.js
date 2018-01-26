import React, {Component} from 'react'
import styled from 'styled-components'

// STYLE
const Input = styled.input`
    width: 300px;
    padding: 12px;
    border: 1px solid black;   
`

class UserNewForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newUser: {}
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

    resetForm = () => {
        const newUser = {}
        this.setState({newUser: newUser})
            // ...this.defaultState.newUser
        // this.setState({newUser})
    }

    addNewUser = (event) => {
        event.preventDefault()
        this
            .props
            .addNewUser(this.state.newUser)
            .then(() => {
                this.resetForm()
            })
    }

    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.addNewUser}>
                        <Input
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                            value={this.state.newUser.firstName}
                            onChange={this.handleInputChange}/>
                        <br/>
                        <Input
                            name="birthMonth"
                            type="text"
                            placeholder="Birth Month"
                            value={this.state.newUser.birthMonth}
                            onChange={this.handleInputChange}/>
                        <br/>
                        <Input
                            name="profilePic"
                            type="text"
                            placeholder="URL to Profile Pic"
                            value={this.state.newUser.profilePic}
                            onChange={this.handleInputChange}/>
                            <br/>
                            <div>
                                <input className="inputButton" type="submit" value="Add New User"/>
                            </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default UserNewForm