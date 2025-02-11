import React from "react";

const Checkout = ({ cartItems }) => {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;