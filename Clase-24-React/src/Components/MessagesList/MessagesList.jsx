import React from 'react'
import Message from '../Message/Message'

const MessagesList = (props) => {
  
  const messages_list_JSX = props.messages.map(
    (message) => {
      return (
        <Message
          key={message.id}
          author={message.author}
          timestamp={message.timestamp}
          content={message.content}
          id={message.id}
        />
      )
    }
  )
  return (
    <div>
      {messages_list_JSX}
    </div>
  )
}

export default MessagesList

