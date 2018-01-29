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
                <Chore 
                task = {this.props.chores[index].task}
                category = {this.props.chores[index].category}
                description = {this.props.chores[index].description}
                imageUrl = {this.props.chores[index].imageUrl}
                tokens = {this.props.chores[index].tokens}
                completed = {this.props.chores[index].completed}
                key={index}
                />
            )
        })
        return (
            <div>hello from ChoreList
                {choresList}

            </div>

        )
    }
}

export default ChoreList