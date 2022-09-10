import React, { useContext } from 'react'
import GlobalContext from '../../NotepadContext';
import { Consumer } from '../../NotepadContext';
import styles from './AddnotesForm.module.css'
import {BsLayoutTextWindowReverse} from "react-icons/bs";


const AddnotesForm = () => {
    const {addnoteform, textContents }  = useContext(GlobalContext)

    const {title, textarea} = textContents

    if(!addnoteform){
        return null
    }else{
        return (
            <div>
            <Consumer>
                {(state) => {
                    return (
                        <div className={styles.collectNote}>
                            <div className={styles.formHead}>
                                <h2><BsLayoutTextWindowReverse />New Note</h2>
                            </div>
                            <div className={styles.form}>
                                <div className={styles.formTitle}>
                                    <input type='text' placeholder='Title' onChange={state.onChangeHandler} value={title} name='title' />
                                </div>
                                <div className={styles.note}>
                                    <textarea id="textarea" name="textarea" value={textarea} rows="15" cols="91"  placeholder='Note' onChange={state.onChangeHandler}>
                                        
                                    </textarea>
                                </div>
                            </div>

                            <div className={styles.handleform}>
                            <button className={styles.savebtn} onClick={state.saveHandler}>Save</button>
                            <button className={styles.cancelbtn} onClick={state.cancelHandler}>Cancel</button>
                            <button className={styles.notesbtn} onClick={state.gotoNotes}>Go to Notes</button>
                            </div>

                        </div>
                    )
                }}
                
            </Consumer>
            </div>
  )
}
}

export default AddnotesForm