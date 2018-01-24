import React, {Component} from 'react'
import logo from '../piggy-logo.svg'
import styled from 'styled-components'

const Nav = styled.div `
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


class NavBar extends Component {
    render() {
        return (
            <Nav>
            <div>
            <img 
                width="75" 
                src={logo} 
                alt="piggy chore rewarder logo"/>
            </div>
            <div>Chore Rewarder</div>
            <div>home</div>
            </Nav>
        )
    }
}

export default NavBar