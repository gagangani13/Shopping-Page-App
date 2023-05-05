import { cartAction } from '../Store/cartSlice';
import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
const CartButton = () => {
  const dispatch=useDispatch()
  function setCartOpen() {
    dispatch(cartAction.setCartOpen())
    console.log('c')
  }
  return (
    <button className={classes.button} onClick={setCartOpen}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
