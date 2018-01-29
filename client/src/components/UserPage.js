import React, {Component} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import NavBar from './NavBar'
import UserNewForm from './UserNewForm'
import UserEditForm from './UserEditForm'
import bdayLogo from '../bday-icon.svg'


////////////  CLASS  ///////////

class UserPage extends Component {

    state = {
        users: [],
        newUser: {},
        redirect: false,
        newUserId: ''
    }

    async componentWillMount() {
        const response = await axios.get('/api/users')
        this.setState({users: response.data})

    }

    addNewUser = (newUser) => {
        console.log(newUser)
        axios.post(`/api/users`, {newUser}).then(response => {
                console.log('Did it post?')
                const resUser = response.data
                const users = [...this.state.users]
                users.push(resUser)
                this.setState({users})
                console.log('FromPOST', this.state.users)

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

    updateUser = async (user) => {
        try {
            await axios.patch(`/api/users/${user._id}`, user)
        } catch (error) {
            console.log(error)
        }
    }

    // RENDER /////////////////////////////////////////////

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
                        <UserContainer>
                            {users.map((user) => {
                                return (
                                    <div className="item">
                                        <a className="item" href={`/users/${user._id}`}>                                        
                                        <img className="item"
                                            width={100} 
                                            src={user.profilePic} 
                                            alt="{user.firstName} image"/>
                                            </a>                                        
                                        <p className="item">{user.firstName}</p>
                                        
                                        
                                        <img 
                                        width={30}src={bdayLogo} 
                                        alt="bday logo"/>{user.birthMonth}
                                        
                                        

                                        {/* <UserEditForm 
                                        user={this.state.user}
                                        handleInputChange={this.handle.handleInputChange}
                                        handleSubmit={this.handleSubmit}/> */}
                                        
                                        <button onClick={() => {this.deleteUser(user)}}>Delete</button>
                                        

                                        {/* <UserEditForm /> */}

                                        {/* <Link to={'/editUser'}>
                                        <button>Edit</button>  
                                        </Link> */}
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

// STYLED COMPONENTS /////////////////////

const FormSection = styled.div `
display: grid;
justify-content: center;
margin: 5px;
`

const UserContainer = styled.div `
display: grid;
grid-template-columns: 33% 33% 33%;
grid-gap: 5px;
/* margin: 10px; */
padding: 10px;

.item {
    display: grid;
    justify-content: center;
    align-items: center;
}

@media (max-width: 768px) {
    /* For mobile phones: */
grid-template-columns: 100%;
`