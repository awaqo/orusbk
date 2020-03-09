import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import logo from '../img/ballungu.png';
import ts from '../img/logostematel.png';

export default class Splash extends React.Component {
    async componentDidMount() {
        const data = await this.performTimeConsumingTask();

        if (data !== null) {
            this.props.navigation.navigate('Home');
        }
    }

    performTimeConsumingTask = async () =>
        new Promise(resolve =>
            setTimeout(() => {
                resolve('result');
            }, 3000)
        );

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden />
                <Image style={styles.logo} source={logo} />
                <Text style={styles.logotext}>Salam Olahraga.. JAYA!!</Text>
                <View style={styles.stickybtn}>
                    <Text style={styles.btnText}>Powered by</Text>
                    <Image style={styles.logots} source={ts} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 10
    },
    logotext: {
        fontFamily: 'PoppinsSemiBold',
        fontSize: 24,
        color: '#4d4bad',
        alignSelf: 'center'
    },
    stickybtn: {
        position: 'absolute',
        bottom: 15,
        alignSelf: 'center',
        alignItems: 'center'
    },
    btnText: {
        color: '#4F4F4F',
        fontSize: 14,
        fontFamily: 'PoppinsReg',
        marginBottom: 5
    },
    logots: {
        width: 110,
        height: 30,
    }
})