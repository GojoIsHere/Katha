const Khalti = () => {
  return (
    <>
      <div className="wrapper">
        <h2 className="payment-title-khalti">Khalti Payment</h2>
        <div className="form-container-khalti">
          <form className="form1">
            <label>Khalti ID:</label>
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

export default Khalti;
