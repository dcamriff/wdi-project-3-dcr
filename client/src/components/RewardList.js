import React from 'react'
import Reward from './Reward'


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