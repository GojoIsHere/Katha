const Cod = () => {
  return (
    <>
      <div className="wrapper">
        <h2 className="payment-title-cod">Cash On delivery</h2>
        <div className="form-container-cod">
          <form className="form1">
            <label>Phone Number:</label>
            <input className="ph-box" type="text" placeholder="9854736327" />
            <label>Remarks:</label>
            <input className="ph-box" type="text" />
          </form>
        </div>
        <div className="payment-btn">
          <button>Proceed Payment</button>
        </div>
      </div>
    </>
  );
};

export default Cod;
