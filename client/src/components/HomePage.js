import React, { Component } from 'react'
import Link from 'react-router-dom'
import styled from 'styled-components'

import NavBar from './NavBar'
import UserList from './UserList'

const Container = styled.div `
display: grid;
grid-template-columns: 100px 1fr 1fr;
grid-gap: 5px;
margin: 5px;
height: 80px;

div {
    display: grid;
    justify-content: center;
    align-items: center;
    font-size: 1.25rem;
}
`

class HomePage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Container>
                <h1>Home Page Component</h1>
                {/* <img src={logo} alt=""/> */}
                <UserList/>
                </Container>
            </div>
        )
    }
}

export default HomePage