import React from 'react'
import Message from '../Message/Message'

const MessagesList = () => {
  const messages = [
    {
      id: 1,
      author: 'YO',
      content: "Que tal!",
      timestamp: '16:17'
    },
    {
      id: 2,
      author: 'Maria',
      content: "Si",
      timestamp: '16:18'
    }
  ]

  const messages_list_JSX = messages.map(
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

