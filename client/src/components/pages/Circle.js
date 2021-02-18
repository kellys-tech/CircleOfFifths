import React, { useContext } from 'react';
// import { Store } from '../../store';
// import { Link } from 'react-router-dom';

const CirclePage = () => {


return (
<div>
<h1>The Circle of Fifths</h1>
    <div class="container-fluid">
        <div class="row">
            <div class= "col-3"></div>
            <div class="col-6 keyboardCol">
                {/* <img src="./assets/keyboardImage.png" alt="" id="keyboardImage"> */}
                <div class="keyboardContainer">
                    <div class="whiteKeys">
                        <button class="pianoKeys white" id="one" data-pitch="C" data-alt="B#"></button>
                        <button class="pianoKeys white" id="two" data-pitch="D"></button>
                        <button class="pianoKeys white" id="three" data-pitch="E" data-alt="Fb"></button>
                        <button class="pianoKeys white" id="four" data-pitch="F" data-alt="E#"></button>
                        <button class="pianoKeys white" id="five" data-pitch="G"></button>
                        <button class="pianoKeys white" id="six" data-pitch="A"></button>
                        <button class="pianoKeys white" id="seven" data-pitch="B" data-alt="Cb"></button>
                        <button class="pianoKeys white" id="eight" data-pitch="C" data-alt="B#"></button>
                        <button class="pianoKeys white" id="nine" data-pitch="D"></button>
                        <button class="pianoKeys white" id="ten" data-pitch="E" data-alt="Fb"></button>
                        <button class="pianoKeys white" id="eleven" data-pitch="F" data-alt="E#"></button>
                        <button class="pianoKeys white" id="twelve" data-pitch="G"></button>
                        <button class="pianoKeys white" id="thirteen" data-pitch="A"></button>
                        <button class="pianoKeys white" id="fourteen" data-pitch="B" data-alt="Cb"></button>
                    </div>
                    <div class="blackKeys">
                        <button class="pianoKeys black" id="fifteen" data-pitch="C#" data-alt="Db"></button>
                        <button class="pianoKeys black" id="sixteen" data-pitch="D#" data-alt="Eb"></button>
                        <button class="pianoKeys black" id="seventeen" data-pitch="F#" data-alt="Gb"></button>
                        <button class="pianoKeys black" id="eighteen" data-pitch="G#" data-alt="Ab"></button>
                        <button class="pianoKeys black" id="nineteen" data-pitch="A#" data-alt="Bb"></button>
                        <button class="pianoKeys black" id="twenty" data-pitch="C#" data-alt="Db"></button>
                        <button class="pianoKeys black" id="twentyOne" data-pitch="D#" data-alt="Eb"></button>
                        <button class="pianoKeys black" id="twentyTwo" data-pitch="F#" data-alt="Gb"></button>
                        <button class="pianoKeys black" id="twentyThree" data-pitch="G#" data-alt="Ab"></button>
                        <button class="pianoKeys black" id="twentyFour" data-pitch="A#" data-alt="Bb"></button>
                    </div>             
                </div>
            </div>
            <div class= "col-3"></div>
        </div>
        <div class="row">
            <div class="col-4 fsTitle">Flat Scales</div>
            <div class="col-4 keyOC">C D E F G A B C </div>
            <div class="col-4 ssTitle">Sharp Scales</div>
        </div>
        <div class="row">
            <div class="col-4">
                <div class="flatScales">
                    <input type="text" id="fsd1">
                    <input type="text" id="fsd2">
                    <input type="text" id="fsd3">
                    <input type="text" id="fsd4">
                    <input type="text" id="fsd5">
                    <input type="text" id="fsd6">
                    <input type="text" id="fsd7">
                    <input type="text" id="fsd8">
                </div>
                <div class="flatScales">
                    <input type="text" id="fsd1">
                    <input type="text" id="fsd2">
                    <input type="text" id="fsd3">
                    <input type="text" id="fsd4">
                    <input type="text" id="fsd5">
                    <input type="text" id="fsd6">
                    <input type="text" id="fsd7">
                    <input type="text" id="fsd8">
                </div>
                <div class="flatScales">
                    <input type="text" id="fsd1">
                    <input type="text" id="fsd2">
                    <input type="text" id="fsd3">
                    <input type="text" id="fsd4">
                    <input type="text" id="fsd5">
                    <input type="text" id="fsd6">
                    <input type="text" id="fsd7">
                    <input type="text" id="fsd8">
                </div>
                <div class="flatScales">
                    <input type="text" id="fsd1">
                    <input type="text" id="fsd2">
                    <input type="text" id="fsd3">
                    <input type="text" id="fsd4">
                    <input type="text" id="fsd5">
                    <input type="text" id="fsd6">
                    <input type="text" id="fsd7">
                    <input type="text" id="fsd8">
                </div>
                <div class="flatScales">
                    <input type="text" id="fsd1">
                    <input type="text" id="fsd2">
                    <input type="text" id="fsd3">
                    <input type="text" id="fsd4">
                    <input type="text" id="fsd5">
                    <input type="text" id="fsd6">
                    <input type="text" id="fsd7">
                    <input type="text" id="fsd8">
                </div>
                <div class="flatScales">
                    <input type="text" id="fsd1">
                    <input type="text" id="fsd2">
                    <input type="text" id="fsd3">
                    <input type="text" id="fsd4">
                    <input type="text" id="fsd5">
                    <input type="text" id="fsd6">
                    <input type="text" id="fsd7">
                    <input type="text" id="fsd8">
                </div>
                <div class="flatScales">
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
            <div class="col-4">
                <img src="./assets/circleImage1.png" alt="" id="circleImage">
            </div>
            <div class="col-4">
                <div class="sharpScales">
                    <input type="text" id="ssd1">
                    <input type="text" id="ssd2">
                    <input type="text" id="ssd3">
                    <input type="text" id="ssd4">
                    <input type="text" id="ssd5">
                    <input type="text" id="ssd6">
                    <input type="text" id="ssd7">
                    <input type="text" id="ssd8">
                </div>
                <div class="sharpScales">
                    <input type="text" id="ssd11">
                    <input type="text" id="ssd21">
                    <input type="text" id="ssd31">
                    <input type="text" id="ssd41">
                    <input type="text" id="ssd51">
                    <input type="text" id="ssd61">
                    <input type="text" id="ssd71">
                    <input type="text" id="ssd81">
                </div>
                <div class="sharpScales">
                    <input type="text" id="ssd12">
                    <input type="text" id="ssd22">
                    <input type="text" id="ssd32">
                    <input type="text" id="ssd42">
                    <input type="text" id="ssd52">
                    <input type="text" id="ssd62">
                    <input type="text" id="ssd72">
                    <input type="text" id="ssd82">
                </div>
                <div class="sharpScales">
                    <input type="text" id="ssd13">
                    <input type="text" id="ssd23">
                    <input type="text" id="ssd33">
                    <input type="text" id="ssd43">
                    <input type="text" id="ssd53">
                    <input type="text" id="ssd63">
                    <input type="text" id="ssd73">
                    <input type="text" id="ssd83">
                </div>
                <div class="sharpScales">
                    <input type="text" id="ssd14">
                    <input type="text" id="ssd24">
                    <input type="text" id="ssd34">
                    <input type="text" id="ssd44">
                    <input type="text" id="ssd54">
                    <input type="text" id="ssd64">
                    <input type="text" id="ssd74">
                    <input type="text" id="ssd84">
                </div>
                <div class="sharpScales">
                    <input type="text" id="ssd15">
                    <input type="text" id="ssd25">
                    <input type="text" id="ssd35">
                    <input type="text" id="ssd45">
                    <input type="text" id="ssd55">
                    <input type="text" id="ssd65">
                    <input type="text" id="ssd75">
                    <input type="text" id="ssd85">
                </div>
                <div class="sharpScales">
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
    </div>
</div>

)};

export default CirclePage;