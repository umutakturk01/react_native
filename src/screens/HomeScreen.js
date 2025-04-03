import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return(
    <View>
      <Button
        title="Components"
        onPress={() => navigation.navigate('Components')} 
      />
      

      <TouchableOpacity onPress={() => navigation.navigate('List')} >
        <Text style={styles.text}>List</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Image')} >
        <Text style={styles.text}>Image</Text>
      </TouchableOpacity>

      </View>
    
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color : 'white',
    marginVertical: 8,
    marginHorizontal: 100,
    backgroundColor: 'rgba(189, 39, 226, 0.8)',
    padding: 7,
    borderRadius: 5,
    textAlign: 'center',

    
  },
});

export default HomeScreen;
