import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Api from '../components/Api';

export default function Task3() {

    const [list, setList] = useState();

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=5&exc=registered&exc=location&exc=id")
        .then(response => response.json())
        .then(data => setList(data.results))
    }, [])
    
    return (
    <View style = {styles.container}>
        <StatusBar style="auto" />
        <FlatList data = {list}
            renderItem={({item})=>
                <Api datos={item}/>
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
});