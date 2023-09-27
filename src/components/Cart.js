import React, {useState} from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Cart({items, dispatch}){
const [visibleCart, setVisibleCart] = useState(false);

const showCart = () => {
setVisibleCart(!visibleCart)
}

let sum = 0
  items.map((item) => (
          sum += item.price * item.quantity
      ))

  const deleteItem = (id) => {
 dispatch({type: "DELETE_TASK", payload: {id}})
  }


  return (
    <div className="cart-component">
      <div className="cart-box">
     <AiOutlineShoppingCart className="cart-icon" onClick={showCart}>
      </AiOutlineShoppingCart>
      </div>
     {visibleCart ?
     <ul className="list">
     {items.map((item) => (
        <li className="list-item" key={item.id}>
          <img src={item.img} alt="pic" className="list-pic"/>
          <h3>{item.item} - ${item.price} <break className="quantity">Quantity: {item.quantity} </break> </h3>
          <button onClick={() => deleteItem(item.id)}>Remove</button>
        </li>
      ))}
      <h3>Total: ${sum}</h3>
      </ul> : null}
    </div>
  )
}
