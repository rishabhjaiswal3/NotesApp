const yargs = require('yargs');
const notes = require('./notes')

yargs.version('1.1.0')

yargs.command({
    command:'add',
    describe:'Adding a new note',
    builder: {
        title: {
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'body of add',
            demandOption:true,
            type:'string' 
            }
    },
    handler: argv => notes.addNote(argv.title,argv.body)
})
yargs.command({
    command:'remove',
    describe:'removing a note',
    builder:{
        title:{
            describe:'title should be taken',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=> notes.removeNote(argv.title)
})

yargs.command({
    command:'read',
    describe:'Reading the data',
    handler:() => {
        notes.ReadNotes()
    }
})
yargs.command({
    command:'find',
    describe:'finding a note',
    builder:{
        title:{
            demandOption:true,
            describe:'enter the note to find',
            type:'string'
        }
    },
    handler:(argv)=>{
        notes.findNote(argv.title);
    }
})



// yargs.command({
//     command:'read',
//     describe:'Reading a note',
//     handler :()=>{
//         console.log("Reading a note");
//     }
// })
// yargs.command({
//     command:'list',
//     describe:'Lists the note',
//     handler:()=>{
//         console.log("Lists the notes");
//     }
// })


yargs.parse()