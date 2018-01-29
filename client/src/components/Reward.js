import React from 'react'
import styled from 'styled-components'


// STATELESS FUNCTION //////////////////

const Reward = (props) => {
    return (
        <RewardWrapper>
            <div>Enter Reward Level</div>

            <input type="text"
                name="level"
                value={props.reward.level}
                onChange={(event) => props.handleChange(props.reward, event)}
                onBlur={() => {props.updateReward(props.reward) }}/>

            <div>Enter A Token Value</div>

            <input type="text"
                name="tokensWorth"
                value={props.reward.tokensWorth}
                onChange={(event) => props.handleChange(props.reward, event)}
                onBlur={() => {props.updateReward(props.reward) }}/>

            <div>Describe the Prize</div>

            <input type="text"
                name="reward"
                value={props.reward.reward}
                onChange={(event) => props.handleChange(props.reward, event)}
                onBlur={() => {props.updateReward(props.reward) }}/>

            <input type="text"
                name="imageUrl"
                value={props.reward.imageUrl}
                onChange={(event) => props.handleChange(props.reward, event)}
                onBlur={() => {props.updateReward(props.reward) }}/>

            <div>
                <a href={`/reward/${props.reward._id}/rewardsController`}>
                <button>Go To Rewards</button>
                </a>
            </div>

            <button onClick={() => {props.deleteReward(props.reward)}}>Delete Reward</button>

        </RewardWrapper>

    )
}

export default Reward

// STYLED COMPONENTS /////////////////////

const RewardWrapper = styled.div `
display: grid;

input {
    width: 300px;
    padding: 12px;
    border: 1px solid black;
}
`