var fs = require('fs')

var rstream = fs.createReadStream('testando.tt')
var wstream = fs.createWriteStream('novoTXT.txt')
rstream.pipe(wstream)



