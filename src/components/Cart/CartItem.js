import classes from "./CartItem.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartAction } from "../Store/cartSlice";
const CartItem = (props) => {
  const { title, quantity, total, price } = props.product;
  const products = useSelector((state) => state.cartReducer.items);
  const dispatch = useDispatch();
  function removeItem() {
    const newArray = products.map((item) => {
      if (item.title === title) {
        return {
          title: title,
          price: price,
          quantity: Number(item.quantity) - 1,
        };
      } else {
        return item;
      }
    });
    dispatch(cartAction.updateItem(newArray));
  }
  function addItem() {
    const newArray = products.map((item) => {
      if (item.title === title) {
        return {
          title: title,
          price: price,
          quantity: Number(item.quantity) + 1,
        };
      } else {
        return item;
      }
    });
    dispatch(cartAction.updateItem(newArray));
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItem}>-</button>
          <button onClick={addItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
