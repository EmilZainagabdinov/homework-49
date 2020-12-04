const figlet = require('figlet');

figlet.text(process.argv[2], (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});