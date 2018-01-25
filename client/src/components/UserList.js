import React from 'react'
import User from './User'
import styled from 'styled-components'


const UserList = (props) => {
    console.log('helo', props)
    console.log('USERS', props.users)
    return (
        <div>
            {/* {
                props.users.map((user) => {
                    return (
                        <User user={user} {...props} key={user._id}/>
                        )
                })
            } */}
        </div>
    )
}

export default UserList