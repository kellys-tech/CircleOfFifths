import React from "react";

function flatScales(props) {
    const allFlatsArray=["input78", "input79", "input80, input81", "input82", "input83", "input84", "input85", "input89", "input90", "input91", "input92", "input93", "input94", "input95", "input96", "input100", "input101", "input102", "input103", "input104", "input105", "input106", "input107", "input111", "input112", "input113", "input114", "input115", "input116", "input117", "input118", "input122", "input123", "input124", "input125", "input126", "input127", "input128", "input129", "input133", "input134", "input135", "input136", "input137", "input138", "input139", "input140", "input144", "input145", "input146", "input147", "input148", "input149", "input150", "input151"];

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
