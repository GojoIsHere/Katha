import React from 'react'
import "./product.css";

const AddProduct = () => {
  return (
    <div className="form-box">
      <form className="form-container" action="">
        <label>
          Product Name:
          <input type="text" className="form-input" name="name" />
        </label>
        <label>
          Name:
          <input type="text" className="form-input" name="name" />
        </label>
        <label>
          CateGoryID:
          <input type="text" className="form-input" name="name" />
        </label>
        <label>
          Product Brand:
          <input type="text" className="form-input" name="name" />
        </label>
        <label>
          Manufacturer:
          <input type="text" className="form-input" name="name" />
        </label>
        <label>
          Price:
          <input type="text" className="form-input" name="name" />
        </label>
        <label>
          Quantity:
          <input type="text" className="form-input" name="name" />
        </label>
        <label>
          Product Description
          <textarea className="form-input" name="" />
        </label>
      </form>
    </div>
  );
}

export default AddProduct
