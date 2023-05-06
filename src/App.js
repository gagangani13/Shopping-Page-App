import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector,useDispatch} from 'react-redux'
import Notification from './components/UI/Notification';
import {cartAction, sendCartDataThunk } from './components/Store/cartSlice';
let initialRun=true;
function App() {
  const cart=useSelector((state)=>state.cartReducer.items)
  const notify=useSelector((state)=>state.cartReducer.notification)
  const dispatch=useDispatch()
  useEffect(()=>{
      if (initialRun) {
        initialRun=false
        return;
      }
      dispatch(sendCartDataThunk(cart))
  },[cart,dispatch])
  if (initialRun) {
    async function loadFromFirebase() {
      const response=await fetch(`https://shopping-page-app-4a7ac-default-rtdb.firebaseio.com/Cart.json`)
      const data= await response.json()
      try {
        if(response.ok){
          dispatch(cartAction.updateItem(data))
        }else{
          throw new Error()
        }
      } catch (error) {
        console.log('No data')
      }
    }
    loadFromFirebase()
  }
  return (
    <>
    {notify&&<Notification title={notify.title} status={notify.status} message={notify.message} />}
    <Layout>
      <Cart />
      <Products />
    </Layout>
    </>
  );
}

export default App;
