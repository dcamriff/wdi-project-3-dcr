import React from 'react'
import ChoreList from './ChoreList'

const ChorePage = (props) => {
console.log("HELLOLOOL", props.chores)

    return(
        <div>
            <h2>This Week's Chores</h2>
            
            <ChoreList userId ={props.userId} chores={props.chores} task = {props.chores.task}/>
        </div>
    )
}


export default ChorePage