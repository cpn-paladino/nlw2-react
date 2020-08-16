import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import styles from './styles';
import GiveClassesBgImage from '../../assets/images/give-classes-background.png';

function GiveClasses() {
    return (
    <View style={styles.container}>
        <ImageBackground resizeMode="contain" source={GiveClassesBgImage} style={styles.content}>
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
            Para começar, você precisa se cadastrar como professor na nossa plataforma web.
        </Text>    
        </ImageBackground>
    </View>
    );
}

export default GiveClasses;
