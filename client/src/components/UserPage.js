import React, {Component} from 'react'
import axios from 'axios'
import styled from 'styled-components'

import NavBar from './NavBar'
import UserNewForm from './UserNewForm'

// STYLE

const FormSection = styled.div `
display: grid;
justify-content: center;
margin: 5px;
justify-content: center;
`

const UserContainer = styled.div `
display: grid;
grid-template-columns: 33% 33% 33%;
grid-gap: 5px;
margin: 10px;
justify-content: center;
padding: 30px;

/* div.user-container {
    display: grid;
    justify-content: center;
    align-items: center;
    font-size: 1.25rem;
} */
`

class UserPage extends Component {

    state = {
        users: []
    }

    async componentWillMount() {
        const response = await axios.get('/api/users')
        // console.log('USERPAGE', response.data)
        this.setState({users: response.data})

    }
    // createUser = async () => {     const response = await
    // axios.post(`/api/users`)     const newUser = response.data     const newUsers
    // = [...this.state.users] }

    addNewUser = (newUser) => {
        console.log(newUser)
        axios
            .post(`/api/users`, {newUser})
            .then(response => {
                console.log('Did it post?')
                const resUser = response.data
                const users = [...this.state.users]
                users.push(resUser)
                this.setState({users})
                console.log('FromPOST'+this.state.users)

            })
            .then(() => {
                this.setState({redirect: true})
            })
            .catch(function (error) {
                console.log(error)
            })

            return true;
    }

    deleteUser = (user) => {
        const userId = user._id
        console.log('Deleting User')
        axios
            .delete(`/api/users/${userId}`)
            .then(() => {
                this.componentWillMount()
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
                <NavBar/>
                <div>
                    <FormSection>
                        <h2>Family Members</h2>
                        <UserNewForm addNewUser={this.addNewUser} {...this.props}/>
                    </FormSection>
                    <div>
                        <UserContainer className="user-container">
                            {users.map((user) => {
                                return (
                                    <div>
                                        <img width={100} src={user.profilePic} alt=""/><br/>
                                        {user.firstName}<br/>
                                        {user.birthMonth}<br/>
                                        <button onClick={() => {this.deleteUser(user)}}>Delete User</button>                                        
                                    </div>
                                )
                            })}
                        </UserContainer>
                    </div>
                </div>
            </div>

        )
    }
}

export default UserPage