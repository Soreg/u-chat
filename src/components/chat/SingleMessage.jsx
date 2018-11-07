import React from 'react'
import styled from 'styled-components'

const MessageWrapper = styled.div`
    margin: 12px 0 20px 0;
    padding: 10px 12px;
    position: relative;
    width: 100%;
    box-sizing: border-box;
`;

const Message = styled.li`
    background: white;
    border-radius: 30px;
    padding: 10px 12px;
    display: inline;
`

const Timestamp = styled.span`
    position: absolute;
    display: flex;
    transform: translateY(80%);
    font-size: 13px;
`;


const SingleMessage = (props) => {
    const {id, text, timestamp} = props.message
    
    return (
        <MessageWrapper>
            <Message key={id}>{text}</Message>
            <Timestamp>Sent: {timestamp}</Timestamp>
        </MessageWrapper>
    )
}

export default SingleMessage;