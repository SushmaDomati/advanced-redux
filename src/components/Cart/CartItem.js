import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { actionUpdateCart,actionRemovefromCart } from '../../reducers/cartreducer';

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
  const dispatch = useDispatch();

  function updateCart(){
    dispatch(actionUpdateCart({title:title, price:price}));
  }
  function removefromCart(){
    dispatch(actionRemovefromCart({title:title, price:price}));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removefromCart}>-</button>
          <button onClick={updateCart}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
