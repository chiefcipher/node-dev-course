const fs = require("fs");
const chalk = require("chalk")


const listNotes = () => { 
    const notes = loadNotes() ; 
    console.log(chalk.inverse.red("Your Notes"))
    notes.forEach( (item)=>{ 
        console.log(chalk.green("Title: " + item.title))
        console.log(chalk.blue("body: " + item.body))
    })
}

const addNotes = (title, body) => {
    const notes = loadNotes();
   
    const duplicateNote = notes.find(note => note.title === title)

    debugger 

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body,
        });

        saveNotes(notes);
        console.log(chalk.green.inverse("new note added!"));
    } else {
        console.log(chalk.red.inverse("note title taken!"));
    }
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
};
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

const removeNotes = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title)



    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep);
        console.log(chalk.green.inverse('Note removed!'))
    }
    else {
        console.log(chalk.red.inverse('No note found!'))

    }

};


const readNote = (title)=>{ 
    
    // try { 
    // const notes = loadNotes()
    // const note = notes.find((note)=> note.title === title ) ; 
    // console.log(chalk.green(note.title))
    // console.log(note.body)  //personal code
    // } 
    // catch (e) { 
    //     console.log(chalk.red('ERROR; could not find note youre looking for '))
    // } 

    const notes = loadNotes()
    const note = notes.find((note)=> note.title === title ) ; 

    if (note ) { 
        console.log(chalk.inverse(note.title))
        console.log(note.body) 

    }
    else { 
         console.log(chalk.red.inverse('note not found!'))
    }
}

module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes : listNotes ,
    readNote : readNote 
};
