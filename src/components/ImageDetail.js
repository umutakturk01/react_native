import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';   

const ImageDetail = ({imageSource,title,score}) => {
    return (
        <View>
            <Image 
                source={imageSource} 
                style={styles.imageStyle}
            />
            <Text style={styles.textStyle}>{title}</Text>
            <Text style={styles.textStyle}> score({score})</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    imageStyle: {
        width: 160,
        height: 160,
        borderRadius: 10,
        margin: 1,
        borderColor: 'rgba(0, 0, 0, 0.8)',
        borderWidth: 1,
    },
    
    textStyle: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 5,
        color:'rgba(189, 39, 226, 0.8)',
        fontWeight: 'bold'
    },
    
       
    
});

export default ImageDetail;
