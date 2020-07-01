import React, { useReducer, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Button from '../components/common/Button';
import { Feather } from '@expo/vector-icons';
import Header from '../components/common/Header';

const HomeScreen = ({ navigation }) => {
    const [chatList, setChatList] = useState({});

    const onPress = () => {
        navigation.navigate('Chat', { name: navigation.getParam('name') })
    };

    return (
        <View style={styles.background}>
            <Text style={styles.title}>Chats: </Text>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.row}>
                    <Text style={styles.title}>Chat Name</Text>
                    <TouchableOpacity onPress={() => { console.log('delete pressed'); }}>
                        <Feather style={styles.icon} name="trash-2" color="black" />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>

        </View>
    );
};

HomeScreen.navigationOptions = ({
    headerStyle: {
        backgroundColor: '#003f5c'
    },
    headerTitle: () => (<Header />)
});

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#003f5c',
        flex: 1
    },
    row: {
        height: 100,
        flexDirection: "row",
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        paddingVertical: 20,
        alignItems: "center"
    },
    title: {
        fontSize: 18,
        paddingLeft: 10,
        textAlign: "center"
    },
    icon: {
        fontSize: 24,
        paddingRight: 10
    }
});
export default HomeScreen;