const fs = require("fs");

const writeStream = fs.createWriteStream("./assets/myFile.txt", "UTF-8");
const readStream = fs.createReadStream("./assets/Readme.md", "UTF-8");


// writeStream.write("Hello");
// writeStream.write(" Nikhil\n");

// process.stdin.on("data", (data) => {
//     writeStream.write(data);
// })

// readStream.on("data", (data) => {
//     writeStream.write(data);
// })

// process.stdin.pipe(writeStream);

readStream.pipe(writeStream);