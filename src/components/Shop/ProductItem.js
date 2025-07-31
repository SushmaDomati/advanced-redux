import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { actionUpdateCart } from '../../reducers/cartreducer';

const ProductItem = (props) => {
  const { title, price, description } = props;
  const dispatch = useDispatch();

  function updateCart(){
    dispatch(actionUpdateCart({title:title, price:price}));
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
          <button onClick={updateCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
