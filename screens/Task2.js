import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import React, { useState } from 'react'

export default function Task2() {

    const [name, setName] = useState()
    const [mail, setMail] = useState()
    const [image, setImage] = useState()

    return (
        <View style = {styles.container}>
            <StatusBar style="auto" />
            <Text>Formulario</Text>
            <Text>{'\n'}</Text>
            <TextInput placeholder='Ingrese su nombre'
                style={styles.input}
                onChangeText={(n)=>setName(n)}
            />
            <Text>{'\n'}</Text>
            <TextInput placeholder='Ingrese su correo'
                style={styles.input}
                onChangeText={(m)=>setMail(m)}
            />
            <Text>{'\n'}</Text>
            <TextInput placeholder='Ingrese el URL de la imagen'
                style={styles.input}
                onChangeText={(i)=>setImage(i)}
                keyboardType='email-address'
            />
            <Text>{'\n'}</Text>
            <View style = {styles.container}>
                <Text>Su nombre es: {name}</Text>
                <Text>Su correo es: {mail}</Text>
                <Text>{'\n'}</Text>
                <Image source={{uri:image}} style={styles.img}/>
            </View>
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
    },

    img: {
        width: 50,
        height: 50,
    },
});