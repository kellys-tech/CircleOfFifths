import React from "react";

function flatScales(props) {
    const allFlatsArray=["input11", "input12", "input13", "input14", "input15", "input16", "input17", "input18", "input21", "input22", "input23", "input24", "input25", "input26", "input27", "input28", "input31", "input32", "input33", "input34", "input35", "input36", "input37", "input38", "input41", "input42", "input43", "input44", "input45", "input46", "input47", "input48", "input51", "input52", "input53", "input54", "input55", "input56", "input57", "input58", "input61", "input62", "input63", "input64", "input65", "input66", "input67", "input68", "input71", "input72", "input73", "input74", "input75", "input76", "input77", "input78"];

    return (
        <div className="fscales">
            <div className="row">Flat Scales</div>
            <div className="flatScales">
                { allFlatsArray.filter((id, i) => i < 8).map(id => (
                    <input type="text" id={id} disabled/>
                ))}
            </div>
            <div className="flatScales">
            { allFlatsArray.filter((id, i) => i > 8 && i <= 16).map(id => (
                    <input type="text" id={id} disabled/>
                ))}
            </div>
            <div className="flatScales">
            { allFlatsArray.filter((id, i) => i > 16 && i <= 24).map(id => (
                    <input type="text" id={id} disabled/>
                ))}
            </div>
            <div className="flatScales">
            { allFlatsArray.filter((id, i) => i > 24 && i <= 32).map(id => (
                    <input type="text" id={id} disabled/>
                ))}
            </div>
            <div className="flatScales">
            { allFlatsArray.filter((id, i) => i > 32 && i <= 40).map(id => (
                    <input type="text" id={id} disabled/>
                ))}
            </div>
            <div className="flatScales">
            { allFlatsArray.filter((id, i) => i > 40 && i <= 48).map(id => (
                    <input type="text" id={id} disabled/>
                ))}
            </div>
            <div className="flatScales">
            { allFlatsArray.filter((id, i) => i > 48 && i <= 56).map(id => (
                    <input type="text" id={id} disabled/>
                ))}
            </div>
        </div>

    )
}

export default flatScales;
