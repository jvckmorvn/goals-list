import { View, FlatList, Button, StyleSheet } from 'react-native';
import { Fragment, useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState([]);

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}]);
    hideModalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.id !== id);
    });
  }

  return (
    <Fragment>
      <StatusBar style='auto'/>
      <View style={styles.appContainer}>
        <View style={styles.modalButton}>
          <Button title='Add new goal' color='white' onPress={showModalHandler}/>
        </View>
        {modalIsVisible && <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} onHideModal={hideModalHandler}/>}
        <View style={styles.goalsContainer}>
          <FlatList data={courseGoals} renderItem={itemData => (
            <GoalItem
              text={itemData.item.text}
              onDeleteItem={() => deleteGoalHandler(itemData.item.id)}
              id={itemData.item.id}
          />
          )}/>
        </View>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: 'salmon'
  },
  goalsContainer: {
    flex: 7
  },
  modalButton: {
    marginVertical: '20%'
  }
});
