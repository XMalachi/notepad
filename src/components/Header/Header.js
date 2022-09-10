import React from 'react'
import styles from './Header.module.css'
import {BsPlusLg, BsListStars, BsStarFill} from "react-icons/bs";
import { Consumer } from '../../NotepadContext';

const Header = () => {
    

  // console.log(value)
  
  return (
    
    <div className={styles.notepadHeader}>
        <Consumer>
        {(state) => {
            return(
                <>
                    <div className={styles.toggler}>
                        <span className={styles.hamburger}><BsListStars /></span>
                        <span className={styles.favNotes} onClick={state.displayFavourites}>
                            <span><BsStarFill className={styles.favIcon} /></span> 
                            <span className={styles.favourites}>&nbsp;Favourites</span>
                        </span>
                    </div>
                    
                    <div className={styles.heading}>
                        <h1>Notepad</h1>
                    </div>

                    <div className={styles.addnote}>
                        <h3 onClick={state.displayForm} ><BsPlusLg/> Add Note</h3>
                    </div>
                </>
            )
        }}
            
        </Consumer>
          
        
    </div>
          

          
       
  )
}

export default Header