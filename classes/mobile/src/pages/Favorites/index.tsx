import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';

function Favorites() {
    return (
        <View style={styles.container}>
            <PageHeader title='Meus proffys favoritos'/>
        </View>
    );
}

export default Favorites;