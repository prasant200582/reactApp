import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ReuseComponent = (props) => {
    return(
        <Text style={styles.textStyle}>
            {props.children}
        </Text>
    )
}

const styles = StyleSheet.create({
    textStyle:{
        backgroundColor:'#efefef',
        fontSize:20,
        fontWeight:'700',
        color:'red',
        padding:10,
        width:'100%',
        marginTop:10,
        textAlign:'center'
    }
})

export default ReuseComponent;