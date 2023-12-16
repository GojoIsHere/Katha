import AddressDisplay from "./AddressDisplay";
import AddressForm from "./AddressForm";
import AddAddress from "./AddAddress";
import "../Payment/PaymentMenu.css";

const AdressWrapper = () => {
  const addressList = [
    { district: "Chitwan", city: "Bharatpur", Landmark: "near Campus" },
  ];
  return (
    <div className="address-wrapper">
      {addressList.map((value) => (
        <AddressDisplay key={value.Landmark} value={value} />
      ))}
      <AddressForm />
      <AddAddress />
    </div>
  );
};

export default AdressWrapper;
