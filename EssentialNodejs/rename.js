const fs = require("fs");

// File renamed
fs.renameSync("./assets/colors.json", "./assets/colorData.json");

// File moved to Different Location
fs.rename("./assets/Nikhil.md", "./storageFiles/Nikhil.md", (err) => {
    if(err)
        throw err
    
    console.log("File Changed");
});

// File Deleted after 4 sec
setTimeout(() => {
    fs.unlinkSync("./assets/alex.jpg")
}, 4000)