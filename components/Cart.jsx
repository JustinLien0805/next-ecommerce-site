import React from "react";

const Cart = () => {
  return (
    <div className="grid grid-flow-col mx-4 gap-4">
      <div className="row-span-2 border-2 border-white rounded-lg">img</div>
      <div className="col-span-2">
        <h2 className="text-lg">Rolex</h2>
        <h2>$9000 * 1</h2>
        <h2 className="">total: $9000</h2>
      </div>
    </div>
  );
};

export default Cart;
