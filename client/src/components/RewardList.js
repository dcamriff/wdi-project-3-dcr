import React from 'react'
import styled from 'styled-components'

import Reward from './Reward'


// STYLE //////////////////////////

// STATELESS FUNCTION /////////////

const RewardList = (props) => {
    return (
        <div>
            <div>
                {props.rewards.map((reward) => {
                    return (
                        <Reward reward={reward} {...props} key={reward._id}/>
                    )
                })}
            </div>
        </div>
    )
}

export default RewardList