import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Task from "./components/Task";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Make AppDev application", isChecked: false },
    { id: 2, text: "Study Calculus slides", isChecked: false },
    { id: 3, text: "Finish IAS module + activities", isChecked: true },
  ]);

  const toggleCheckbox = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Unfinished Tasks</Text>

        <View style={styles.taskList}>
          {tasks
            .filter((task) => !task.isChecked)
            .map((task) => (
              <Task
                key={task.id}
                text={task.text}
                isChecked={task.isChecked}
                onPress={() => toggleCheckbox(task.id)}
              />
            ))}
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Finished Tasks</Text>

        <View style={styles.taskList}>
          {tasks
            .filter((task) => task.isChecked) // Filter out checked tasks
            .map((task) => (
              <Task
                key={task.id}
                text={task.text}
                isChecked={task.isChecked}
                onPress={() => toggleCheckbox(task.id)}
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
  sectionTitle: {
    fontSize: 26,
  },
  taskList: {
    marginTop: 20,
  },
});
