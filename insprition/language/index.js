const franc = require('franc');
const langs = require('langs');
let input = process.argv[2];

let nigas = franc(input);
let maniggas = langs.where("3", nigas);
try {
    console.log(maniggas.name);
} catch (e) {
    console.log("word was not found");
}