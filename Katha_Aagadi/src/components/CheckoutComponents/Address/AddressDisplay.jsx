import "../Payment/PaymentMenu.css";

const AddressDisplay = (value) => {
  return (
    <>
      <div className="address-box">
        <div className="district">
          <span>District : {value.value.district}</span>
        </div>
        <div className="city">
          <span>City : {value.value.city}</span>
        </div>
        <div className="landmark">
          <span>LandMark : {value.value.Landmark}</span>
        </div>
        <div className="addform-btn">
          <button>Edit</button>
        </div>
      </div>
    </>
  );
};

export default AddressDisplay;
