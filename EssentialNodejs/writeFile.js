const fs = require("fs");

const md = `
# This is a new File

Hi , I am Nikhil
I like to watch Cricket and Football

*fs.readdir
*fs.readFile
*fs.readWrite

` ;

fs.writeFile("./assets/Nikhil.md", md.trim(), (err) => {
    if(err)
        throw err;

    console.log("File Saved");
})