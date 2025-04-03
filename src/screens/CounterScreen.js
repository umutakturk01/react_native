import React, {useState} from "react";
import { Text, StyleSheet, View , Button, TouchableOpacity} from "react-native";


const CounterScreen = () => {

    const [counter, setCounter] = useState(0);


    return(
        <View>

            <Text style={styles.text}>Counter:{counter}</Text>

            <View style={styles.container}>
           
            <TouchableOpacity  
                style={[styles.button,{ backgroundColor: 'rgb(0, 255, 30)' }]}
                onPress={() => {setCounter(counter+1);}}>
                <Text style={styles.buttonText }>+</Text>
            </TouchableOpacity >
            
            <TouchableOpacity  
                style={[styles.button,{ backgroundColor: 'rgba(255, 0, 0, 1)' }]}
                 onPress={() => {setCounter(counter-1);}}>

            <Text style={styles.buttonText}>-</Text>

            </TouchableOpacity >

           
        </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    // Sayaç değerini gösteren metin stili
    text: {
        fontSize: 30,                                    // Yazı boyutu
        fontWeight: 'bold',                             // Kalın yazı
        color: 'white',                                 // Yazı rengi
        marginVertical: 8,                              // Dikey dış boşluk
        marginHorizontal: 35,                           // Yatay dış boşluk
        backgroundColor: 'rgba(189, 39, 226, 0.8)',     // Yarı saydam mor arka plan
        padding: 7,                                     // İç boşluk
        borderRadius: 10,                               // Köşe yuvarlaklığı
        textAlign: 'center',                            // Metin ortalama
    },

    // Butonları yatay sıralamak için ana kapsayıcı
    container: {
        flexDirection: 'row',                           // Yatay düzenleme
        justifyContent: 'center',                       // Yatayda ortala
        alignItems: 'center',                           // Dikeyde ortala
    },

    // Artır/Azalt butonlarının genel stili
    button: {
        width: 60,                                      // Buton genişliği
        height: 60,                                     // Buton yüksekliği
        justifyContent: 'center',                       // İçeriği dikeyde ortala
        alignItems: 'center',                           // İçeriği yatayda ortala
        borderRadius: 30,                               // Yuvarlak köşeler (daire için)
        marginHorizontal: 10,                           // Yatay dış boşluk
    },

    // Buton içindeki + ve - işaretlerinin stili
    buttonText: {
        color: 'white',                                 // Yazı rengi
        fontSize: 15,                                   // Yazı boyutu
        textAlign: 'center',                            // Metin ortalama
        fontWeight: 'bold'                             // Kalın yazı
    },
});

export default CounterScreen;