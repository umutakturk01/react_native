import React from "react";
import { Text, StyleSheet, View, FlatList} from "react-native";

const ListScreen = () => {
    const friends = [
        { name: "Friend 1", age: 20 },
        { name: "Friend 2", age: 25 },
        { name: "Friend 3", age: 30 },
        { name: "Friend 4", age: 35 },
        { name: "Friend 5", age: 40 },
        { name: "Friend 6", age: 45 },
        { name: "Friend 7", age: 50 },
        { name: "Friend 8", age: 55 },
    ];
    return (
    <FlatList
    //horizontal={true} // Yatay l iste
    //showsHorizontalScrollIndicator={false} // Yatay kaydırma çubuğunu gizle

    data ={friends} 
    renderItem={({item})=> {
        return  <Text style={styles.textStyle}>
        {item.name}
        - Age: {item.age} </Text>
    }}
    keyExtractor={friend => friend.name}// Her arkadaşın ismi benzersiz key olarak kullanılır
    /> );
}

const styles = StyleSheet.create({});

export default ListScreen;