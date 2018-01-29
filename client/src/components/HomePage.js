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
                    <h3>Pitch In + Get Rewarded!</h3>
                        <Link to="/users">
                        <div className="item">
                        <img className="item"
                        width={165}
                        src="https://i.imgur.com/eNBw2Rw.png" alt="family"/>
                        <p className="item">Family Members</p>
                        </div>
                        <br/>
                        
                        </Link>
                        <Link to="/rewards">
                        <div className="item">
                        <img className="item"
                        width={175}
                        src="https://i.imgur.com/RHEdDn2.png" alt="rewards"/>
                        <p className="item">Redeem Rewards</p>
                        </div>                        
                        </Link>
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
padding: 10px;
height: 80px;
justify-content: center;
align-items: center;

.item {
    display: grid;
    justify-content: center;
    align-items: center;
}

@media (max-width: 768px) {
    /* For mobile phones: */
grid-template-columns: 100%;

`