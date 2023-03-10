import React, { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);


  const btnClasses = `${classes.button} ${
    btnIsHighLighted ? classes.bump : ""
  }`;


  console.log(items);


  useEffect(() => {
    if (numberOfCartItems === 0) {
      return;
    }
    setBtnIsHighLighted(true);

    const timer = setTimeout(()=> {
      setBtnIsHighLighted(false)
    }, 100);

    return() => {
      clearTimeout(timer);
    }
  }, [numberOfCartItems]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
