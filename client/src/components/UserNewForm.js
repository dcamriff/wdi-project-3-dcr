import React, {Component} from 'react'

class UserNewForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newUser: { }
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
            const newUser = {...this.defaultState.newUser}
            this.setState({newUser})
        }

        addNewUser = (event) => {
            event.preventDefault()
            this.props.addNewUser(this.state.newUser)
            this.resetForm()
        }




        render() {
            return (
                <div>
                    <h1>Add User Form</h1>
                    <div>
                        <form onSubmit={this.addNewUser}>
                        <input
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                            value={this.state.newUser.firstName}
                            onChange={this.handleInputChange}/>
                        <br/>
                        <input
                            name="birthMonth"
                            type="text"
                            placeholder="Birth Month"
                            value={this.state.newUser.birthMonth}
                            onChange={this.handleInputChange}/>
                        <br/>
                        <input
                            name="profilePic"
                            type="text"
                            placeholder="URL to Profile Pic"
                            value={this.state.newUser.profilePic}
                            onChange={this.handleInputChange}/>
                            <input type="submit"
                            value="Add New User"/>


                            </form>
                    </div>
                </div>
            )
        }
    }

    export default UserNewForm