import React, {useContext} from 'react';
import styles from './UpdateForm.module.css';
import {BsPencilSquare} from "react-icons/bs";
import { Consumer } from '../../NotepadContext';
import GlobalContext from '../../NotepadContext';

const UpdateForm = () => {

    const {updatenoteform,updateNote} = useContext(GlobalContext)

  return ( 
    <div>
        <>
            {updatenoteform && 
                <Consumer>
                    {(state) => {
                        return (
                            <div>
                                <div className={styles.collectNote}>
                                    <div className={styles.formHead}>
                                        <h2><BsPencilSquare />Update Note</h2>
                                    </div>
                                    <div className={styles.form}>
                                        <div className={styles.formTitle}>
                                            <input type='text' placeholder='Title' className='update' onChange={state.onChangeHandler} value={updateNote.title} name='title' />
                                        </div>
                                        <div className={styles.note}>
                                            <textarea id="textarea" className='update' name="textarea" value={updateNote.textarea} rows="15" cols="91"  placeholder='Note' onChange={state.onChangeHandler}>
                                                
                                            </textarea>
                                        </div>
                                    </div>

                                    <div className={styles.handleform}>
                                        <button className={styles.savebtn} onClick={() => state.updateHandler(updateNote.id)}>Update</button>
                                        <button className={styles.cancelbtn} onClick={state.cancelHandler}>Cancel</button>
                                        <button className={styles.notesbtn} onClick={state.gotoNotes}>Go to Notes</button>
                                    </div>
                            
                                </div>
                                    
                            </div>

                        )

                    }}
                
                </Consumer>
            }
            

        </>
    </div>
  )
}

export default UpdateForm