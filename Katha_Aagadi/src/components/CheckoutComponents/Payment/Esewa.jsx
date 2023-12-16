import "./paymentMenu.css";

const Esewa = () => {
  const handleSubmit = () => {
    console.log("submit button clicked");
  };
  return (
    <>
      <div className="wrapper">
        <h2 className="payment-title-esewa">Esewa Payment</h2>
        <div className="form-container-esewa">
          <form className="form1">
            <label>Esewa ID:</label>
            <input className="ph-box" type="text" placeholder="9854736327" />
            <label>Remarks:</label>
            <input className="ph-box" type="text" />
          </form>
        </div>
        <div className="payment-btn">
          <button onClick={handleSubmit}>Proceed Payment</button>
        </div>
      </div>
    </>
  );
};

export default Esewa;
