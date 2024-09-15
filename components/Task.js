import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.taskContainer}>
      <View style={styles.leftSection}>
        <TouchableOpacity onPress={props.onPress}>
          <Image
            style={styles.checkBox}
            source={
              props.isChecked
                ? require("../assets/checked.png")
                : require("../assets/unchecked.png")
            }
          />
        </TouchableOpacity>
        <Text style={[styles.taskText, props.isChecked && styles.checkedText]}>
          {props.text}
        </Text>
      </View>
      <Image style={styles.delete} source={require("../assets/x_sign.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    marginBottom: 13,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  checkBox: {
    width: 20,
    height: 20,
    marginRight: 20,
  },
  taskText: {
    fontSize: 18,
  },
  checkedText: {
    textDecorationLine: "line-through",
    color: "#656565",
  },
  delete: {
    height: 15,
    width: 15,
  },
});

export default Task;
