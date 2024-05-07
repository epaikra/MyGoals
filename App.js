import { useState } from "react";
import { StyleSheet, view, FlatList } from "react-native-web";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([])

  function handleAddGoal(enteredGoalText){
    setGoals(() => [...goals, {text: enteredGoalText, key: Math.random().toString()}])
    console.log(goals)
  }
function handleDeleteGoal(){
  console.log('DELETE')
}

  
return (
  <View style={styles.container}>
    
   <GoalInput
   onAddGoal={handleAddGoal}
   />
   <view style={styles.goalsContainer}>
    <FlatList
    data={goals}
    renderItem={ (itemData) => {
      return(
        // <view style={styles.goalsItem} >
        // <Text style={styles.goalText}>{itenData.item.text}</text>
        // </view>
        <GoalItem
        itemData={itemData}
        onDeleteItem={handleDeleteGoal}
        />
      )
    }}
    keyExtractor={(item) => {
    return item.id
    }}


    />
   </view>
  </View>
);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  goalsContainer: {
    flex: 5
  },
});
