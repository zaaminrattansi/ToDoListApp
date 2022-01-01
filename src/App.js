import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, KeyboardAvoidingView, Touchable, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/task';





export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([])

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);

  }


  return (
    <View style={styles.container}>
      <View style={styles.tasksWarapper}>
        <Text style={styles.header}>To Do List</Text>

        <View style={styles.tasks}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item} />

                </TouchableOpacity>
                )
            })
          }
       

        </View>

      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ?"padding" : "height"}
        style={styles.writeTaskWrapper}>

        <TextInput style={styles.input} placeholder={'New Task'} placeholderTextColor={'white'} value={task} onChangeText={text => setTask(text)}/>

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>

          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>

      <Text style={styles.deleteMessage}>Press an item to delete it</Text>
      
      


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  tasksWarapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    
  },
  header: {
    fontSize: 24, 
    fontWeight: 'bold',
    color: 'white'
  },
  tasks: {
    paddingTop: 30,



  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15, 
    backgroundColor: '#404040',
    borderColor: 'black',
    borderRadius: 60,
    borderWidth: 1,
    width: 250,
    
  },
  addWrapper: {
    width: 60, 
    height: 60, 
    backgroundColor: 'grey',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: "center",
    borderColor: 'black',
    borderWidth: 1,
  },
  addText: {

  },
  deleteMessage: {
    color: 'white',
    position: 'absolute',
    bottom: 35,
    paddingHorizontal: 30

  }

  
});
