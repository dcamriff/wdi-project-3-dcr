import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import NavBar from './NavBar'
import UserPage from './UserPage'


class HomePage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Container>
                    <div>
                        <Link to="/users">Family</Link>
                        <Link to="/rewards">Redeem Rewards</Link>
                <h1>Home</h1>
                {/* <UserPage/> */}
                </div>
                </Container>
            </div>
        )
    }
}

export default HomePage

// STYLED COMPONENTS /////////////////////

const Container = styled.div `
display: grid;
grid-template-columns: 50%fr 1fr;
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