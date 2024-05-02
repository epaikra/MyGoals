import { useState } from "react"
import { View, TextInput, Button, StyleSheet } from "react-native"

function GoalInput({ onAddGoal }){

    const [enteredGoalText, setEnteredGoalText] = useState('')

    function handleInputGoal(enteredText){
        console.log(enteredText)
        setEnteredGoalText(enteredText)
    }

    function addGoalHandler(){
        onAddGoal(enteredGoalText)
        setEnteredGoalText('')
        console.log('addGoalHandler')
    }

    return(

    )

}

export default GoalInput 