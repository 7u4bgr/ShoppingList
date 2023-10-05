import React from 'react'
import styles from './dateitem.module.css'
const Dateitem = ({number}) => {
  return (
    <div>
        <div className={styles.background}>
          <h1>{number}</h1>
        </div>
    </div>
  )
}

export default Dateitem;