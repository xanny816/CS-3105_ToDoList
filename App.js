import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Keyboard} from "react-native";
import Task from "./components/Task";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Make AppDev application", isChecked: false },
    { id: 2, text: "Study Calculus slides", isChecked: false },
    { id: 3, text: "Finish IAS module + activities", isChecked: true },
  ]);
  const [newTask, setNewTask] = useState("");

  const toggleCheckbox = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  };

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: prevTasks.length + 1, text: newTask, isChecked: false },
      ]);
      setNewTask("");
      Keyboard.dismiss();
    }
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Unfinished Tasks</Text>
          <Image style={styles.massCheck} source={require('./assets/massCheck.png')}/>
        </View>

        <View style={styles.taskList}>
          {tasks
            .filter((task) => !task.isChecked)
            .map((task) => (
              <Task
                key={task.id}
                text={task.text}
                isChecked={task.isChecked}
                onPress={() => toggleCheckbox(task.id)}
                onDelete={() => handleDeleteTask(task.id)}
              />
            ))}
        </View>

        <View style={styles.addContainer}>
            <Image style={styles.addSign} source={require('./assets/add_sign.png')}/>
            <TextInput
              style={styles.addInput}
              placeholder="Enter new task"
              value={newTask}
              onChangeText={setNewTask}
              onSubmitEditing={handleAddTask}
              returnKeyType="done"
            />
        </View>
      </View>

      <View style={styles.sectionContainer}>
      <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Finished Tasks</Text>
          <Image style={styles.massCheck} source={require('./assets/massCheck.png')}/>
        </View>

        <View style={styles.taskList}>
          {tasks
            .filter((task) => task.isChecked)
            .map((task) => (
              <Task
                key={task.id}
                text={task.text}
                isChecked={task.isChecked}
                onPress={() => toggleCheckbox(task.id)}
                onDelete={() => handleDeleteTask(task.id)}
              />
            ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 80,
  },
  sectionContainer: {
    marginBottom: 40,
    paddingBottom: 50,
    marginHorizontal: 30,
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  sectionTitle: {
    fontSize: 26,
  },
  massCheck: {
    height: 20,
    width: 20
  },
  taskList: {
    marginTop: 20,
  },
  addContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  addSign: {
    height: 20,
    width: 20,
    marginRight: 20
  },
  addInput:{
    fontSize: 16,
    color: '#656565'
  }
});
