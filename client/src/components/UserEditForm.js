import React, {Component} from 'react'
import styled from 'styled-components'

const UserEditForm = (props) => (

    <div>
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>

                <Input
                    name="firstName"
                    type="text"
                    placeholder="Update your Name"
                    value={props.user.userName}
                    onChange={(event) => {props.handleInputChange}}/>
                <br/>
                <Input
                    name="birthMonth"
                    type="text"
                    placeholder="Birth Month"
                    value={props.user.birthMonth}
                    onChange={(event) => {props.handleInputChange}}/>
                <br/>
                <Input
                    name="profilePic"
                    type="text"
                    placeholder="URL to Profile Pic"
                    value={props.user.profilePic}
                    onChange={(event) => {props.handleInputChange}}/>
                <br/>
                <input className="input-button" type="submit" value="Edit"/>
                
                </div>
            </form>
        </div>
    </div>

)

export default UserEditForm

// STYLE ///////////////
const Input = styled.input `
    width: 300px;
    padding: 12px;
    border: 1px solid black;   
`