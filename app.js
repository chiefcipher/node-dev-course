const fs = require('fs')
const chalk = require('chalk') 
const yargs = require('yargs') 
const notes = require('./notes.js') 



//customize yargs version
yargs.version('1.1.0')  

//Create add command 
yargs.command ( { 
    command : 'add' , 
    describe : 'Add a new note' ,
    builder : { 
        title : { 
            describe : "Note title" , 
            demandOption : true,
            type : 'string' 
        } , 
        body : { 
            describe : "Note body" , 
            demandOption: true , 
            type : 'string'
        }
    },
    handler(argv) { 
    notes.addNotes(argv.title , argv.body)
}
})


//create remove command 
yargs.command ( {
    command : "remove" , 
    describe : "Removes note" , 
    builder : {
        title : {
            describe : "title of note to remove" , 
            demandOption : true , 
            type :'string'
        }
    },
        handler(argv){ 
            notes.removeNotes(argv.title)
    }
})


//create a list command 
yargs.command ( { 
    command : "list" , 
    describe : "lists the notes" , 
    handler(){ 
        notes.listNotes()
    }
})


yargs.command ( { 
    command : "read", 
    describe: "Reads the note" , 
    builder : { 
        title : { 
            demandOption : true , 
            describe : 'title of note to read' , 
            type : 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
}
)

yargs.parse()

//ADD , remove, read, list 



// let command = process.argv[2]


// if ( command === "add") { 
//     console.log('Adding Note!')
// }
// else if (command ==="remove") { 
//     console.log('Removing note ')
// }




// let msg = notes(); 
// console.log(msg)

// let log = (a)=>{ 
//     console.log(a); 
// } 


// log(chalk.blue.inverse.bold("Started Work"))



//VALIDATOR 
// const validator = require('validator') ; 
// console.log(validator.isEmail('samuelyakubu737'))
// console.log(validator.isURL('https://mead.io'))
// console.log(validator.isMobilePhone('+2349075859285'))



// const add = require('./utils.js')
// const sum = add(4,-3) ; 
// console.log(sum) 