import React, {useReducer, createContext} from 'react'
import Cart from './components/Cart.js'
import Item from './components/Item.js'

export default function CartContext(){

const CartContext = createContext();

const INITIAL_STATE = {
  items:[]
}

function reducer(state, action){
  switch(action.type){
    case 'ADD_ITEM':

    const newItem = {
            item: action.payload.item ,
            price: action.payload.price,
            id: Date.now(),
            quantity: 1,
            img: action.payload.img
            }

    // let itemExists = false

  const updatedItems = state.items.map((item) => {
    if (item.item === action.payload.item) {
      return {
        ...item,
        quantity: item.quantity + 1,
      };
    }
    return item;
  });

  const itemExists = updatedItems.some((item) => item.item === action.payload.item);

  return {
    items: itemExists ? updatedItems : [...updatedItems, newItem],
  };

      //  for (const item of state.items){
      //    if (item.item === action.payload.item) {
      //     item.quantity = item.quantity + 1;
      //     itemExists = true
      //   };
      // }
    //     if(!itemExists){
    //         const newItem = {
    //         item: action.payload.item ,
    //         price: action.payload.price,
    //         id: Date.now(),
    //         quantity: 1,
    //         img: action.payload.img
    //         }
    //   return {
    //       items: [...state.items, newItem]
    //   }
    // }
    //   else {
    //     return state
    //   }
      case 'DELETE_TASK': {
    return {
        items: state.items.filter((item) => item.id !== action.payload.id)
    }
   }
   default: alert('Something strange happened. Please try again.')
   return state
  }

}
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  console.log(state)
  return(
    <CartContext.Provider value ={{state, dispatch}} >
      {/* <Cart items={state.items} dispatch={dispatch}/> */}
      <div className="body">
        <div>
      <Item dispatch={dispatch}/>
      </div>
      <Cart items={state.items} dispatch={dispatch}/>
      </div>
    </CartContext.Provider>
  )
}
