import {React, useState} from 'react';
import { Grid, Container } from '@material-ui/core';
import Keyboard from "../keyboard";
import TopAppBar from "../appbar/appbar.js";
import Flatscales from "../flatscales/index.js";
import Sharpscales from "../sharpscales/index.js";
import OrderofFlats from "../orderofflats/index.js";
import OrderofSharps from "../orderofsharps/index.js";
import Circle from "../circle/index.js";
// import Modal from "../modal/index.js";

const Dashboard = props => {
  const [sharpArray, setsharpArray] = useState([]);
  const [flatArray, setflatArray] = useState([]);
  const [isSharp, updateSharp] = useState(false);
  const [isFlat, updateFlat] = useState(false);
  const [currF, setflatIndex] = useState(0);
  const [currS, setsharpIndex] = useState(0);


const notes = [{midi:48, note: "C", altAlt: "B#"}, {midi:49, note: "C#", alt: "Db"}, {midi:50, note: "D"}, {midi:51, note: "D#", alt: "Eb"}, {midi:52, note: "E", altAlt: "Fb"}, {midi:53, note: "F", altAlt: "E#"}, {midi:54, note: "F#", alt: "Gb"}, {midi:55, note: "G"}, {midi:56, note: "G#", alt: "Ab"}, {midi:57, note: "A"}, {midi:58, note: "A#", alt: "Bb"}, {midi:59, note: "B", altAlt: "Cb"}, {midi:60, note: "C", altAlt: "B#"}, {midi:61, note: "C#", alt: "Db"}, {midi:62, note: "D"}, {midi:63, note: "D#", alt: "Eb"}, {midi:64, note: "E", altAlt: "Fb"}, {midi:65, note: "F", altAlt: "E#"}, {midi:66, note: "F#", alt: "Gb"}, {midi:67, note: "G"}, {midi:68, note: "G#", alt: "Ab"}, {midi:69, note: "A"}, {midi:70, note: "A#", alt: "Bb"}, {midi:71, note: "B", altAlt: "Cb"}]
  const onPlayNote = (midiNum) => {
    // console.log(midiNum);
    const noteObj = notes.find(note => note.midi === midiNum)
    console.log(noteObj.note)

    const inputField = document.getElementsByClassName("sharpScales")[0].firstChild
    inputField.focus()
    inputField.value= noteObj.note
    console.log(inputField)
  }
    return (
    <div>
      <TopAppBar/>
      <Container >
      <Grid container>
      <Grid item xs= {3}>
        </Grid>
      <Grid item xs= {6}>
        <Keyboard onPlayNoteInput = {onPlayNote}
      />
        </Grid>
        <Grid item xs= {3}>
        </Grid>
        <Grid item xs= {3}>
        <Flatscales
        flatArray={flatArray} />
        </Grid>
        <Grid item xs= {6}>
        <Circle />
        </Grid>
        <Grid item xs= {3}>
        <Sharpscales 
        sharpArray={sharpArray}/>
        </Grid>
        <Grid item xs= {3}>
        <OrderofFlats />
        </Grid>
        <Grid item xs= {6}>
        </Grid>
        <Grid item xs= {3}>
        <OrderofSharps />
        </Grid>
      </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;


