import React, {Component} from 'react'
import logo from '../piggy-logo.svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = styled.div `
display: grid;
grid-template-columns: 100px 2fr 1fr;
grid-gap: 5px;
margin: 5px;
height: 80px;

div,
.Link {
    display: grid;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    text-decoration: none;
}

.Nav-logo {
    animation: Nav-logo-spin infinite 20s linear;
    height: 80px;
}
@keyframes Nav-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
.header-title {
    justify-content: left;
    font-family: 'Baloo Bhai', cursive;
    font-size: 25px
}
`

class NavBar extends Component {
    render() {
        return (
            <Nav>
                <div>
                    <img
                        className="Nav-logo"
                        width="75"
                        src={logo}
                        alt="piggy chore rewarder logo"/>
                </div>
                <div className="header-title">Chore Rewarder</div>
                <Link className="Link" to="/">Home</Link>
            </Nav>
        )
    }
}

export default NavBar