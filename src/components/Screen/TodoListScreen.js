import React from 'react'
import TodoHeader from '../TodoList/TodoHeader/TodoHeader'
import TodoList from '../TodoList/Todos/TodoList'

import styles from './TodoScreen.module.css'

const TodoScreen = () => {
  return (
    <div className={styles.todoapp}>
        <TodoHeader />
        <TodoList />
    </div>
  )
}

export default TodoScreen