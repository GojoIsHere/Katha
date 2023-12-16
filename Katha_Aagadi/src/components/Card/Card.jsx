/* eslint-disable react/prop-types */
import "./CardContainer.css";

const Card = ({ img, name, price }) => {
  return (
    <div className="grid-items">
      <div className="div-img">
        <img src={img} alt="product_pic" />
      </div>
      <hr />
      <div className="padding-1">
        <ul className="detail-list-2">
          <li className="prodName">{name}</li>
          <li className="prodPrice">Rs {price}</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
