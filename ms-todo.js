const axios = require('axios')
const token = 'EwCAA8l6Bxxxx'
const config = {
  headers: { Authorization: `Bearer ${token}` }
};

// @quick notes
const taskId = 'AQMkAxxxxx'
// Quotes
// const taskId = 'AQMkADAwxxxx'
const baseURL = 'https://graph.microsoft.com/beta/me/todo/lists/' + taskId + '/tasks'
const flomoUrl = 'https://flomoapp.com/iwh/MTE2NjQx/bc7626c507bee11eae0091a2eca3b5f1/'


const getTasks = async (url) => {
  try {
    return await axios.get(
      url,
      config
    )
  } catch (error) {
    console.error(error)
  }
}

const getAllTasks = async () => {
  const ret = await getTasks(baseURL);
  console.log(typeof (ret.data));
  ret.data.value.forEach((entry) => {
    console.log(entry.title);
    axios.post(flomoUrl, {
      'content': entry.title
    })
  });

  nextUrl = ret.data['@odata.nextLink']
  // console.log(nextUrl)
  while (nextUrl != undefined) {
    res = await getTasks(nextUrl)
    res.data.value.forEach((entry) => {
      console.log(entry.title);
      axios.post(flomoUrl, {
        'content': entry.title
      })
    });

    nextUrl = res.data['@odata.nextLink']
    // console.log(nextUrl)
  }
}

getAllTasks()