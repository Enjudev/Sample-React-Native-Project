import React from 'react';
import {View,Text, StyleSheet} from 'react-native';

const Unauthorized = () => {
    return (
    <View style={styles.container}>
        <Text>You not Authorize</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})

export default Unauthorized;