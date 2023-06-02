import { View, Text, TouchableOpacity, Image, StyleSheet, Modal } from 'react-native'
import React, { useState } from 'react'

export default function Movies(props) {

    const [modal, setModal] = useState(false)

    return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=> setModal(true)}>
            <Image source={{uri:'https://image.tmdb.org/t/p/original'+props.datos.poster_path}}
            style={styles.img}/>
            <Text>Titulo: {props.datos.original_title}</Text>
            <Text>{'\n'}</Text>
            <Modal visible={modal}
                animationType='fade'
                transparent={true}>
                <View style={styles.modal}>
                    <Text style={styles.txtModal}>Fecha de lanzamiento: {props.datos.release_date}</Text>
                    <Text style={styles.txtModal}>Visualizaciones: {props.datos.popularity}</Text>
                    <Text style={styles.txtModal}>Idioma original: {props.datos.original_language}</Text>
                    <View>
                    <Text>{'\n'}</Text>
                    <TouchableOpacity style={styles.btnModal}
                        onPress={()=>setModal(false)}>
                        <Text>Minimizar</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </Modal>
        </TouchableOpacity>

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

    modal:{
        flex: 1,
        backgroundColor: 'rgba(232, 234, 246, 0.9)',
        alignItems: 'center',
        justifyContent: 'center',

    },

    txtModal:{
        fontSize:25,
        fontWeight:'bold',
    },

    btnModal:{
        backgroundColor: '#7986CB',
        padding: 10, 
        borderRadius: 5,
        alignItems: 'center',
        width:'20%',
    },
});