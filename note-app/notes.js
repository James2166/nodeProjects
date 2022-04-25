const fs = require('fs')
const chalk = require('chalk')

const addNotes = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)



    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        savedNotes(notes)
        console.log(chalk.inverse.green('New note added!'))
    } else {
        console.log(chalk.inverse.red('Note title taken!'))
    }
}

const removeNotes = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    if(notesToKeep.length < notes.length) {
        console.log(chalk.inverse.green('Note removed!'))
        savedNotes(notesToKeep)
    }else {
        console.log(chalk.inverse.red('No note found!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your notes!'))

    notes.forEach((note) => console.log(note.title))
}

const readNotes = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if(note) {
        console.log(chalk.underline.bold(note.title))

        console.log(note.body)
    }else {
        console.log(chalk.inverse.red('Note not found!'))
    }
}

const savedNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}