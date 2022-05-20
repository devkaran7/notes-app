const fs = require('fs');

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find((note) => note.title === title);

  if(!duplicateNote){
    notes.push({
      title : title,
      body : body
    });
    saveNotes(notes);
    console.log("New Notes added");
  }else{
    console.log("Note title taken");
  }
  
}

const removeNote = (title) =>{
  const notes = loadNotes();
  const updatedNotes = notes.filter((note) => title !== note.title);

  saveNotes(updatedNotes);

  if(notes.length === updatedNotes.length){
    console.log("No note found!");
  }else{
    console.log("Removed successfully!");
  }
  
}

const listNotes = () => {
  const notes = loadNotes();
  notes.forEach((note) => console.log(note.title));
}

const readNotes = (title) => {
  const notes = loadNotes();
  const desiredBody = notes.find((note) => note.title === title);

  if(!desiredBody){
    console.log("No notes found under this title");
  }else{
    console.log(desiredBody.title);
    console.log(desiredBody.body);
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {

  try{
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch( e ){
    return [];
  }
  
}

module.exports = {
  addNote : addNote,
  removeNote: removeNote,
  listNotes : listNotes,
  readNotes : readNotes
}