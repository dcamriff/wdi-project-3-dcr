import React, { Component } from 'react'
import styled from 'styled-components'

class Chore extends Component {
    render () {
        console.log("CHORE", this.props.task)
        return (
            <ChoreContainer>
            <img width={75} src={this.props.imageUrl} alt="task image"/><br/>
            <h3>{this.props.task}</h3>
            <div>category: {this.props.category}</div>
            {/* <div>description:  */}
                <p>{this.props.description}</p>
                {/* </div> */}
            <div>tokens: 
                <p>{this.props.tokens}</p>
                </div>
            <input type="checkbox"/>

        </ChoreContainer>

        )
    }
}

export default Chore

// ///////////////////////////////////////
//          STYLED COMPONENTS           //
// ///////////////////////////////////////

const ChoreContainer = styled.div `
display: grid;
/* grid-template-columns: 33% 33% 33%; */
/* grid-gap: 5px; */
margin: 2px;
justify-items: center;
padding: 5px;
border: 1px solid black;
`