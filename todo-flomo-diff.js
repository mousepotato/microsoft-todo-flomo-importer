'use strict';
const fs = require('fs');

fs.readFileSync('ms-todo-notes-dedupl.txt', 'utf-8').split(/\r?\n/).forEach(function (line) {
    // console.log(line);
    fs.readFile('flomo.txt', 'utf-8', function (err, flomo) {
        if (err) throw err;
        if (flomo.includes(line)) {
            // console.log("found line in file " + line)
        } else {
            // console.log("not in flomo yet: " + line)
            var tmp = line.substr(0, 15)
            var tmp1 = line.substr(1, 16)
            var tmp2 = line.slice(-15)
            if (!flomo.includes(tmp) && !flomo.includes(tmp1) && !flomo.includes(tmp2)) {
                console.log("not in flomo yet: " + line)
                fs.writeFile('/Users/sli/playpen/flomo-data/import-to-flomo.txt', line + '\r\n', { flag: 'a+' }, err => {
                    if (err) {
                        console.error(err)
                        return
                    }
                })
            }
        }
    });
})