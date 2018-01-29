import React, {Component} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import NavBar from './NavBar'
import RewardNewForm from './RewardNewForm'
// import RewardEditForm from './RewardEditForm'


////////////  CLASS  ///////////

class RewardsPage extends Component {

    state = {
        rewards: [],
        newReward: {},
        redirect: false,
        newRewardId: ''
    }

    async componentWillMount() {
        const response = await axios.get('/api/rewards')
        this.setState({rewards: response.data})

    }

    addNewReward = (newReward) => {
        console.log(newReward)
        axios.post(`/api/rewards`, {newReward}).then(response => {
                console.log('Did the reward post?')
                const resReward = response.data
                const rewards = [...this.state.rewards]
                rewards.push(resReward)
                this.setState({rewards})
                console.log('From reward POST', this.state.rewards)

            })
            .then(() => {
                this.setState({redirect: true})
            })
            .catch(function (error) {
                console.log(error)
            })
            return true;
    }

    deleteReward = (reward) => {
        const rewardId = reward._id
        console.log('Deleting User')
        axios
            .delete(`/api/rewards/${rewardId}`)
            .then(() => {
                this.componentWillMount()
            })
            .catch(function (error) {
                console.log(error)
            })           
    }

    updateUser = async (reward) => {
        try {
            await axios.patch(`/api/rewards/${reward._id}`, reward)
        } catch (error) {
            console.log(error)
        }
    }

    // RENDER /////////////////////////////////////////////

    render() {
        const rewards = this.state.rewards
        console.log('Under render', rewards)

        return (
            <div>
                <NavBar/>
                <div>
                    <FormSection>
                        <h2>Rewards</h2>
                        <RewardNewForm addNewReward={this.addNewReward} {...this.props}/>
                    </FormSection>
                    
                    <div>
                        <RewardContainer className="reward-container">
                            {rewards.map((reward) => {
                                return (
                                    <div>
                                        <a href={`/rewards/${reward._id}`}>
                                            <div>
                                            <img width={100} src={reward.imageUrl} alt="reward image"/>
                                            <br/>
                                            {reward.level}
                                            <br/>
                                            </div>
                                            </a>

                                        <p>Tokens Needed: {reward.tokensWorth}</p><br/>
                                        <p>Reward: {reward.reward}</p><br/>

                                        {/* <RewardEditForm 
                                        reward={this.state.reward}
                                        handleInputChange={this.handle.handleInputChange}
                                        handleSubmit={this.handleSubmit}/> */}

                                        <button onClick={() => {this.deleteReward(reward)}}>Delete</button>

                                        {/* <RewardEditForm /> */}

                                        {/* <Link to={'/editReward'}>
                                        <button>Edit</button>  
                                        </Link> */}
                                    </div>
                                )
                            })}
                        </RewardContainer>
                    </div>
                </div>
            </div>

        )
    }
}

export default RewardsPage

// ///////////////////////////////////////
//          STYLED COMPONENTS           //
// ///////////////////////////////////////

const FormSection = styled.div `
display: grid;
justify-content: center;
margin: 5px;
`

const RewardContainer = styled.div `
display: grid;
grid-template-columns: 33% 33% 33%;
grid-gap: 5px;
margin: 10px;
justify-content: center;
padding: 30px;

/* div.reward-container {
    display: grid;
    justify-content: center;
    align-items: center;
    font-size: 1.25rem;
} */
`