import "./slider.css";
// import { sliderComp } from "./sliderComp";
// import axios from "axios";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecommendedItems } from "../../services/products/products";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

const Slider = () => {
  // this is the data fecting section
  const { skus } = useParams();
  const [recommendedItems, setRecommendedItems] = useState([]);
  useEffect(() => {
    getRecommendedItems(skus)
      .then((res) => {
        setRecommendedItems([...res]);
      })
      .catch((error) => console.log(error));
  }, [skus]);

  // this is slider section

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 4 < recommendedItems.length ? prevIndex + 4 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 4 >= 0 ? prevIndex - 4 : recommendedItems.length - 4
    );
  };

  return (
    <>
      <div className="container">
        <div className="images">
          {recommendedItems.slice(currentIndex, currentIndex + 4).map((val) => (
            <Link key={val.sku} to={`/items/${val.sku}`}>
              <Card
                img={`/${val.img}`}
                name={val.name}
                price={val.price}
                className="slide"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="sbc">
        <button onClick={prevSlide} className="sb">
          Previous
        </button>
        <button onClick={nextSlide} className="sb">
          Next
        </button>
      </div>
    </>
  );
};
export default Slider;
