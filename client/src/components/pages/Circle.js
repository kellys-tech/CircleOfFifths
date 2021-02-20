import React, { useContext } from 'react';
// import { Store } from '../../store';
// import { Link } from 'react-router-dom';
// for submit button when implemented
// import Button from '@material-ui/core/Button';

const CirclePage = () => {

return (
<div>
<h1>The Circle of Fifths</h1>
    {/* <div className="container-fluid"> */}
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
        <div className="row">
            <div className= "col-3"></div>
            <div className="col-6 keyboardCol">
                {/* <img src="./assets/keyboardImage.png" alt="" id="keyboardImage"> */}
                <div className="keyboardContainer">
                    <div className="whiteKeys">
                        <button className="pianoKeys white" id="one" data-pitch="C" data-alt="B#"></button>
                        <button className="pianoKeys white" id="two" data-pitch="D"></button>
                        <button className="pianoKeys white" id="three" data-pitch="E" data-alt="Fb"></button>
                        <button className="pianoKeys white" id="four" data-pitch="F" data-alt="E#"></button>
                        <button className="pianoKeys white" id="five" data-pitch="G"></button>
                        <button className="pianoKeys white" id="six" data-pitch="A"></button>
                        <button className="pianoKeys white" id="seven" data-pitch="B" data-alt="Cb"></button>
                        <button className="pianoKeys white" id="eight" data-pitch="C" data-alt="B#"></button>
                        <button className="pianoKeys white" id="nine" data-pitch="D"></button>
                        <button className="pianoKeys white" id="ten" data-pitch="E" data-alt="Fb"></button>
                        <button className="pianoKeys white" id="eleven" data-pitch="F" data-alt="E#"></button>
                        <button className="pianoKeys white" id="twelve" data-pitch="G"></button>
                        <button className="pianoKeys white" id="thirteen" data-pitch="A"></button>
                        <button className="pianoKeys white" id="fourteen" data-pitch="B" data-alt="Cb"></button>
                    </div>
                    <div className="blackKeys">
                        <button className="pianoKeys black" id="fifteen" data-pitch="C#" data-alt="Db"></button>
                        <button className="pianoKeys black" id="sixteen" data-pitch="D#" data-alt="Eb"></button>
                        <button className="pianoKeys black" id="seventeen" data-pitch="F#" data-alt="Gb"></button>
                        <button className="pianoKeys black" id="eighteen" data-pitch="G#" data-alt="Ab"></button>
                        <button className="pianoKeys black" id="nineteen" data-pitch="A#" data-alt="Bb"></button>
                        <button className="pianoKeys black" id="twenty" data-pitch="C#" data-alt="Db"></button>
                        <button className="pianoKeys black" id="twentyOne" data-pitch="D#" data-alt="Eb"></button>
                        <button className="pianoKeys black" id="twentyTwo" data-pitch="F#" data-alt="Gb"></button>
                        <button className="pianoKeys black" id="twentyThree" data-pitch="G#" data-alt="Ab"></button>
                        <button className="pianoKeys black" id="twentyFour" data-pitch="A#" data-alt="Bb"></button>
                    </div>             
                </div>
            </div>
            <div className= "col-3"></div>
        </div>
        <div className="row">
            <div className="col-4 fsTitle">Flat Scales</div>
            <div className="col-4 keyOC">C D E F G A B C </div>
            <div className="col-4 ssTitle">Sharp Scales</div>
        </div>
        <div className="row">
            <div className="col-4">
                <div className="flatScales">
                    <input type="text" id="fsd1">
                    <input type="text" id="fsd2">
                    <input type="text" id="fsd3">
                    <input type="text" id="fsd4">
                    <input type="text" id="fsd5">
                    <input type="text" id="fsd6">
                    <input type="text" id="fsd7">
                    <input type="text" id="fsd8">
                </div>
                <div className="flatScales">
                    <input type="text" id="fsd1">
                    <input type="text" id="fsd2">
                    <input type="text" id="fsd3">
                    <input type="text" id="fsd4">
                    <input type="text" id="fsd5">
                    <input type="text" id="fsd6">
                    <input type="text" id="fsd7">
                    <input type="text" id="fsd8">
                </div>
                <div className="flatScales">
                    <input type="text" id="fsd1">
                    <input type="text" id="fsd2">
                    <input type="text" id="fsd3">
                    <input type="text" id="fsd4">
                    <input type="text" id="fsd5">
                    <input type="text" id="fsd6">
                    <input type="text" id="fsd7">
                    <input type="text" id="fsd8">
                </div>
                <div className="flatScales">
                    <input type="text" id="fsd1">
                    <input type="text" id="fsd2">
                    <input type="text" id="fsd3">
                    <input type="text" id="fsd4">
                    <input type="text" id="fsd5">
                    <input type="text" id="fsd6">
                    <input type="text" id="fsd7">
                    <input type="text" id="fsd8">
                </div>
                <div className="flatScales">
                    <input type="text" id="fsd1">
                    <input type="text" id="fsd2">
                    <input type="text" id="fsd3">
                    <input type="text" id="fsd4">
                    <input type="text" id="fsd5">
                    <input type="text" id="fsd6">
                    <input type="text" id="fsd7">
                    <input type="text" id="fsd8">
                </div>
                <div className="flatScales">
                    <input type="text" id="fsd1">
                    <input type="text" id="fsd2">
                    <input type="text" id="fsd3">
                    <input type="text" id="fsd4">
                    <input type="text" id="fsd5">
                    <input type="text" id="fsd6">
                    <input type="text" id="fsd7">
                    <input type="text" id="fsd8">
                </div>
                <div className="flatScales">
                    <input type="text" id="fsd1">
                    <input type="text" id="fsd2">
                    <input type="text" id="fsd3">
                    <input type="text" id="fsd4">
                    <input type="text" id="fsd5">
                    <input type="text" id="fsd6">
                    <input type="text" id="fsd7">
                    <input type="text" id="fsd8">
                </div>
            </div>
            <div className="col-4">
                <img src="./assets/circleImage1.png" alt="" id="circleImage">
            </div>
            <div className="col-4">
                <div className="sharpScales">
                    <input type="text" id="ssd1">
                    <input type="text" id="ssd2">
                    <input type="text" id="ssd3">
                    <input type="text" id="ssd4">
                    <input type="text" id="ssd5">
                    <input type="text" id="ssd6">
                    <input type="text" id="ssd7">
                    <input type="text" id="ssd8">
                </div>
                <div className="sharpScales">
                    <input type="text" id="ssd11">
                    <input type="text" id="ssd21">
                    <input type="text" id="ssd31">
                    <input type="text" id="ssd41">
                    <input type="text" id="ssd51">
                    <input type="text" id="ssd61">
                    <input type="text" id="ssd71">
                    <input type="text" id="ssd81">
                </div>
                <div className="sharpScales">
                    <input type="text" id="ssd12">
                    <input type="text" id="ssd22">
                    <input type="text" id="ssd32">
                    <input type="text" id="ssd42">
                    <input type="text" id="ssd52">
                    <input type="text" id="ssd62">
                    <input type="text" id="ssd72">
                    <input type="text" id="ssd82">
                </div>
                <div className="sharpScales">
                    <input type="text" id="ssd13">
                    <input type="text" id="ssd23">
                    <input type="text" id="ssd33">
                    <input type="text" id="ssd43">
                    <input type="text" id="ssd53">
                    <input type="text" id="ssd63">
                    <input type="text" id="ssd73">
                    <input type="text" id="ssd83">
                </div>
                <div className="sharpScales">
                    <input type="text" id="ssd14">
                    <input type="text" id="ssd24">
                    <input type="text" id="ssd34">
                    <input type="text" id="ssd44">
                    <input type="text" id="ssd54">
                    <input type="text" id="ssd64">
                    <input type="text" id="ssd74">
                    <input type="text" id="ssd84">
                </div>
                <div className="sharpScales">
                    <input type="text" id="ssd15">
                    <input type="text" id="ssd25">
                    <input type="text" id="ssd35">
                    <input type="text" id="ssd45">
                    <input type="text" id="ssd55">
                    <input type="text" id="ssd65">
                    <input type="text" id="ssd75">
                    <input type="text" id="ssd85">
                </div>
                <div className="sharpScales">
                    <input type="text" id="ssd15">
                    <input type="text" id="ssd25">
                    <input type="text" id="ssd35">
                    <input type="text" id="ssd45">
                    <input type="text" id="ssd55">
                    <input type="text" id="ssd65">
                    <input type="text" id="ssd75">
                    <input type="text" id="ssd85">
                </div>
            </div>
        </div>
    {/* </div> */}
</div>

)};

export default CirclePage;