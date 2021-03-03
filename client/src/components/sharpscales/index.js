import React from "react";

function sharpScales(props) {
    const allSharpsArray= props.ids

    return (
         <div className="sscales">
            <div className="row">Sharp Scales</div>
            <div className="sharpScales">
            { allSharpsArray.filter((id, i) => i < 8).map(id => (
                    <input type="text" id={`input${id}`} disabled/>
                ))}
            </div>
            <div className="sharpScales">
            { allSharpsArray.filter((id, i) => i > 7 && i < 16).map(id => (
                    <input type="text" id={`input${id}`} disabled/>
                ))}
            </div>
            <div className="sharpScales">
            { allSharpsArray.filter((id, i) => i > 15 && i < 24).map(id => (
                    <input type="text" id={`input${id}`} disabled/>
                ))}
            </div>
            <div className="sharpScales">
            { allSharpsArray.filter((id, i) => i > 23 && i < 32).map(id => (
                    <input type="text" id={`input${id}`} disabled/>
                ))}
            </div>
            <div className="sharpScales">
            { allSharpsArray.filter((id, i) => i > 31 && i < 40).map(id => (
                    <input type="text" id={`input${id}`} disabled/>
                ))}
            </div>
            <div className="sharpScales">
            { allSharpsArray.filter((id, i) => i > 39 && i < 48).map(id => (
                    <input type="text" id={`input${id}`} disabled/>
                ))}
            </div>
            <div className="sharpScales">
            { allSharpsArray.filter((id, i) => i > 47 && i < 56).map(id => (
                    <input type="text" id={`input${id}`} disabled/>
                ))}
            </div>
        </div>

    )
}

export default sharpScales;
