import React from 'react';
import { Text, StyleSheet} from 'react-native';  
import ImageDetail from '../components/ImageDetail'; 
import { View } from 'react-native';

const ImageScreen = () => {
    return (    
        <View style={styles.container}>
            <View style={styles.row}>
                <ImageDetail 
                    title="Forest" 
                    imageSource={require('../../assets/forest.jpg')}/>
                <ImageDetail 
                    title="Beach" 
                    imageSource={require('../../assets/beach.jpg')}/>
            </View>
            
            <View style={styles.row}>
                <ImageDetail
                    title="Mountain" 
                    imageSource={require('../../assets/mountain.jpg')}/>
                <ImageDetail
                    title="City"
                    imageSource={require('../../assets/city.jpg')}/>
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
      
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        paddingHorizontal: 10
    }

});
export default ImageScreen;
