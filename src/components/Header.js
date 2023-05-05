import { useSelector , useDispatch} from 'react-redux';
import classes from './Header.module.css';
import { authActions } from '../Store/Store';
const Header = () => {
  const login=useSelector((state)=>state.auth.login)
  const dispatch=useDispatch()
  function authHandler() {
    dispatch(authActions.logoutHandler())
  }
  return (
    <>
    {login&&<header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={authHandler}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>}
    </>
  );
};

export default Header;
