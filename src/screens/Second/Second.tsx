import React from 'react'
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Body from './screenComponents/Body/Body'

const Second = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Body />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

export default Second;