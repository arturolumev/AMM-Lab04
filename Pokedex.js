import React, {useState} from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button, TextInput, Pressable } from "react-native";

export default function Pokedex() {

    const [disable, setDisable] = React.useState(false);

    return (
        <View style={styles.container}>
            <Image
            style={{ width: 1000, height: 400}}
            source={require("./assets/pokemon.png")}
            />
            <Text>Bienvenido a la Pokedex</Text>
            <Text>Ingrese un numero de Pokemon para buscarlo</Text>
            <TextInput 
                style={{height: 40}}
                placeholder="Ejemplo: 025"
            />
            <button disabled={disable} onClick={() => setDisable(true)}>
                Buscar
            </button>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
