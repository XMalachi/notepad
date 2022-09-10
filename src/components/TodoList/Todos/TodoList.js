import React, { useState } from 'react'
import styles from './TodoList.module.css'
import {BsFillTrashFill, BsPlus, BsPencilSquare} from "react-icons/bs";


const TodoList = () => {
    
    const [updateForm, setupdateform] = useState(false)
    const [updateList, setUpdateList]  = useState({
        id: '',
        value:  ''
    })
    const [deleteBtn, setdelete] = useState(false)
    const [list, setList] = useState('')
    const [listItem, setListItem] = useState([])
    const [form, setform] = useState(false)

    const outPutForm = () => {
        setform(true)
    }

    const onMouseOver = ()  => {
        setdelete(true)
    }

    const displayFormUpdate = (id) => {
        const copy = [...listItem] 
        const Item =  copy.find((item) => item.id === id)
        console.log(Item.value)
        // setList(Item.value)
        setUpdateList(Item)
        setupdateform(true)
        // console.log(value)
    }

    const onChangeHandler =(e) => {
        if(e.target.name === 'updateList'){
            setUpdateList({...updateList, value: e.target.value})
        }
        setList(e.target.value)
        
    }

    const addList = (e) => {
        e.preventDefault()
        setListItem([...listItem, {
            id: listItem.length,
            value: list
        }])
        setform(false)
        setList('')
    }

    const removeList = (id) =>  {
        let copy = [...listItem]
        let filtered = copy.length> 0 && copy.filter((item)=> (item.id !== id))
        
        setListItem(filtered)
    }

    

    const updateListHandler = (id) => {
        let copy  = [...listItem]
        const index = copy.indexOf(copy.find(item => item.id === id))
        
        let itemToBeUpdated = copy[index]
        itemToBeUpdated.value =  updateList.value
        
        setListItem(copy)

        setupdateform(false)
    }


    const cancelUpdatenEdit = () => {
        setupdateform(false)
        setform(false)
    }


        console.log(list)
  return (
    <div className={styles.todoListPage}>
        <div className={styles.todolist}>
            <ul className={styles.list}>
                {listItem.length > 0 && listItem.map((item)=> 
                <div className={styles.listItem}>
                    <li onMouseEnter={onMouseOver} key={item.id}>
                    {item.value}

                    {deleteBtn && 
                    <div>
                        <button onClick={()=>removeList(item.id)}><BsFillTrashFill /></button>
                        <button onClick={()=>displayFormUpdate(item.id)}><BsPencilSquare /></button>
                    </div>
                    }
                    </li>
                </div>
                    )}
            </ul>

            <div className={styles.btnClass}>
                <button className={styles.btn} onClick={outPutForm}><BsPlus /> Add New Task</button>
            </div>
           
        </div>

        <div className={styles.formGroup}>    
            { form &&
                <div>
                    <input type='text' name='name' placeholder='Your list' value={list} onChange={onChangeHandler} className={styles.input} /> 
                    
                    <div  className={styles.btnGroup}>
                        <button className={styles.btnSubmit} onClick={addList} type='submit'>Submit</button>
                        <button className={styles.btnCancel} onClick={()=> cancelUpdatenEdit()} type='submit'>Cancel</button>
                    </div> 

                </div> 
            }

            {
                updateForm &&
                <div>
                    <input type='text' name='updateList' placeholder='Update' value={updateList.value} onChange={onChangeHandler} className={styles.input} /> 
                    
                    <div  className={styles.btnGroup}>
                        <button className={styles.btnSubmit} onClick={()=> updateListHandler(updateList.id)} type='submit'>Update</button>
                        <button className={styles.btnCancel} onClick={()=> cancelUpdatenEdit()} type='submit'>Cancel</button>
                    </div>

                </div> 
            } 
            
            
        </div>
    </div>
  )
}

export default TodoList