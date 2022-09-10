import React from 'react'
import NotepadScreen from './components/Screen/NotepadScreen'
import TodoScreen from './components/Screen/TodoListScreen'
import { Link, Route, Routes } from 'react-router-dom'
import { BsReceiptCutoff } from "react-icons/bs";

const Router = () => {
  return (
    <>
        <nav className='nav'>
        
            <div>
                <Link to='/'><BsReceiptCutoff /> TRACKERS</Link>
            </div>

            <div className='navLinks'>
                <Link to='/'>Notepad</Link>
                <Link to='/TodoScreen'>Todo List</Link>
            </div>
            
        </nav>

        <Routes>
            <Route index element = {<NotepadScreen />} />
            <Route path='TodoScreen' element = {<TodoScreen />} />
        </Routes>
    </>
  )
}

export default Router