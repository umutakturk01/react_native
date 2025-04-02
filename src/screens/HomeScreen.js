import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return(
    <View>
      <Button
        title="Components"
        onPress={() => navigation.navigate('Components')} 
      />

      <Button
        title="List"
        onPress={() => navigation.navigate('List')}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
