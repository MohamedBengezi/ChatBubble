import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import Fire from '../../Fire';



const reducer = (state, action) => {
    //state object and the change to make to it. 
    //state == {counter: 0}. action == increase || change_blue || change_green : colour, payload: amt
    switch (action.type) {
        case 'change_pass':
            return { ...state, pass: action.payload };
        default:
            return state;
    }
}

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
        <GiftedChat
            messages={messages}
            onSend={Fire.shared.send}
            user={user}
        />
    );

};

const styles = StyleSheet.create({

});

export default ChatScreen;
