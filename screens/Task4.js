import { StatusBar } from 'expo-status-bar';
import { View, FlatList, StyleSheet, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Movies from '../components/Movies';

export default function Task4() {

    const [list, setList] = useState()

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=7be72508776961f3948639fbd796bccd&page=${next}")
        .then(response => response.json())
        .then(data => setList(data.results))
    }, [])
    
    return (
    <View style = {styles.container}>
        <StatusBar style="auto" />
        <Text>{'\n'}</Text>
        <FlatList data={list}
            renderItem={({item}) => 
            <Movies datos={item}/>
            }
        />
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

    title:{
        fontSize: 25,
        fontWeight:'bold',
    },
});