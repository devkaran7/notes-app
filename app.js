const yargs = require('yargs');
const notes = require('./notes');

//create add command
yargs.command({
  command : 'add',
  describe : 'add a new note',
  builder : {
    title : {
      describe : 'Note title',
      demandOption : true,
      type : 'string'
    }, body : {
      describe : 'Note body',
      demandOption : true,
      type : 'string'
    }
  },
  handler(argv){
    notes.addNote(argv.title, argv.body);
  }
})

//create remove command
yargs.command({
  command : 'remove',
  describe : 'remove the note',
  builder : {
    title : {
      describe : 'title',
      demandOption : true,
      type : 'string'
    }
  },
  handler(argv){
    notes.removeNote(argv.title);
  }
})

//create list command
yargs.command({
  command : 'list',
  describe : 'listing all the notes',
  handler(){
    notes.listNotes();
  }
})

//create read command
yargs.command({
  command : 'read',
  describe : 'reading the note',
  builder : {
    title : {
      describe : 'title',
      demandOption : true,
      type : 'string'
    }
  },
  handler(argv){
    notes.readNotes(argv.title);
  }
})

yargs.parse();