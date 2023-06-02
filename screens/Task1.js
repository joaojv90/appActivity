import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

export default function Task1() {

    const [accountant, setAccountant] = useState(0)

    function stop () {
        if (accountant < 100) {
            setAccountant(parseInt(accountant)+1)
        }
    }

    return (
        <View style = {styles.container}>
            <StatusBar style="auto" />
            <Text>Ingrese el número para iniciar el conteo</Text>
            <Text>El número máximo al que llegará el contador es 100</Text>
            <Text>{'\n'}</Text>
            <TextInput
            keyboardType='numeric'
            placeholder='Ingrese su número aquí'
            onChangeText={(num) => setAccountant(num)}
            style = {styles.input}
            />
            <Text>{'\n'}</Text>
            <Button title='Iniciar contador' color={'#F4D03F'}
            onPress={()=>stop()}/>
            <Text>{'\n'}</Text>
            <Text>El contador está en: </Text>
            <Text>{'\n'}</Text>
            <Text style={{ fontSize: 50 }}>{accountant}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    input:{
        height:'10%',
        borderColor: '#ABB2B9',
        marginBottom: 10,
        borderWidth: 3,
        paddingHorizontal:10,
        borderRadius: 10,
        justifyContent: 'center',
    }
});