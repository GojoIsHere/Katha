import "./cart.css";
import { useSelector } from "react-redux";
import CartTableRow from "./CartTableRow";

const CartItem = () => {
  let cartItems = useSelector((state) => state.cart);
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th> Item </th>
            <th> Price </th>
            <th> Quantity </th>
            <th> Subtotal </th>
            <th> Remove </th>
          </tr>
        </thead>
        <tbody>
          {!cartItems.length ? (
            <tr>
              <td colSpan={5} style={{ textAlign: "center", color: "red" }}>
                No items in cart
              </td>
            </tr>
          ) : (
            <>
              {cartItems.map((item) => (
                <CartTableRow
                  key={item.skus}
                  name={item.name}
                  quantity={item.quantity}
                  price={item.price}
                  skus={item.skus}
                />
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CartItem;
