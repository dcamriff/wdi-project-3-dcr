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

.Nav-logo {
    animation: Nav-logo-spin infinite 20s linear;
    height: 80px;
}
@keyframes Nav-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
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
                <div>Chore Rewarder</div>
                <div>home</div>
            </Nav>
        )
    }
}

export default NavBar