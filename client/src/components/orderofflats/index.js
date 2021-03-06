import React from "react";

function orderofFlats() {
    const orderFlatsArray=[88, 99, 110, 121, 132, 143, 154];

    return(
<div>
<div className="row OFTitle">The Order of Flats</div>
<div className="orderFlats">
    <input type="text" id="input88" disabled/>
    <input type="text" id="input99" disabled/>
    <input type="text" id="input110" disabled/>
    <input type="text" id="input121" disabled/>
    <input type="text" id="input132" disabled/>
    <input type="text" id="input143" disabled/>
    <input type="text" id="input154" disabled/>
</div>
</div>

)}

export default orderofFlats;