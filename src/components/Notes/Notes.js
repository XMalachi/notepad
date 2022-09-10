import React, { useContext } from 'react'
import GlobalContext from '../../NotepadContext'
import styles from './Notes.module.css'
import { Consumer } from '../../NotepadContext'
import {BsFillTrashFill, BsPlusLg, BsPencilSquare, BsStarFill} from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";

const Notes = () => {
    const {notes, cards,  addedfavourite, addedlikes }  = useContext(GlobalContext)

    // const {id, date, title, textarea} = textContents

    
  return (
    <div>

    <Consumer>
        {state => {
            return(
                <>
                {cards.length === 0 &&  <h3 className={styles.nocards}>There are no notes</h3>}
                    {notes && 
                    <div className={styles.notepadNotes}>
                        <div className={styles.header}>
                            <h2>All Notes</h2>
                            <small>As a painter, taking photos is a form of shorthand  note-taking - Wanda Koop</small>
                        </div>
                        <div className={styles.notepadNote}>
                            {cards.length > 0 && cards.map((card) => (
                                
                                <div key={card.id} className={styles.card}>
                                    <div className={styles.title}>Title:  {state.truncatetwenty(card.title)}</div>

                                    <div className={styles.date}>{new Date().toLocaleString()}</div>

                                    <div className={styles.content}>
                                    
                                        <div className={styles.note}>{state.truncatethirty(card.textarea)}</div>

                                        <div className={styles.togglers}>
                                            <span onClick={() => state.displayupdateform(card.id)}>
                                                <BsPencilSquare className={styles.update} />  
                                            </span>

                                            <span onClick={() => state.deleteHandler(card.id)}>
                                                <BsFillTrashFill className={styles.delete} />
                                            </span>

                                            <span onClick={() => state.favouriteHandler(card.id)} style={{color: `${addedfavourite? 'red' : ''}`}}>
                                                <BsStarFill  />
                                            </span>

                                            <span onClick={() => state.likeHandler(card.id)}>
                                                <AiFillLike className={addedlikes? styles.like : styles.notlike} />
                                            </span>
                                        </div>        
                                    </div>
                                </div>    
                                
                            ))}
                    
                        </div>

                        <div className={styles.addNotes}>
                            <button onClick={state.displayForm}>
                                <BsPlusLg />Add New Note
                            </button>
                        </div>

                    </div>}

                </>
            ) 
        }}
        
    </Consumer>
       
    </div>
  )
}

export default Notes