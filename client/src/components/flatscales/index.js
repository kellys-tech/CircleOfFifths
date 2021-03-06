import React from "react";

function flatScales(props) {
    const allFlatsArray= props.ids

    return (
        <div className="fscales">
            <div className="row">Flat Scales</div>
            <div className="flatScales">
                { allFlatsArray.filter((id, i) => i < 8).map(id => (
                    <input className={props.currentInput === id ? "active" : ""} onClick={props.setInput} type="text" id={`input${id}`} disabled/>
                ))}
            </div>
            <div className="flatScales">
            { allFlatsArray.filter((id, i) => i > 7 && i < 16).map(id => (
                    <input className={props.currentInput === id ? "active" : ""} onClick={props.setInput} type="text" id={`input${id}`} disabled/>
                ))}
            </div>
            <div className="flatScales">
            { allFlatsArray.filter((id, i) => i > 15 && i < 24).map(id => (
                    <input className={props.currentInput === id ? "active" : ""} onClick={props.setInput} type="text" id={`input${id}`} disabled/>
                ))}
            </div>
            <div className="flatScales">
            { allFlatsArray.filter((id, i) => i > 23 && i < 32).map(id => (
                    <input className={props.currentInput === id ? "active" : ""} onClick={props.setInput} type="text" id={`input${id}`} disabled/>
                ))}
            </div>
            <div className="flatScales">
            { allFlatsArray.filter((id, i) => i > 31 && i < 40).map(id => (
                    <input className={props.currentInput === id ? "active" : ""} onClick={props.setInput} type="text" id={`input${id}`} disabled/>
                ))}
            </div>
            <div className="flatScales">
            { allFlatsArray.filter((id, i) => i > 39 && i < 48).map(id => (
                    <input className={props.currentInput === id ? "active" : ""} onClick={props.setInput} type="text" id={`input${id}`} disabled/>
                ))}
            </div>
            <div className="flatScales">
            { allFlatsArray.filter((id, i) => i > 47).map(id => (
                    <input className={props.currentInput === id ? "active" : ""} onClick={props.setInput} type="text" id={`input${id}`} disabled/>
                ))}
            </div>
        </div>

    )
}

export default flatScales;
