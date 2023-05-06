import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector,useDispatch} from 'react-redux'
import Notification from './components/UI/Notification';
import { loadCartThunk, sendCartDataThunk } from './components/Store/cartSlice';
let initialRun=true;
function App() {
  const cart=useSelector((state)=>state.cartReducer.items)
  const notify=useSelector((state)=>state.cartReducer.notification)
  const dispatch=useDispatch()
  useEffect(()=>{
      if (initialRun) {
        initialRun=false
        dispatch(loadCartThunk())
        return;
      }
      dispatch(sendCartDataThunk(cart))
  },[cart,dispatch])

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
