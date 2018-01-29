import React, {Component} from 'react'
import styled from 'styled-components'


class RewardNewForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newReward: {}
        }
    }

    handleInputChange = (event) => {
        const attributeName = event.target.name
        let attributeValue = event.target.value
        const newReward = {
            ...this.state.newReward
        }
        newReward[attributeName] = attributeValue
        this.setState({newReward})
    }

    resetForm = () => {
        const newReward = {}
        this.setState({newReward})
        // ...this.defaultState.newReward
    }

    addNewReward = (event) => {
        event.preventDefault()
        const newReward = {...this.state.newReward}
        console.log("New User", newReward)
        this.resetForm()
        this.props.addNewReward(newReward)
    }

    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.addNewReward}>
                        <Input
                            name="level"
                            type="text"
                            placeholder="Level"
                            value={this.state.newReward.level}
                            onChange={this.handleInputChange}/>
                        <br/>
                        <Input
                            name="tokensWorth"
                            type="text"
                            placeholder="Tokens"
                            value={this.state.newReward.level}
                            onChange={this.handleInputChange}/>
                        <br/>
                        <Input
                            name="reward"
                            type="text"
                            placeholder="Reward"
                            value={this.state.newReward.reward}
                            onChange={this.handleInputChange}/>
                        <br/>
                        <Input
                            name="imageUrl"
                            type="text"
                            placeholder="URL to Profile Pic"
                            value={this.state.newReward.imageUrl}
                            onChange={this.handleInputChange}/>
                            <br/>
                            <div>
                                <input className="input-button" type="submit" value="Add New User"/>
                            </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default RewardNewForm

// ///////////////////////////////////////
//          STYLED COMPONENTS           //
// ///////////////////////////////////////

const Input = styled.input`
    width: 300px;
    padding: 12px;
    border: 1px solid black;   
`