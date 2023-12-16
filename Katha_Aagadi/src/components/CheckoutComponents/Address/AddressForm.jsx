//import "../paymentMenu.css";
import "../Payment/PaymentMenu.css";
const AddressForm = () => {
  return (
    <div className="addressForm-wrapper">
      <form className="address-form">
        <div className="input1">
          <label>District:</label>
          <input type="text" />
        </div>
        <div className="input1">
          <label>City:</label>
          <input type="text" />
        </div>
        <div className="input1">
          <label>Landmark:</label>
          <input type="text" />
        </div>
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddressForm;
