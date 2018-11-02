import React from 'react'
import styled from 'styled-components'

const Message = styled.li`
    margin: 12px 0;
    background: white;
    border-radius: 30px;
    padding: 10px 12px;
    display: inline;
`


const SingleMessage = (props) => {
    return (
        <Message key={props.message.id}>{props.message.text}</Message>
    )
}

export default SingleMessage;