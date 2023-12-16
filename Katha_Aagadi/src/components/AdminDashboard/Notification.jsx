import React from "react";
import "./dashboard.css"

const Notification = () => {
  let product = [
    {
      name: "beer",
      quantity: 3,
    },
    {
      name: "rum",
      quantity: 3,
    },
    {
      name: "whisky",
      quantity: 3,
    },
  ];
    return (
      <>
        <span className="notification-heading">Notification</span>
        <div className="notification">
          {product.map((item) => {
            if (item.quantity < 5) {
              return (
                <>
                  <div className="notification-box">
                    <span className="message">{`${item.name} is bocomming out of stock very soon`}</span>
                  </div>
                </>
              );
            }
          })}
        </div>
      </>
    );
};

export default Notification;
