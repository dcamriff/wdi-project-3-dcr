import React from 'react'
// import styled from 'styled-components'

const Chore = (props) => {
    return (
        <div>
            <img src={props.imageUrl} alt="task image"/>
            <h3>task: {props.task}</h3>
            <div>category: {props.category}</div>
            <div>description: 
                <p>{props.description}</p>
                </div>
            <div>tokens: 
                <p>{props.tokens}</p>
                </div>
            <input type="checkbox"/>

        </div>
    )

}

export default Chore
