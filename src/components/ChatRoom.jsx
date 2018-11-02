import React, { Component } from 'react';
import * as firebase from 'firebase';

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
        }
    }

    render() {
        return (
            <div>
                <ol>
                    {
                        this.state.messages.map((message) => (
                            <li key={message.id}>{message.text}</li>
                        ))
                    }
                </ol>
                <input type="text" placeholder="Type your message ..." value={this.state.message} onChange={(e) => this.handleInputChange(e)} onKeyPress={(e) => this.handleKeypress(e)} />
                <br /><br />
                <button onClick={this.SendMessage}>Submit</button>
            </div>
        )
    }
}

export default ChatRoom;