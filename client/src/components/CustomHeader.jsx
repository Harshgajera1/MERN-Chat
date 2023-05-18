import React from 'react'
import { ChatBubbleLeftRightIcon, PhoneIcon } from "@heroicons/react/24/solid";


const CustomHeader = ({chat}) => {
    console.log('ffffff',chat)
  return (
    <div className='chat-header'>
        <div className='flexbetween'>
            <ChatBubbleLeftRightIcon className='icon-chat' />
            <h3 className="header-text">{chat.title}</h3>
        </div>
        <div className="flexbetween">
            <PhoneIcon className='icon-chat'/>
            {
              chat.description !== '⬅️ ⬅️ ⬅️' ? 
                <p className="header-chat">{chat.description}</p> 
              : <p className="header-chat">no chat selected</p>
            }
        </div>
    </div>
  )
}

export default CustomHeader