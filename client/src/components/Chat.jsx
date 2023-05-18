import React from 'react'
import {useMultiChatLogic, MultiChatSocket, MultiChatWindow} from 'react-chat-engine-advanced'
import Header from './CustomHeader'

const Chat = () => {
  // Connect a Hook to the Server
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID, // server
    "testuser",
    "1234"
  ) 

  return (
    <div style={{flexBasis: '100%'}}>
      {/* Connect a Socket to the Hook */}
      <MultiChatSocket {...chatProps} />

      {/* Connect Components to the Hook */}
      <MultiChatWindow 
        {...chatProps} 
        style={{height:'100vh'}}
        renderChatHeader={(chat)=><Header chat={chat}/>}
      />
    </div>
  )
}

export default Chat