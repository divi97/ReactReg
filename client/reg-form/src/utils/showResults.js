import axios from 'axios'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function showResults(values) {
  await sleep(500);
  console.log(values)
  axios.post("http://localhost:1234/emp/register", values)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })

    window.location = '/';
  //window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
});
