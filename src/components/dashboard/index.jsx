import React from 'react'
import Shoppingitem from '../shoppingitem';
import ShoppingList from '../shoppingList';
import styles from './dashboard.module.css'

const Dashboard = ({data,dataHandler,setProducts}) => {
  return (
    <div>
            <div className={styles.background1}>
              
              <Shoppingitem dataHandler={dataHandler} />
              <ShoppingList data={data} setProducts={setProducts}/>

            </div>
    </div>
  )
}

export default Dashboard;