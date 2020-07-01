import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Button from '../components/common/Button';


const MainScreen = ({ navigation }) => {
    const [state, setState] = useState({ name: '' });
    const { name } = state;

    const onPress = () => {
        navigation.navigate('Home', { name })
    };

    const onChangeText = name => setState({ name })

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>ChatBubble</Text>
            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder="Nickname"
                    placeholderTextColor="#003f5c"
                    onChangeText={onChangeText}
                    value={name}
                />
            </View>
            <Button onPress={onPress} title='LOGIN' />
        </View >
    );
};



MainScreen.navigationOptions = {
    title: 'ChatBubble',
    headerShown: false
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#fb5b5a",
        marginBottom: 40
    },
    inputView: {
        width: "80%",
        backgroundColor: "#465881",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "white",
        textAlign: "center"
    },
    forgot: {
        color: "white",
        fontSize: 11
    },
});

export default MainScreen;