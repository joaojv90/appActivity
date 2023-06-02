import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'

export default function Api(props) {

    return (
        <View style={styles.container}>
            <Image source={{uri:props.datos.picture.thumbnail}}
            style={styles.img}/>
            <Text>Nombre: {props.datos.name.first} {props.datos.name.last}</Text>
            <Text>Correo: {props.datos.email}</Text>
            <Text>{'\n'}</Text>
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

    img: {
        width: 50,
        height: 50,
    },
});