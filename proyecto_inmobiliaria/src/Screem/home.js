/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import { Card } from '../Components/card';


export const Home = ({navigation}) => {
    return (
        <ScrollView style={styles.containerHome}>
            <Card navigation={navigation} />
            <Card navigation={navigation} />
            <Card navigation={navigation} />
            <Card navigation={navigation} />
            <Card navigation={navigation} />
            <Card navigation={navigation} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    containerHome: {
      flex: 1,
      backgroundColor: 'white',
    },
  });
