const cp = require("child_process");

const questionApp = cp.spawn("node", ["questions.js"]);

questionApp.stdout.on("data", (data) => {
    console.log(`From the Question App ${data}`);
})

questionApp.on("close", () => {
    console.log(`Question App Exited`);
})