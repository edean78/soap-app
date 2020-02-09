import React from "react";
import './Item.css';
import '../App.js';


function Item(props) {
  // const addToCart = props => {
  //   setCart(prevCart => [...prevCart, props])
  //   console.log("item-id", props.id)
  //   console.log("item-price", props.price);
  //   //summarizeCart(cart)
  // };
  // console.log("itemprops", {props})


  return(
    <div className="Item card">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
            <li>
              <strong>Price:</strong> {props.price}.00
            </li>
            <button
              className="Item-addToCart"
              onClick={() => props.addToCart(props.item)}>Add to Cart
            </button>
          </ul>
        </div>
  </div>
  )};

export default Item;
