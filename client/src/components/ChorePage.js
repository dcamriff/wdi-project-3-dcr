import React from 'react'
import ChoreList from './ChoreList'

const ChorePage = (props) => {
console.log("HELLOLOOL", props.chores)

    return(
        <div>
            Hello from ChorePage
            <ChoreList userId ={props.userId} chores={props.chores} task = {props.chores.task}/>
        </div>
    )
}


export default ChorePage