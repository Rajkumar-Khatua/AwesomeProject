import React from "react";
import { View, Text, StyleSheet, useColorScheme } from "react-native";

function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark'
    return (
        <View style={ styles.container }>
            <Text style={ isDarkMode ? styles.whiteColor : styles.DarkColor }>Hello World</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    },
    whiteColor: {
        color: '#fff',
    },
    DarkColor: {
        color: '#000',
    }
})

export default AppPro;