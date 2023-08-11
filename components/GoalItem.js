import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable onPress={props.onDeleteItem.bind(this, props.id)} style={({pressed}) => pressed && styles.pressedItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    borderWidth: 4,
    borderColor: 'rgba(146,26,32,0.2)',
    borderRadius: 6,
    backgroundColor: 'brown',
    padding: 8,
    width: '60%',
    alignSelf: 'center'
  },
  goalText: {
    color: 'white',
    fontSize: 16
  },
  pressedItem: {
    opacity: 0.4
  }
})