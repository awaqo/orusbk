import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// img
import soccer from '../img/soccer-thumb.jpg'

export default class Home extends React.Component {
    render() {
        return(
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.circle2}></View>
                    <View style={styles.circle1}></View>
                    <View style={styles.circle4}></View>
                    <View style={styles.circle3}></View>
                    <Text style={styles.textheader}>Selamat & Semangat Belajar!!</Text>
                    <Text style={styles.textheader1}>Jangan lupa berdoa^_^</Text>
                </View>

                {/* content start */}
                <View style={styles.contentleft}>
                    <View style={styles.imgleft}>
                        <Image style={styles.soccer} source={soccer} />
                    </View>
                    <View style={styles.contenttext}>
                        <Text style={styles.txtmaterileft}>Sepakbola</Text>
                    </View>
                    <TouchableOpacity style={styles.btnmaterileft}>
                        <Text style={styles.btntxt}>Mulai</Text>
                        <Icon size={25} color={'#fff'} name="ios-arrow-round-forward" />
                    </TouchableOpacity>
                </View>
                <View style={styles.contentright}>
                    <View style={styles.imgright}>
                        <Image style={styles.soccer} source={soccer} />
                    </View>
                    <View style={styles.contenttextright}>
                        <Text style={styles.txtmateriright}>Bola Basket</Text>
                    </View>
                    <TouchableOpacity style={styles.btnmaterileft}>
                        <Text style={styles.btntxt}>Mulai</Text>
                        <Icon size={25} color={'#fff'} name="ios-arrow-round-forward" />
                    </TouchableOpacity>
                </View>

                <View style={styles.contentleft}>
                    <View style={styles.imgleft}>
                        <Image style={styles.soccer} source={soccer} />
                    </View>
                    <View style={styles.contenttext}>
                        <Text style={styles.txtmaterileft}>Bulutangkis</Text>
                    </View>
                    <TouchableOpacity style={styles.btnmaterileft}>
                        <Text style={styles.btntxt}>Mulai</Text>
                        <Icon size={25} color={'#fff'} name="ios-arrow-round-forward" />
                    </TouchableOpacity>
                </View>
                <View style={styles.contentright}>
                    <View style={styles.imgright}>
                        <Image style={styles.soccer} source={soccer} />
                    </View>
                    <View style={styles.contenttextright}>
                        <Text style={styles.txtmateriright}>Tenis Meja</Text>
                    </View>
                    <TouchableOpacity style={styles.btnmaterileft}>
                        <Text style={styles.btntxt}>Mulai</Text>
                        <Icon size={25} color={'#fff'} name="ios-arrow-round-forward" />
                    </TouchableOpacity>
                </View>

                <View style={styles.contentleft}>
                    <View style={styles.imgleft}>
                        <Image style={styles.soccer} source={soccer} />
                    </View>
                    <View style={styles.contenttext}>
                        <Text style={styles.txtmaterileft}>Atletik</Text>
                    </View>
                    <TouchableOpacity style={styles.btnmaterileft}>
                        <Text style={styles.btntxt}>Mulai</Text>
                        <Icon size={25} color={'#fff'} name="ios-arrow-round-forward" />
                    </TouchableOpacity>
                </View>
                <View style={styles.contentright}>
                    <View style={styles.imgright}>
                        <Image style={styles.soccer} source={soccer} />
                    </View>
                    <View style={styles.contenttextright}>
                        <Text style={styles.txtmateriright}>Pencak Silat</Text>
                    </View>
                    <TouchableOpacity style={styles.btnmaterileft}>
                        <Text style={styles.btntxt}>Mulai</Text>
                        <Icon size={25} color={'#fff'} name="ios-arrow-round-forward" />
                    </TouchableOpacity>
                </View>

                <View style={styles.contentleft}>
                    <View style={styles.imgleft}>
                        <Image style={styles.soccer} source={soccer} />
                    </View>
                    <View style={styles.contenttext}>
                        <Text style={styles.txtmaterileft}>Roll Depan</Text>
                    </View>
                    <TouchableOpacity style={styles.btnmaterileft}>
                        <Text style={styles.btntxt}>Mulai</Text>
                        <Icon size={25} color={'#fff'} name="ios-arrow-round-forward" />
                    </TouchableOpacity>
                </View>
                <View style={styles.contentright}>
                    <View style={styles.imgright}>
                        <Image style={styles.soccer} source={soccer} />
                    </View>
                    <View style={styles.contenttextright}>
                        <Text style={styles.txtmateriright}>Roll Belakang</Text>
                    </View>
                    <TouchableOpacity style={styles.btnmaterileft}>
                        <Text style={styles.btntxt}>Mulai</Text>
                        <Icon size={25} color={'#fff'} name="ios-arrow-round-forward" />
                    </TouchableOpacity>
                </View>

                <View style={styles.contentleft}>
                    <View style={styles.imgleft}>
                        <Image style={styles.soccer} source={soccer} />
                    </View>
                    <View style={styles.contenttext}>
                        <Text style={styles.txtmaterileft}>Kebugaran Jasmani</Text>
                    </View>
                    <TouchableOpacity style={styles.btnmaterileft}>
                        <Text style={styles.btntxt}>Mulai</Text>
                        <Icon size={25} color={'#fff'} name="ios-arrow-round-forward" />
                    </TouchableOpacity>
                </View>
                <View style={styles.contentright}>
                    <View style={styles.imgright}>
                        <Image style={styles.soccer} source={soccer} />
                    </View>
                    <View style={styles.contenttextright}>
                        <Text style={styles.txtmateriright}>Renang</Text>
                    </View>
                    <TouchableOpacity style={styles.btnmaterileft}>
                        <Text style={styles.btntxt}>Mulai</Text>
                        <Icon size={25} color={'#fff'} name="ios-arrow-round-forward" />
                    </TouchableOpacity>
                </View>

                <View style={styles.contentleft}>
                    <View style={styles.imgleft}>
                        <Image style={styles.soccer} source={soccer} />
                    </View>
                    <View style={styles.contenttext}>
                        <Text style={styles.txtmaterileft}>Narkoba dan Psikotropika</Text>
                    </View>
                    <TouchableOpacity style={styles.btnmaterileft}>
                        <Text style={styles.btntxt}>Mulai</Text>
                        <Icon size={25} color={'#fff'} name="ios-arrow-round-forward" />
                    </TouchableOpacity>
                </View>
                <View style={styles.contentright}>
                    <View style={styles.imgright}>
                        <Image style={styles.soccer} source={soccer} />
                    </View>
                    <View style={styles.contenttextright}>
                        <Text style={styles.txtmateriright}>Sex Bebas dan AIDS</Text>
                    </View>
                    <TouchableOpacity style={styles.btnmaterileft}>
                        <Text style={styles.btntxt}>Mulai</Text>
                        <Icon size={25} color={'#fff'} name="ios-arrow-round-forward" />
                    </TouchableOpacity>
                </View>
                {/* content end */}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#e7eaf9'
        backgroundColor: '#d9daf6'
    },
    header: {
        width: '100%',
        height: 180,
        backgroundColor: '#4d4bad',
        borderBottomLeftRadius: 30,
        paddingHorizontal: 20,
        marginBottom: 20
    },
    circle1: {
        position: 'absolute',
        top: -30,
        left: -30,
        width: 120,
        height: 120,
        backgroundColor: 'rgba(51, 51, 51, 0.1)',
        borderRadius: 120
    },
    circle2: {
        position: 'absolute',
        top: -60,
        left: -60,
        width: 180,
        height: 180,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: 190
    },
    circle3: {
        position: 'absolute',
        bottom: 0,
        right: -30,
        width: 90,
        height: 60,
        backgroundColor: 'rgba(51, 51, 51, 0.1)',
        borderTopLeftRadius: 120
    },
    circle4: {
        position: 'absolute',
        bottom: 0,
        right: -60,
        width: 140,
        height: 80,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderTopLeftRadius: 190
    },
    textheader: {
        fontFamily: 'PoppinsSemiBold',
        fontSize: 20,
        color: '#fff',
        marginTop: 50
    },
    textheader1: {
        fontFamily: 'PoppinsThin',
        fontSize: 14,
        color: '#fff',
    },

