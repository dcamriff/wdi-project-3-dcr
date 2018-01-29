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
                        <RewardContainer>
                            {rewards.map((reward) => {
                                return (
                                    
                                    <div>                                
                                        {/* <a href={`/rewards/${reward._id}`}> */}
                                        <img width={200} src={reward.imageUrl} alt="reward image"/>
                                            {/* <div> */}
                                            <Reward>{reward.reward}</Reward>                                            
                                            {/* {reward.level} */}                                            
                                            {/* </div> */}
                                            {/* </a> */}

                                        <p>Tokens Needed: {reward.tokensWorth}</p>
                                        

                                        {/* <RewardEditForm 
                                        reward={this.state.reward}
                                        handleInputChange={this.handle.handleInputChange}
                                        handleSubmit={this.handleSubmit}/> */}

                                        <button onClick={() => {this.deleteReward(reward)}}>Delete</button>
                                        <br/>
                                        <br/>

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
grid-gap: 10px;
/* margin: 5px; */
justify-content: center;
justify-items: center;
padding: 0px;

img {
    border-radius: 50%;
}

@media (max-width: 768px) {
    /* For mobile phones: */
grid-template-columns: 100%;
    }

`

const Reward = styled.h3`
margin: 0;
`