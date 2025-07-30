import classes from "./CartButton.module.css";

import { useDispatch } from "react-redux";
import { actionButtonClick } from "../../reducers/shoppingreducer";
const CartButton = (props) => {
  const dispatch = useDispatch();

  const mycartclick = () => {
    dispatch(actionButtonClick());
  };

  return (
    <button className={classes.button} onClick={mycartclick}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
