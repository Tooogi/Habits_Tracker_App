import React, {useState} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({title, addItem}) => {
  const [text, setText] = useState('');

  const onChange = textValue => setText(textValue);

  return (
    <View>
      <TextInput
        placeholder="Add new habit"
        style={styles.input}
        onChangeText={onChange}
      />
      <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
        <Icon name="plus" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#003399',
    padding: 9,
    margin: 5,
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -60,
    left: 350,
    zIndex: 5,
  },
});

export default AddItem;
