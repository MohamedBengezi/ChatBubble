import React, { useReducer, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const [chatList, setChatList] = useState({});

    const onPress = () => {
        navigation.navigate('Chat', { name: navigation.getParam('name') })
    };

    return (
        <View style={styles.background}>
            <Text style={styles.title}>Messages </Text>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.row}>
                    <Image style={styles.chatIcon} source={{ uri: 'https://i.picsum.photos/id/1022/200/200.jpg?hmac=MjK2sur6luq2UfxMPWBFBuPyvZYyYLYvQH9kCmEGJRY' }} />
                    <View style={styles.col}>
                        <Text style={styles.chatName}>Chat Name</Text>
                        <Text style={styles.lastSent}>Wow that sounds crazy!</Text>

                    </View>
                </View>
            </TouchableOpacity>

        </View >
    );
};


const styles = StyleSheet.create({
    background: {
        backgroundColor: '#ffffff',
        flex: 1
    },
    row: {
        height: 100,
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingVertical: 20,
        alignItems: "center"

    },
    col: {
        flexDirection: "column"
    },
    title: {
        fontSize: 15,
        paddingLeft: 10,
        textAlign: "left",
        fontWeight: "bold",
        color: '#003f5c',
        marginTop: 15
    },
    icon: {
        fontSize: 27,
        paddingRight: 10
    },
    chatIcon: {
        width: 70,
        height: 70,
        marginLeft: 14,
        borderWidth: 1
    },
    chatName: {
        fontSize: 18,
        paddingLeft: 10,
        fontWeight: "bold",
        color: '#000000'
    },
    lastSent: {
        paddingLeft: 10,
        color: '#808080'
    }
});
export default HomeScreen;