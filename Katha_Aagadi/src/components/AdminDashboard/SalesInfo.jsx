import React from 'react';
import "./dashboard.css"

const SalesInfo = () => {
  return (
    <>
      <div className="container">
        <div className="view">
            <p>1508</p>
            <div className="p1">views</div>
        </div>
        <div className="view">
            <p>80</p>
            <div className="p1">sales</div>
        </div>
        <div className="view">
            <p>23</p>
            <div className="p1">Orders</div>
        </div>
        <div className="view">
            <p>RS100000</p>
            <div className="p1">Transaction Amounts</div>
        </div>
    </div>
    </>
  )
}

export default SalesInfo
