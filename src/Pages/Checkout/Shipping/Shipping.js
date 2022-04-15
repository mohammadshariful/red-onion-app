import React from "react";
import "./Shipping.css";
const Shipping = () => {
  return (
    <div className="shipping-container">
      <h2>Edit Delivery Details</h2>
      <hr className="horizonal-line" />
      <form>
        <div className="from-group">
          <input type="text" placeholder="Deliver to door" required />
        </div>
        <div className="from-group">
          <input type="text" placeholder="107 Rd No 8" required />
        </div>
        <div className="from-group">
          <input type="text" placeholder="Flat,suite or floor" required />
        </div>
        <div className="from-group">
          <input type="text" placeholder="Business Name" required />
        </div>
        <div className="from-group">
          <input type="text" placeholder="Add delivery instructor" required />
        </div>
        <input className="submit-btn" type="submit" value="Save & Continue" />
      </form>
    </div>
  );
};

export default Shipping;
