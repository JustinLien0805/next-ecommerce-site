import React from "react";

const Cart = () => {
  return (
    <div className="grid grid-flow-col m-4 gap-4 text-lg border-2 p-2 rounded-lg">
      {/* <div className="row-span-2 border-2 border-white rounded-lg">img</div> */}
      <div className="col-span-2">
        <h2 className="text-lg">Rolex</h2>
        <h2>$9000 * 1</h2>
      </div>
      <div className="col-span-1 flex items-end justify-end">
        <h2>$9000</h2>
      </div>
    </div>
  );
};

export default Cart;
