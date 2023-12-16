import { useEffect, useState } from "react";
import CardContainer from "../Card/CardContainer";
import { getCategoryList } from "../../services/products/products";

export default function ItemPanel() {
  const [categories, setCategoryList] = useState([]);
  useEffect(() => {
    getCategoryList()
      .then((data) => setCategoryList([...data]))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {categories.map((category) => (
        <CardContainer key={category} category={category} />
      ))}
    </>
  );
}
