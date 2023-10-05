import React from 'react'
import styles from './background.module.css'
import Dashboard from '../dashboard';
import Maps from '../maps';
const Background = ({data,dataHandler,setProducts}) => {
  return (
    <div className={styles.background}>
      <div className={styles.control}>

        <Dashboard dataHandler={dataHandler} data={data} setProducts={setProducts}/>
        <Maps/>
      </div>
    </div>
  )
}

export default Background;