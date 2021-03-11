const cp = require("child_process");

// cp.exec("open http://www.google.com");

// cp.exec("ls", (err, data, stderr) => {
//     if(err)
//         throw err;

//     console.log(data);
//     // console.log(stderr);
// });

cp.exec("node readStream", (err, data, stderr) => {
    console.log(data);
})