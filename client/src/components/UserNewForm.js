import React, { Component } from 'react'

class UserNewForm extends Component {
    constructor (props) {
        super(props)

        this.defaultState = {
            newUser: {
                firstName: '',
                birthMonth: 'January',
                timestamp: Date.now(),
            },
        }
        this.state = {...this.defaultState}

        // _handleInputChange = (event) => {
        //     const attribute = event.target.
        // }
    }

    render () {
        return (
            <div>Add User Form</div>
        )
    }
}

export default UserNewForm