/* eslint-disable react/prop-types */
import { useState } from "react";
import { removeCartItem, editItemsToCart } from "../../reducers/cartReducer";
import { useDispatch } from "react-redux";

export default function CartTableRow({ name, quantity, price, skus }) {
  const [qty, setQty] = useState(quantity);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeCartItem(skus));
  };
  const handleChange = (qty) => {
    dispatch(editItemsToCart({ skus, quantity: qty, name, price }));
  };
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <div className="qty">
          <button
            onClick={() => {
              setQty(qty + 1);
              handleChange(qty + 1);
            }}
          >
            +
          </button>
          {qty}
          <button
            onClick={() => {
              setQty(qty + 1);
              handleChange(qty + 1);
            }}
          >
            -
          </button>
        </div>
      </td>
      <td> {qty * price} </td>
      <td>
        <div className="remove-button">
          <button onClick={handleDelete}>
            <img src="./images/remove.png" alt="" />
          </button>
        </div>
      </td>
    </tr>
  );
}
