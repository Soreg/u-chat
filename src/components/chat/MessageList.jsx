import React from 'react'
import styled from 'styled-components'
import SingleMessage from './SingleMessage'

const MessageUl = styled.ul`
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-height: 490px;
    overflow: auto;
`


const MessageList = (props) => {
    return (
        <MessageUl>
            {
                props.messages.map((message) => (
                    <SingleMessage message={message} />
                ))
            }
        </MessageUl>
    )
}

export default MessageList;