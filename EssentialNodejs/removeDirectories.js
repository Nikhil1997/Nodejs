const fs = require("fs");

fs.readdirSync("./storageFiles").forEach((fileName) => {
    fs.unlinkSync(`./storageFiles/${fileName}`);
});

fs.rmdir("./storageFiles", (err) => {
    if(err)
        throw err;

    console.log("./storageFiles Directory removed");
});