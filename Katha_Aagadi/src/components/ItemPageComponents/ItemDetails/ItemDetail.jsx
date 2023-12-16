import "./ItemDetail.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemDetail } from "../../../services/products/products";
import { useDispatch, useSelector } from "react-redux";
import { addItemsToCart } from "../../../reducers/cartReducer";
import { useNavigate } from "react-router-dom";

const ItemDetail = () => {
  const { skus } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const loggedUser = useSelector((state) => state.loggedUser);
  useEffect(() => {
    getItemDetail(skus)
      .then((res) => {
        setProduct({ ...res });
      })
      .catch((error) => console.log(error));
  }, [skus]);
  const add = () => {
    if (count > product.quantity - 1) alert("Out of Stuck");
    else {
      setCount(count + 1);
      // setCost(cost + product.price);
    }
  };
  const addToCart = () => {
    if (loggedUser.length) {
      dispatch(
        addItemsToCart({
          name: product.name,
          price: product.price,
          skus: product.sku,
          quantity: count,
        })
      );
      navigate("/cart");
    } else {
      navigate("/login");
    }
  };
  const sub = () => {
    if (count < 2) alert("Have to have atleast 1 itme");
    else {
      setCount(count - 1);
      // setCost(cost - product.price);
    }
  };

  return (
    <div className="main-container">
      <div className="item-container">
        <div className="item-detail">
          <div className="item-picture">
            <img src={"/" + product.img} alt="" />
          </div>
          <div className="item-description">
            <span>{product.name}</span>
            <ul className="detail-list">
              <li>Price: Rs.{product.price}</li>
              <li>Stock: {product.quantity} units</li>
              <li>Alcohol:{product.alcohol}%</li>
            </ul>
            <p className="description">{product.feature}</p>
          </div>
        </div>

        <div className="cart-details">
          <h4 className="price">Rs: {product.price * count}</h4>
          <div className="edit-cart">
            <button className="cart-btn" onClick={add}>
              + |
            </button>
            <span className="item-count">{count}</span>
            <button className="cart-btn" onClick={sub}>
              | -
            </button>
          </div>
          <div className="add-cart-btn">
            <button onClick={addToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;
