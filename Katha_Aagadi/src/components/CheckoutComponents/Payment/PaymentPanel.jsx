import PaymentMenu from "./PaymentMenu";
import PaymentMethod from "./PaymentMethod";

export default function PaymentPanel() {
  return (
    <>
      <PaymentMenu />
      
      <div className="payment-wrapper">
        <PaymentMethod />
      </div>
    </>
  );
}
