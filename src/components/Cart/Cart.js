import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const shoppingitems = useSelector((state) => state.cart.shoppingItems);
  // const title = useSelector((state) => state.cart.title);
  // const price = useSelector((state) => state.cart.unitprice);
  // const qty = useSelector((state) => state.cart.qty);
  // const qtyprice = useSelector((state) => state.cart.qtyprice);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{ title: {shoppingitems.title}, quantity: qty, total: qtyprice, price: price }}
        />
      </ul>
    </Card>
  );
};

export default Cart;