    contentleft: {
        width: '95%',
        height: 100,
        backgroundColor: '#fff',
        alignSelf: 'flex-start',
        marginBottom: 20,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        flexDirection: 'row'
    },
    imgleft: {
        width: 100,
        height: 100,
    },
    soccer: {
        width: '100%',
        height: '100%',
    },
    contenttext: {
        width: '71%',
        height: '100%',
        // backgroundColor: '#d9daf6',
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        padding: 10
    },
    txtmaterileft: {
        fontFamily: 'PoppinsSemiBold',
        fontSize: 16,
        color: '#333'
    },
    btnmaterileft: {
        position: 'absolute',
        bottom: 10,
        right: 20,
        width: 100,
        height: 30,
        backgroundColor: '#abb3db',
        borderRadius: 40,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    btntxt: {
        fontFamily: 'PoppinsReg',
        fontSize: 14,
        color: '#fff',
        marginRight: 10
    },

    contentright: {
        width: '95%',
        height: 100,
        backgroundColor: '#fff',
        alignSelf: 'flex-end',
        marginBottom: 20,
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40,
        flexDirection: 'row-reverse'
    },
    imgright: {
        width: 100,
        height: 100,
        backgroundColor: '#333',
    },
    contenttextright: {
        width: '71%',
        height: '100%',
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        padding: 10,
        alignItems: 'flex-end'
    },
    txtmateriright: {
        fontFamily: 'PoppinsSemiBold',
        fontSize: 16,
        color: '#333'
    },
})