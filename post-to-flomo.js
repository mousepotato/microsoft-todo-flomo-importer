const fetch = require('node-fetch')
const fs = require('fs');

fs.readFileSync('test.txt', 'utf-8').split(/\r?\n/).forEach(function (line) {
    console.log(line)
    let item = "<p>" + line + "</p>"
    const content = { "title": null, "content": cccc, "file_ids": [], "parent_memo_slug": null, "source": "web" }
    console.log(content)

    // You can find this using Chrome-->Inspect-->Network--> Copy as fetch
    fetch('https://flomoapp.com/api/memo/', {
        method: 'PUT',
        headers: {
            "accept": "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh-TW;q=0.7,zh;q=0.6",
            "content-type": "application/json;charset=UTF-8",
            "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest",
            "x-xsrf-token": "xxx",
            "cookie": "xxx"
        },
        referrer: "https://flomoapp.com/mine?",
        referrerPolicy: "strict-origin-when-cross-origin",
        mode: "cors",
        body: JSON.stringify(content),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});
