import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../Store/Store";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter); //this contacts the configure store reducer
  const show = useSelector((state) => state.counter.showCounter);
  const login = useSelector((state) => state.auth.login);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); //argument is Payload
  };
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <>
      {login && (
        <main className={classes.counter}>
          <h1>Redux Counter</h1>
          {show && <div className={classes.value}>{counter}</div>}
          <button onClick={increaseHandler}>Increase by 5</button>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={decrementHandler}>Decrement</button>
          <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
      )}
    </>
  );
};

export default Counter;
