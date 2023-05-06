import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import {useSelector} from 'react-redux'
const Cart = (props) => {
  const cartOpen = useSelector((state) => state.cartReducer.cartOpen);
  const items = useSelector((state) => state.cartReducer.items);
  return (
    <>
      {cartOpen && (
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>
            {items.map((item)=>{
              return (<>
              {item.quantity>0&&<CartItem
              product={{ title: item.title, quantity: item.quantity, total: item.quantity*item.price, price: item.price }}
              />}
              </>)
            })}
          </ul>
        </Card>
      )}
    </>
  );
};

export default Cart;
