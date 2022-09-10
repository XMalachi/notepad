import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'
import styles from './Layout.module.css'

const Layout = (props) => {
  return (
    <div>
        <div className={styles.layout}>
                <Header />
                <Sidebar />
                <div className={styles.main}>
                  {props.children}
                </div>
            
        </div>
    </div>
  )
}

export default Layout