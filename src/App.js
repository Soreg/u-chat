import React, { Component } from 'react';
import ChatRoom from './components/chat/ChatRoom';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAS5Uqz60vsDRcyiWhCnO6NKLGxQg9b5-o",
  authDomain: "u-chat-90650.firebaseapp.com",
  databaseURL: "https://u-chat-90650.firebaseio.com",
  projectId: "u-chat-90650",
  storageBucket: "u-chat-90650.appspot.com",
  messagingSenderId: "1076402466127"
};

firebase.initializeApp(config);

class App extends Component {
    render() {
        return (
            <ChatRoom />
        )
    }
}

export default App;
