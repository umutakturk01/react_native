import React from "react";
import { Text, StyleSheet, View,} from "react-native";

const ListScreen = () => {
    return (
        <View> 
            <Text style={styles.textStyle}> This is the List Screen </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ListScreen;