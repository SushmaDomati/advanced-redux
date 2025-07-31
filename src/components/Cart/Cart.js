import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = () => {
  const shoppingitems = useSelector((state) => state.cart.shoppingItems);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {shoppingitems.map((item, index) => (
          <CartItem
            key={index}
            item={{
              title: item.title,
              quantity: item.qty,
              total: item.qtyprice,
              price: item.unitprice
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;