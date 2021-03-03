import React from "react";

function sharpScales() {
    const allSharpsArray=["input1", "input2", "input3", "input4", "input5", "input6", "input7", "input8", "input12", "input13", "input14", "input15", "input16", "input17", "input18", "input19", "input23", "input24", "input25", "input26", "input27", "input28", "input29", "input30", "input34", "input35", "input36", "input37", "input38", "input39", "input40", "input41", "input45", "input46", "input47", "input48", "input49", "input50", "input51", "input52", "input56", "input57", "input58", "input59", "input60", "input61", "input62", "input63", "input67", "input68", "input69", "input70", "input71", "input72", "input73", "input74"];

    return (
         <div className="sscales">
            <div className="row">Sharp Scales</div>
            <div className="sharpScales">
            { allSharpsArray.filter((id, i) => i < 8).map(id => (
                    <input type="text" id={id} disabled/>
                ))}
            </div>
            <div className="sharpScales">
            { allSharpsArray.filter((id, i) => i > 7 && i < 16).map(id => (
                    <input type="text" id={id} disabled/>
                ))}
            </div>
            <div className="sharpScales">
            { allSharpsArray.filter((id, i) => i > 15 && i < 24).map(id => (
                    <input type="text" id={id} disabled/>
                ))}
            </div>
            <div className="sharpScales">
            { allSharpsArray.filter((id, i) => i > 23 && i < 32).map(id => (
                    <input type="text" id={id} disabled/>
                ))}
            </div>
            <div className="sharpScales">
            { allSharpsArray.filter((id, i) => i > 31 && i < 40).map(id => (
                    <input type="text" id={id} disabled/>
                ))}
            </div>
            <div className="sharpScales">
            { allSharpsArray.filter((id, i) => i > 39 && i < 48).map(id => (
                    <input type="text" id={id} disabled/>
                ))}
            </div>
            <div className="sharpScales">
            { allSharpsArray.filter((id, i) => i > 47 && i < 56).map(id => (
                    <input type="text" id={id} disabled/>
                ))}
            </div>
        </div>

    )
}

export default sharpScales;
