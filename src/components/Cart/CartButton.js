import { cartAction } from '../Store/cartSlice';
import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux'
const CartButton = () => {
  const dispatch=useDispatch()
  function setCartOpen() {
    dispatch(cartAction.setCartOpen())
  }
  const count=useSelector((state)=>state.cartReducer.items)
  const counter=count.reduce((acc,curr)=>{
    return acc+curr.quantity
  },0)
  return (
    <button className={classes.button} onClick={setCartOpen}>
      <span>My Cart</span>
      <span className={classes.badge}>{counter}</span>
    </button>
  );
};

export default CartButton;
