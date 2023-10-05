import React from "react";
import Dateitem from "../dateitem";
import styles from "./shoppingList.module.css";
import { Close } from "../../icons";
const ShoppingList = ({ data,setProducts }) => {
  const deleteByIndex = (index) => {
    setProducts((oldValues) => {
      return oldValues.filter((_, i) => i !== index);
    });
  };
  return (
    <div>
      <div className={styles.background}>
        {data.map((item,i)=>(
          <>
          
        <div key={item.id} className={styles.control}>
          <div className={styles.control1}>
            <div className={styles.control2}>
              <Dateitem number={item.mount}/>
              <h2>{item.title}</h2>
            </div>
            <div onClick={()=>deleteByIndex(i)} className={styles.control3}>
              <Close />
            </div>
          </div>
          <hr />
        </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default ShoppingList;
