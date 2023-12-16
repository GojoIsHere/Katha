import React from 'react';
import "./dashboard.css"

const Menu = () => {
    const menuItem=["DashBoard","Product","Customer","Order","Comments","SignOut"]
  return (
    <>
      <div className="sidebox">
        <div className="menu">
          {menuItem.map((item) => {
            return (
              <>
                <a href="">{item}</a>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Menu;
