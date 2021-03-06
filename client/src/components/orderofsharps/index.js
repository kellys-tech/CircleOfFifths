import React from "react";

function orderofSharps() {
  const orderSharpsArray=[11, 22, 33, 44, 55, 66, 77];
  
  return (
    <div>
    <div className="row OSTitle">The Order of Sharps</div>
    <div className="orderSharps">
        <input type="text" id="input11" disabled/>
        <input type="text" id="input22" disabled/>
        <input type="text" id="input33" disabled/>
        <input type="text" id="input44" disabled/>
        <input type="text" id="input55" disabled/>
        <input type="text" id="input66" disabled/>
        <input type="text" id="input77" disabled/>
    </div>
</div>

)}

export default orderofSharps;