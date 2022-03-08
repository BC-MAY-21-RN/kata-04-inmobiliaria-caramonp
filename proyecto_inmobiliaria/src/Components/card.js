/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Text, Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Card = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerCard}>
                <Image style={styles.image} source={require('../img/apartment.jpg')} />
                <View style={styles.informationContainer}>
                    <Text style={styles.title}>The Willows</Text>
                    <View style={styles.location}>
                        <Icon name='map-marker-outline' size={25}/>
                        <Text style={styles.locationTitle}> 3514 W. Gray St. Utica</Text>
                    </View>
                    <View style={styles.icons}>
                        <Icon name='bed-outline' size={20}/>
                        <Text style={{color: 'black'}}>3</Text>
                        <Icon name='bathtub' size={20}/>
                        <Text style={{color: 'black'}}>2</Text>
                        <Icon name='move-resize' size={20}/>
                        <Text style={{color: 'black'}}>230 ft</Text>
                        <Text style={{fontSize: 15, lineHeight: 18, color: 'black'}}>2</Text>
                    </View>
                    <View style={styles.price}>
                        <Text style={styles.value}> $440/m</Text>
                        <Icon name ='heart-circle' color="green" size={30}/>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
    },

    containerCard: {
        marginTop: 20,
        height: 160,
        width: 350,
        padding: 20,
        backgroundColor: '#f5fdff',
        alignSelf: 'center',
        flexDirection: 'row',
        borderRadius: 10,
    },

    image: {
        height: 120,
        width: 120,
        borderRadius: 5,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },

    location: {
        flexDirection: 'row',
        marginTop: 5,
    },

    locationTitle: {
        color: 'gray',
    },

    icons: {
        flexDirection: 'row',
        marginLeft: 5,
        justifyContent: 'space-between',
        marginTop: 8,
    },

    price :{
        flexDirection: 'row',
        marginTop: 8,
    },

    informationContainer: {
        marginLeft: 8,
    },

    value: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 60,
        color: 'black'
    }
  });
