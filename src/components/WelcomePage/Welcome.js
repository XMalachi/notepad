import React, { useContext } from 'react'
import styles from './Welcome.module.css'
import imageOne from '../img/notepadimg1.jpg'
import imageTwo from '../img/notepadimg2.jpg'
import GlobalContext from '../../NotepadContext'

const Welcome = () => {
    const {welcomeNote}  = useContext(GlobalContext)
    
    if(!welcomeNote){
        return null
    }else{
  return (
    <div className={styles.welcome}>
        <div className={styles.welcomeheading}>
            <h2>
                Welcome to Notepad!
            </h2>
            <p className={styles.welcomeheadingparagraph}>
                After all, that's what memory is for: keeping track of important events, so that if you're ever in a similar 
                situation, your brain has more information to try to survive. In other words, when things are life-threateningly
                scary, it's a good time to take notes. — David Eagleman
            </p>
        </div>
        

        <div className={styles.welcomeImgs}>
            <img className={styles.imageOne} src={imageOne} alt='woman writing' />
            <img className={styles.imagetwo} src={imageTwo} alt='keeping record' />
        </div>

        <div className={styles.welcomefooter}>
            <h2>
                Keep track of all activities!
            </h2>
        </div>
        
    </div>
  )
    }
}

export default Welcome