import React, { Component } from 'react'
import styled from 'styled-components'
import Chore from './Chore'

class ChoreList extends Component {

    // addNewChore = (newChore) => {
    //     console.log(newChore)
    //     axios.post(`/api/chores`, {newChore}).then(response => {
    //             console.log('Did the chore post?')
    //             const resChore = response.data
    //             const chores = [...this.state.chores]
    //             chores.push(resChore)
    //             this.setState({chores})
    //             console.log('FromPOST'+this.state.chores)

    //         })
    //         .then(() => {
    //             this.setState({redirect: true})
    //         })
    //         .catch(function (error) {
    //             console.log(error)
    //         })
    //         return true;
    // }


    render () {
        console.log('Passing Props Successful', this.props.chores)
        const choresList = this.props.chores.map((chore, index) => {
            return (
                <div>
                <Chore 
                task = {this.props.chores[index].task}
                category = {this.props.chores[index].category}
                description = {this.props.chores[index].description}
                imageUrl = {this.props.chores[index].imageUrl}
                tokens = {this.props.chores[index].tokens}
                completed = {this.props.chores[index].completed}
                key={index}
                />
                </div>
            )
        })
        return (
            <div>
                <ChoresWrapper>
                {choresList}
                </ChoresWrapper>

            </div>

        )
    }
}

export default ChoreList

// STYLED COMPONENTS /////////////////////

const ChoresWrapper = styled.div `
display: grid;
grid-template-columns: 33% 33% 33%;
grid-gap: 5px;
margin: 10px;
justify-content: center;
align-items: center;
/* justify-items: center; */
padding: 30px;
`