import { View, TextInput, Button, Modal, Image, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/goals.jpeg')} style={styles.image}/>
        <TextInput
          style={styles.textInput}
          placeholder='My course goals...'
          onChangeText={goalInputHandler}
          value={enteredGoalText}
       />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonItem}>
            <Button title='Add goal' onPress={addGoalHandler} color='brown'/>
          </View>
          <View style={styles.buttonItem}>
            <Button title='Cancel' onPress={props.onHideModal} color='brown'/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '60%',
    backgroundColor: 'rgba(240,124,120,0.83)'
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'brown',
    borderRadius: 6,
    width: '70%',
    padding: 10,
    backgroundColor: 'rgba(255,255,255,0.8)',
    color: 'brown',
    fontWeight: '500',
    marginTop: 20
  },
  buttonContainer: {
    marginTop: 8,
    flexDirection: 'row'
  },
  buttonItem: {
    width: '40%',
    marginHorizontal: 8
  },
  image: {
    marginLeft: '35%',
    width: '100%',
    height: '40%',
    margin: 20
  }
})