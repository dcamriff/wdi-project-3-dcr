import React, { Component } from 'react'
// import styled from 'styled-components'

class Chore extends Component {
    render () {
        console.log("CHORE", this.props.task)
        return (
            <div>
            <img src={this.props.imageUrl} alt="task image"/>
            <h3>task: {this.props.task}</h3>
            <div>category: {this.props.category}</div>
            <div>description: 
                <p>{this.props.description}</p>
                </div>
            <div>tokens: 
                <p>{this.props.tokens}</p>
                </div>
            <input type="checkbox"/>

        </div>

        )
    }
}

export default Chore
