import { useState } from 'react'
import {BrowserRouter, Routes ,Route,Navigate, Router} from 'react-router-dom'
import Chat from '../Components/Chat/Chat'

function App() {


  return (
    <>
      <div className='app'>
        <BrowserRouter>
          <Routes>
            <Route path='/chat' element={<Chat />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
