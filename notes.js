const fs = require('fs');
const chalk = require('chalk')

// removing a note from the database
const removeNote = (title) =>
{
    notes = loadNotes();
    newNotes = notes.filter((note)=>{
        return note.title !== title
    })
    if(newNotes.length !== notes.length)
    {
        console.log(newNotes)
        saveNote(newNotes)
        console.log(chalk.inverse.green("note is remove perfectly"));
    }
    else{
        console.log(chalk.inverse.red("note not Found"));
    }
}
// read command
const ReadNotes = ()=>{
    buffer = fs.readFileSync('data.json');
    notes = JSON.parse(buffer.toString());
    console.log(notes);
    return notes;
}

// adding a note in old database
const addNote = (title,body) =>{

    const notes = loadNotes();
    duplicate = notes.filter((note)=>{
        return note.title === title;
    })
    debugger
    if(duplicate.length === 0)
    {
        notes.push({
            title:title,
            body:body
        })
        saveNote(notes);
        console.log(chalk.inverse.green("Sucess!! Note is saved in file sucessfully"));
    }
    else{
        console.log(chalk.inverse.red("Error: note is already Existed"));
    }
}

// saving in the database
const saveNote=(note)=>{
    fs.writeFileSync('data.json',JSON.stringify(note));
}

// loading the data from the database
const loadNotes = () =>
{
    try
    {
        const BufferData= fs.readFileSync('data.json');
        const jsonData = BufferData.toString();
        return JSON.parse(jsonData); 
    }
    catch(e){
        return [];
    }
}
const findNote=(title)=>{
    
    bufferData = fs.readFileSync('data.json');
    notes = JSON.parse(bufferData.toString());
    condition = true;
    notes.filter((note)=>{
        if(note.title === title){
            console.log(chalk.bold.blue("Title: ")+" : "+note.body);
            condition = false;
        }
    })
    if(condition){
        console.log(chalk.bold.red("Note Not Found"));
    }
}

module.exports = {
    addNote:addNote,
    removeNote:removeNote,
    ReadNotes:ReadNotes,
    findNote:findNote
}