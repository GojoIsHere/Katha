import "./paymentMenu.css";
import { useNavigate } from "react-router-dom";

const PaymentMenu = () => {
  const navigate = useNavigate();
  const goToCart = () => {
    navigate("/cart");
  };
  return (
    <>
      <div className="payment-menu">
        <img
          className="back-button"
          src="images/back-to-cart.png"
          alt="buttton"
          onClick={goToCart}
        />
        <div className="total">
          <span>Total:Rs.{window.sessionStorage.getItem("cartTotal")}</span>
        </div>
      </div>
    </>
  );
};

export default PaymentMenu;
