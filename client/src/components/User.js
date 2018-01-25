import React from 'react'
import styled from 'styled-components'

// class User extends Component {

//     render () {
//         return (
//             <div>
//                 <img src={this.props.profilePic} alt="{this.props.firstName}'s profile pic"/>
//                 <strong>{this.props.firstName}</strong>
//                 <p>{this.props.birthMonth}</p>
//             </div>
//         )
//     }

// }

const User = (props) => {
    return (
        <div className="userWrapper">
            <input 
            type="text"
            name="firstName"
            value={props.user.firstName}
            onChange={(event) => props.handleChange(props.user, event)}
            onBlur={() => {props.updateUser(props.user)}}/>

            <text 
            name="birthMonth"
            value={props.user.birthMonth}
            onChange={(event) => props.handleChange(props.user, event)}
            onBlur={() => {props.updateUser(props.user)}}/>

            <button onClick={() => {props.deleteUser(props.user)}}>Delete User</button>

        </div>
    )
}

export default User