const fs = require("fs");

//read files asynchronously
fs.readdir("./assets", (err, files) => {

    if(err)
        throw err;

    console.log("complete");
    console.log(files);
})

console.log("started reading files");
