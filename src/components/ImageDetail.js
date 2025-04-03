import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';   

const ImageDetail = props => {
    return (
        <View>
            <Image 
                source={props.imageSource} 
                style={styles.imageStyle}
            />
            <Text style={styles.textStyle}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    imageStyle: {
        width: 160,
        height: 160,
        borderRadius: 10,
        margin: 1,
      
    },
    
    textStyle: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 5,
        fontWeight: 'bold'
    },
    
       
    
});

export default ImageDetail;
