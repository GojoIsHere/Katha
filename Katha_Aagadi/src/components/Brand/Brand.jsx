import { useEffect, useState } from "react";
import "./brand.css";
import axios from "axios";

const Brand = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3002/brands/").then((response) => {
      setImages(response.data);
    });
  }, []);
  return (
    <div className="brand-container">
      <div className="stock-product">
        <img src="images/stockProduct-logo.png" className="brand-logo" alt="" />
        <p className="stockProduct">Brands</p>
      </div>
      <div className="brands">
        {images.map((item) => {
          return (
            <>
              <img src={item.image} alt="" />
            </>
          );
        })}
      </div>
    </div>
  );
};
export default Brand;
