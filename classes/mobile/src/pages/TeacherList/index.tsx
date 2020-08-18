import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';

function TeacherList() {
    return (
        <View style={styles.container}>
            <PageHeader title='Proffys disponíveis'/>
        </View>
    );
}

export default TeacherList;