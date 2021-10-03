import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button, ScrollView } from 'react-native';




export default class datos extends React.Component {
    render() {
        return (
        <View style={datos.container}>
            <Text style = {style.textStyle}>SPECIFICATIONS</Text>
            <Image
                style= {style.imgStyle}
                source = {require('./assets/sun/sun4.png')}
            
            ></Image>
            <Text style = {style.textStyle}> Parameter1: </Text>
            <Text style = {style.textStyle}> Parameter2: </Text>
            <Text style = {style.textStyle}> Parameter3: </Text>

            <View style={style.buttonContainer}>
                <Button
                    title='MENU'
                    color="skyblue"
                    onPress={buttonClicked}/>
            </View>
            <TextInput
                underline = 'transparent'
                style={style.input}
            />
        </View>
        );
    }
}


const buttonClicked = () => {
    alert('Return to the menu')
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6DD7F0',
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonContainer: {
        backgroundColor: '#E0F6FB',
        padding: 15,
        margin: 40,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },

    textStyle: {
        fontSize: 30,
        paddingTop: 30,
        color: '#000'
    },

    imgStyle: {
        width: '40%',
        height: 30,
        marginTop: -20

    },

    input: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        marginTop: 35,
        marginBottom: 8
    }

   
});

export default Specifications
