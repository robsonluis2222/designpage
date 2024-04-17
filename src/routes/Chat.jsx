import React from 'react';
import ChatPage from '../components/ChatPage/ChatPage';

function Chat(){
    let result = '';
    async function generateRandomString(length) {
        
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        result = '';
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
      }
    generateRandomString(12);


    return(
        <>
            <ChatPage />
        </>
    );
}

export default Chat;