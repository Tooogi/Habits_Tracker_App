import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import {v4 as uuid} from 'uuid';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Do some reflection'},
    {id: uuid(), text: 'Drink more coffee'},
    {id: uuid(), text: 'Write notes'},
    {id: uuid(), text: 'Practice'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

const addItem = text => {
  if (!text) {
    Alert.alert('Error', 'Please add an item', {text: 'OK'});
} else {
  setItems(prevItems => {
      return [{id: uuid(), text}, ...prevItems];
  });
  }
};

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
