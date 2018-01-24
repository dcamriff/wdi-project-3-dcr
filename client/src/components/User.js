import React, { Component } from 'react'

class User extends Component {

    render () {
        return (
            <div>
                <img src="#" alt=""/>
                <strong>{this.props.firsName}</strong>
                <p>{this.props.birthMonth}</p>
            </div>
        )
    }

}

export default User