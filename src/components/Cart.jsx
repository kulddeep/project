import { useSelector } from "react-redux";
import "../../index.css";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import {clearItem, removeItem} from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  // Calculate total amount
  const totalAmount = cartItems.reduce((total, item) => {
    return total + item.card.info.price / 100;
  }, 0);

  const dispatch = useDispatch();
  const handleRemoveItem = (item) => {
    //dispatch and action
    dispatch(removeItem(item));
  };
  const handleClearItem = () => {
    //dispatch and action
    dispatch(clearItem());
  };
  
  return (
    <div className="cart">
      <div className="res-menu">
        {/* Apply the same class */}
        <button className="clear-item " onClick={handleClearItem}>
                CLEAR ALL
              </button>
        <h1>Number of cart item is: {cartItems.length}</h1>
        {cartItems.map((item) => (
          <div className="res-menu-items" key={item.id}>
            <div className="item-detail">
              <h3>{item.card.info.name}</h3>
              <p>
                {"₹"}
                {item.card.info.price / 100}
              </p>
              <p>{item.card.info.description}</p>
            </div>
            <div className="item-image">
              <img
                alt="Image Not Found"
                src={CDN_URL + item.card.info.imageId}
              />
              <button className="remove-item" onClick={() => handleRemoveItem(item)}>
                REMOVE
              </button>
            </div>
          </div>
        ))}
        <h1>Total amount of your cart: ₹{totalAmount.toFixed(2)}</h1>
      </div>
    </div>
  );
};

export default Cart;
