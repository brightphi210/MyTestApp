
import {SafeAreaView, View, Text, TouchableOpacity, TextInput, FlatList, Button } from 'react-native'
import DashHeader from '../Components/DashHeader'
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';

const Dashboard = ({todo}) => {

  

  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);


  const [updatingTodo, setUpdatingTodo] = useState(null);
  const [updateText, setUpdateText] = useState('');

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { id: tasks.length.toString(), text: task }]);
      setTask('');
    }
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };


  const navigation = useNavigation();

  const handleTodoPress = (taskId) => {
    navigation.navigate('description', { taskId });
  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', height: '100%'}}>
      <View style={{backgroundColor: 'white', flex: 1, height: '100%'}}>
        <DashHeader title={'Dashboard'} />
        <View style={{paddingHorizontal: 20, paddingTop: 10}}>
        <View>

        <TextInput
            placeholder='Enter New Todo'
            style={{
                width: '100%',
                borderColor: '#D6D6D6',
                borderWidth: 1,
                padding: 10,
                marginTop: 10,
                marginBottom: 20,
                borderRadius: 10
            }}

            value={task}
            onChangeText={(text) => setTask(text)}
        />


        <Button title="Add" onPress={addTask}  />
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, marginTop: 20, }}>
              <Text>{item.text}</Text>
              <Button title="Remove" onPress={() => removeTask(item.id)} />
              <Button title="View Details" onPress={() => handleTodoPress(1)} />

              <TouchableOpacity onPress={() => handleTodoPress(1)}>
              <Text>Todo 1</Text>
            </TouchableOpacity>

            
            </View>
          )}
        />
      </View>
        </View>

    </View>
    </SafeAreaView>

  )
}

export default Dashboard