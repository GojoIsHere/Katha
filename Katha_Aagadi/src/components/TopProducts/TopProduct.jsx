// import { useEffect, useState } from "react";
// import Card from "../Card/Card";
// import "./topProduct.css";
// import axios from "axios";
// const TopProduct = () => {
//   const [topProducts, setTopProducts] = useState([]);
//   useEffect(() => {
//     axios.get("http://localhost:3001/api/products/BEER").then((response) => {
//       setTopProducts([...response.data]);
//     });
//   }, []);

//   return (
//     <div className="topProduct-container">
//       <div className="stock-product">
//         <img src="images/topProduct-logo.png" className="brand-logo" alt="" />
//       </div>
//       <div className="top-products">
//         {topProducts.map((items) => {
//           return (
//             <Card
//               key={items.skus}
//               name={items.name}
//               price={items.price}
//               image={items.img}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };
// export default TopProduct;
