import React from 'react'

const MessagesList = () => {
    const messages = [
        {
            id: 1,
            author: 'YO',
            message: "Que tal!",
            timestamp: '16:17'
        },
        {
            id: 2,
            author: 'Maria',
            message: "Si",
            timestamp: '16:18'
        }
    ]
  return (
    <div>MessagesList</div>
  )
}

export default MessagesList