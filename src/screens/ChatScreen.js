import React, { useState, useEffect } from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import Fire from '../../Fire';
import Header from '../components/common/Header';


const ChatScreen = ({ navigation }) => {
    const [messages, setMessages] = useState([]);
    const user = { name: navigation.getParam('name'), _id: Fire.shared.uid }


    useEffect(() => {
        Fire.shared.on(message =>
            setMessages(previousMessages => GiftedChat.append(previousMessages, message))
        );

        return () => {
            Fire.shared.off();
        }
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <GiftedChat
                messages={messages}
                onSend={Fire.shared.send}
                user={user}
            />
            <KeyboardAvoidingView />
        </View>

    );

};

const styles = StyleSheet.create({

});

ChatScreen.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: () => (
            <Header onPress={() => navigation.navigate('Home')} />
        ),
    };
};

export default ChatScreen;
