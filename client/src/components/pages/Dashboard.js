import {React, useState} from 'react';
import { Grid, Container } from '@material-ui/core';
import Keyboard from "../keyboard";
import TopAppBar from "../appbar/appbar.js";
import Flatscales from "../flatscales/index.js";
import Sharpscales from "../sharpscales/index.js";
import OrderofFlats from "../orderofflats/index.js";
import OrderofSharps from "../orderofsharps/index.js";
import Circle from "../circle/index.js";
import NoteDialog from "../dialog/index.js";

const Dashboard = props => {
  // const [sharpArray, setsharpArray] = useState([]);
  // const [flatArray, setflatArray] = useState([]);
  // const [isSharp, updateSharp] = useState(false);
  // const [isFlat, updateFlat] = useState(false);
  // const [currF, setflatIndex] = useState(0);
  // const [currS, setsharpIndex] = useState(0);
  const [currentInput, setCurrentInput] = useState(1);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [choices, setChoices] = useState([]);

  const allSharpsArray=[1, 2, 3, 4, 5, 6, 7, 8, 12, 13, 14, 15, 16, 17, 18, 19, 23, 24, 25, 26, 27, 28, 29, 30, 34, 35, 36, 37, 38, 39, 40, 41, 45, 46, 47, 48, 49, 50, 51, 52, 56, 57, 58, 59, 60, 61, 62, 63, 67, 68, 69, 70, 71, 72, 73, 74];

  const allFlatsArray=[78, 79, 80, 81, 82, 83, 84, 85, 89, 90, 91, 92, 93, 94, 95, 96, 100, 101, 102, 103, 104, 105, 106, 107, 111, 112, 113, 114, 115, 116, 117, 118, 122, 123, 124, 125, 126, 127, 128, 129, 133, 134, 135, 136, 137, 138, 139, 140, 144, 145, 146, 147, 148, 149, 150, 151];

  // const allIDs=[].concat(allSharpsArray,allFlatsArray).sort()
  // console.log(allIDs)

const notes = [{midi:48, note: "C", altAlt: "B#"}, {midi:49, note: "C#", alt: "Db"}, {midi:50, note: "D"}, {midi:51, note: "D#", alt: "Eb"}, {midi:52, note: "E", altAlt: "Fb"}, {midi:53, note: "F", altAlt: "E#"}, {midi:54, note: "F#", alt: "Gb"}, {midi:55, note: "G"}, {midi:56, note: "G#", alt: "Ab"}, {midi:57, note: "A"}, {midi:58, note: "A#", alt: "Bb"}, {midi:59, note: "B", altAlt: "Cb"}, {midi:60, note: "C", altAlt: "B#"}, {midi:61, note: "C#", alt: "Db"}, {midi:62, note: "D"}, {midi:63, note: "D#", alt: "Eb"}, {midi:64, note: "E", altAlt: "Fb"}, {midi:65, note: "F", altAlt: "E#"}, {midi:66, note: "F#", alt: "Gb"}, {midi:67, note: "G"}, {midi:68, note: "G#", alt: "Ab"}, {midi:69, note: "A"}, {midi:70, note: "A#", alt: "Bb"}, {midi:71, note: "B", altAlt: "Cb"}]
  const onPlayNote = (midiNum) => {
    // console.log(midiNum);
    const noteObj = notes.find(note => note.midi === midiNum)
    console.log(noteObj.note)
   if (noteObj.alt) {
     setChoices ([noteObj.note, noteObj.alt])
    setDialogOpen (true)
   }
   else
   setNote (noteObj.note)
  }

  const setNote = (note) => {
    setDialogOpen(false)
    const inputField = document.querySelector(`#input${currentInput}`)
    inputField.focus()
    inputField.value=note
    console.log(inputField)
    setCurrentInput(currentInput+1)
    // checkDone()
  }

  // const checkDone = () => {
  //   const inputs = document.querySelectorAll('.flatScales input, .sharpScales input')
  //   const empty=Array.from(inputs).filter(input => !input.value)
  //   console.log(empty)
  //   if (empty.length === !alert ('You are finished!'));
  // }
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
        ids={allFlatsArray} />
        <OrderofFlats />
        </Grid>
        <Grid item xs= {6}>
        <Circle />
        </Grid>
        <Grid item xs= {3}>
        <Sharpscales 
        ids={allSharpsArray}/>
        <OrderofSharps />
        </Grid>
      </Grid>
      </Container>
      <NoteDialog open={dialogOpen} choices={choices} onClose={setNote}/>
    </div>
  );
};

export default Dashboard;
