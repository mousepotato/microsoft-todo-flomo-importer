'use strict';

const fs = require('fs');

// https://flomoapp.com/api/memo/?offset=150

let rawdata = fs.readFileSync('xxx.json');
let flomoData = JSON.parse(rawdata);

for (const item of flomoData.memos) {
	let record = item.content.replace(/<[^>]+>/g, '').replace(/&quot;/g, '"').replace(/&ldquo;/g, '“').replace(/&rdquo;/g, '”').replace(/&mdash;/g, '—').replace(/&rsquo;/g, '\'').replace(/&lsquo;/g, '\'').replace(/&middot;/g, '·').replace(/&hellip;/g, '...').replace(/&bull;/g, '•')

	console.log(record)

	fs.writeFile('flomo.txt', record + '\r\n', { flag: 'a+' }, err => {
		if (err) {
			console.error(err)
			return
		}
	})
}

// console.log(flomoData.memos[0].content);