import React from 'react'
import styled from 'styled-components'

const TextEditorWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
`

const Input = styled.input`
    font-size: 16px;
    padding: 8px 4px;
    outline: 0;
    box-shadow: none;
    display: block;
    width: 100%;
`

const Button = styled.button`
    border-radius: 2px;
    box-shadow: none;
    outline: none;
    cursor: pointer;
    border: none;
    padding: 14px 21px;
    text-transform: uppercase;
    display: block;
    margin: 20px auto 0;
    width: 100%;
`

const TextEditor = (props) => {
    return (
        <TextEditorWrapper>
            <Input type="text" placeholder="Type your message ..." value={props.message} onChange={(e) => props.handleInputChange(e)} onKeyPress={(e) => props.handleKeypress(e)} />
            <Button onClick={props.SendMessage}>Submit</Button>
        </TextEditorWrapper>
    )
}

export default TextEditor;