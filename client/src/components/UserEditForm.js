import React, {Component} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const UserEditForm = (props) => (

    <form onSubmit={props.handleSubmit}>
                        <div>

                            <Input
                                name="firstName"
                                type="text"
                                placeholder="Update your Name"
                                value={props.user.firstName}
                                onChange={(event) => 
                                props.handleInputChange(event)}/>
                            <br/>
                            <Input
                                name="birthMonth"
                                type="text"
                                placeholder="Birth Month"
                                value={props.user.birthMonth}
                                onChange={(event) =>
                                props.handleInputChange(event)}/>
                            <br/>
                            <Input
                                name="profilePic"
                                type="text"
                                placeholder="URL to Profile Pic"
                                value={props.user.profilePic}
                                onChange={(event) =>
                                props.handleInputChange(event)}/>
                            <br/>
                            <button className="input-button" onClick={props.handleSubmit}>Edit</button>

                        </div>
                    </form>

                                )

export default UserEditForm

// STYLED COMPONENTS /////////////////////

const Input = styled.input `
    width: 300px;
    padding: 12px;
    border: 1px solid black;   
`