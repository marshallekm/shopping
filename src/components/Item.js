import React from 'react'
import data from './data.js'

export default function Item({state, dispatch}){
const itemsData = data


const addItem = (item, price, id, img, quantity) => {
dispatch({type:"ADD_ITEM", payload: {item, price, id, img, quantity}})
}

  return(
    <div className="item">
    {itemsData.map((thing) =>(
    <div key={thing.id}>
      <h1>{thing.item}</h1>
      <h2>${thing.price}</h2>
      <img src= {thing.img} alt={thing.item} className="image-pic"/>
      <button onClick = {() => addItem(thing.item, thing.price, thing.id, thing.img)}>Add to cart</button>
    </div>))}
  </div>
  )
}
