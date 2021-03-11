const fs = require("fs");

if(fs.existsSync("storageFiles")) {
    console.log("Already Exists");
}

else {
    fs.mkdir("storageFiles", (err) => {
        if(err)
            throw err;
    
        console.log("Directory Created");
    })
}
