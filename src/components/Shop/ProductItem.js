
import { cartAction } from '../Store/cartSlice';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import {useSelector,useDispatch} from 'react-redux'
const ProductItem = (props) => {
  const { title, description,price } = props;
  const products=useSelector((state)=>state.cartReducer.items)
  const dispatch=useDispatch()
  function addToCart() {
    let newPush=true
    const newArray=products.map((item)=>{
      if(item.title===title){
        console.log(item)
        newPush=false
        return ({title:title,price:price,quantity:Number(item.quantity)+1,description:description})
      }else{
        return item
      }
    })
    console.log(newArray)
    if(newPush){
      dispatch(cartAction.addItems({title:title,price:price,quantity:1,description:description}))
    }
    !newPush&&dispatch(cartAction.updateItem(newArray))
  }
    
  
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
