import React, {Component} from 'react'
import styled from 'styled-components'

class Chore extends Component {
    render() {
        console.log("CHORE", this.props.task)
        return (
            <ChoreContainer>
                <div>
                    <img width={75} src={this.props.imageUrl} alt="task image"/>
                </div><br/>
                <div>
                    <h3>{this.props.task}</h3>
                </div>
                <div>category: {this.props.category}</div>
                <div>
                    <p>{this.props.description}</p>
                </div>
                <div>tokens:
                    <p>{this.props.tokens}</p>
                </div>
                <input type="checkbox"/>

            </ChoreContainer>

        )
    }
}

export default Chore

// STYLED COMPONENTS /////////////////////

const ChoreContainer = styled.div `
display: grid;
/* grid-template-columns: 33% 33% 33%; */
/* grid-gap: 5px; */
margin: 2px;
justify-content: center;
justify-items: center;
padding: 5px;
border: 1px solid black;

h3 {
    /* color: #5b0b4c; */
    color: #ff5035;
}
`