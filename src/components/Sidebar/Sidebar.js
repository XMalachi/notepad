import React, { useContext } from 'react'
import styles from './Sidebar.module.css'
import { BsPlusLg} from "react-icons/bs";
import GlobalContext, { Consumer } from '../../NotepadContext';


const Sidebar = () => {
  const {cards }  = useContext(GlobalContext)

  // const {id, date, title, textarea} = textContents

  return (
    <Consumer>
      {state => {
        return (
          <div className={styles.sidebar}>
          <div className={styles.search}>
              <input type="text" placeholder='Search' />
          </div>

          <div className={styles.sidebarheader}>
              <h2 className={styles.sidebarheading}>Notes</h2>
          </div>

          <div className={styles.notes}>
            {cards.length > 0 && cards.map((card)=> (
              <div key={card.id}>
                <div className={styles.sidebarNotes}>
                  <div className={styles.title}>{state.truncatetwenty(card.title)}</div>
                  <div className={styles.textarea}>{state.truncatetwenty(card.textarea)}</div>
                  <div className={styles.date}>{card.date}</div>
                </div>
              </div>
            )) }
          </div>

          <div className={styles.addnote}>
            <button onClick={state.displayForm}><BsPlusLg /></button> 
          </div>
      </div>
        )
      }}
 
      
    </Consumer>
  )
}

export default Sidebar