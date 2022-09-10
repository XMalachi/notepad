import React, { useContext } from 'react'
import GlobalContext, { Consumer } from '../../NotepadContext'
import {BsFillTrashFill, BsPencilSquare} from "react-icons/bs";
import styles from './Favourites.module.css'

const Favourites = () => {
    const { displaytheFavourites, favourites }  = useContext(GlobalContext)

    console.log('the fav page', favourites)
    
    
        return (
            
            <>
                {displaytheFavourites && 
                    <Consumer>

                        {(state) => {
                            return(
                          
                            <div className={styles.favGroup}>
                                <div className={styles.favs}>
                                    <div className={styles.header}>
                                        <h2>Favourites</h2>
                                        <small>prereading is a game changer - Peter Rogers MD</small>
                                        {favourites.length === 0 &&  <h3 className={styles.nocards}>There are no notes in the favourite</h3>}
                                    </div>
                                    
                                    {/* {favourites} */}
                                    
                                    <div className={styles.theFavsCards}>
                                        {favourites.length > 0 && 
                                        favourites.map((favs) => 
                                        <div key={favs.id} className={styles.theFavCard}>
                                            <div className={styles.favsTitle}>{favs.title}</div>
                                            <div className={styles.favsdate}>{favs.date}</div>

                                            <div className={styles.favsTextarea}>{favs.textarea}</div>
                                            
                                            <div className={styles.togglers}>
                                                <span onClick={() => state.displayupdateform(favs.id)}>
                                                    <BsPencilSquare className={styles.update} />  
                                                </span>

                                                <span onClick={() => state.favouriteHandler(favs.id)}>
                                                    <BsFillTrashFill/>
                                                </span>
                                            </div>


                                        </div>
                                        )
                                        }
                                    </div>
                                
                                
                                    <div className={styles.notesbtn}>
                                        <button onClick={state.gotoNotes}>Go to Notes</button>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        )
                        }}

                    </Consumer>
                }
            </>
            
        )
    
    }
        


export default Favourites