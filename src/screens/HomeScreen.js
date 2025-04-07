import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return(
    <View>
     {/*<Button
        title="Components"
        onPress={() => navigation.navigate('Components')} 
      />   */}
      
      <TouchableOpacity onPress={() => navigation.navigate('Components')} >
        <Text style={styles.text}>Components</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('List')} >
        <Text style={styles.text}>List</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Image')} >
        <Text style={styles.text}>Image</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Counter')} >
        <Text style={styles.text}>Counter</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Color')} >
        <Text style={styles.text}>Colors</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Square')} >
        <Text style={styles.text}>Square</Text>
      </TouchableOpacity>

      </View>
    
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    color : 'white',
    fontWeight: 'bold',
    marginVertical: 4,
    marginHorizontal: 100,
    backgroundColor: 'rgba(189, 39, 226, 0.8)',
    padding: 7,
    borderRadius: 5,
    textAlign: 'center',

    
  },
});

export default HomeScreen;
