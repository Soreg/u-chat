import React, { Component } from 'react'
import * as firebase from 'firebase'
import TextEditor from './TextEditor'
import MessageList from './MessageList'
import styled from 'styled-components'

const ChatWrapper = styled.div`
    width: 500px;
    margin: 0 auto;
    padding: 12px;
    border: 2px solid black;
    margin-top: 35px;
`

class ChatRoom extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            message: '',
            messages: []
        }

        this.SendMessage = this.SendMessage.bind(this);
    }

    componentDidMount() {
        firebase.database().ref('messages/').on('value', (snapshot) => {
            const currentMessages = snapshot.val();
            if(currentMessages != null) {
                this.setState({
                    messages: currentMessages
                })
            }
        })
    }

    handleInputChange(e) {
        this.setState({
            message: e.currentTarget.value
        })
    }

    handleKeypress(e) {
        if(e.key === 'Enter') {
            this.SendMessage();
        }
    }

    SendMessage() {
        if(this.state.message.trim()) {
            const message = {
                id: this.state.messages.length,
                text: this.state.message
            }
            firebase.database().ref('messages/'+message.id).set(message);
            this.setState({
                message: ''
            })
        }
    }

    render() {
        return (
            <ChatWrapper>
                <MessageList messages={this.state.messages} />
                <TextEditor 
                    message={this.state.message} 
                    handleInputChange={(e) => this.handleInputChange(e)} 
                    handleKeypress={(e) => this.handleKeypress(e)}
                    SendMessage={this.SendMessage}
                    />
            </ChatWrapper>
        )
    }
}

export default ChatRoom;