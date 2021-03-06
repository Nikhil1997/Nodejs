// console.log(process.pid);
// console.log(process.versions.node);

// console.log(process.argv);

const grab = function (flag) {
    letIndexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[letIndexAfterFlag];
}

const greeting = grab("--greeting")
const user = grab("--user")

console.log(`${greeting} ${user}`)