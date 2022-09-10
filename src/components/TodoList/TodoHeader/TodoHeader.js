import React from 'react'
import styles from './TodoHeader.module.css'
import {BsJustify} from "react-icons/bs";

const TodoHeader = () => {
  return (
    <div>
        <div className={styles.todoHeader}>
            <div className={styles.hamburger}>
                <h3><BsJustify /></h3>
            </div>
            <div className={styles.header}>
                <h1>Website Todo</h1>
            </div>
            <div className={styles.spacer}>

            </div>
        </div>
    </div>
  )
}

export default TodoHeader