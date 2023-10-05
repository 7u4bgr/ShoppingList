import React, { useState } from "react";
import styles from './shoppingList.module.css'
const Shoppingitem = ({dataHandler}) => {
  const [title,setTitle]=useState(null);
  const [amount,setAmount]=useState(0);

  const titleHandler=(e)=>{
    setTitle(e.target.value)
  }
  const amountHandler=(e)=>{
    setAmount(e.target.value)
  }
  const submitHandler=()=>{
    const rndInt = Math.floor(Math.random() * 100) + 1
    const data={
      id:rndInt,
      title: title,
      mount: amount
    }
    dataHandler(data);
  }
  return (
    <div>
      <div className={styles.flex}>
        <h2>Shopping List</h2>
      </div>
      <div className={styles.inputs}>
          <input onChange={(e)=>{titleHandler(e)}} className={styles.input1} placeholder="Title..." type="text" />
          <input onChange={(e)=>{amountHandler(e)}} className={styles.input2} placeholder="14" type="number" />
          <button onClick={submitHandler}>Add</button>
      </div>
    </div>
  );
};

export default Shoppingitem;
