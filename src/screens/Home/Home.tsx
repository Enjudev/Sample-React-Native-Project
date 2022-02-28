import React from 'react'
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Body from './screenComponents/Body/Body'
import Header from './screenComponents/Header/Header';

const Home = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Header />
            <Body />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

export default Home;