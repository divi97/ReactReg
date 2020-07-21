import axios from 'axios'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function showResults(values) {
  await sleep(500); // simulate server latency
  console.log(values)
  const obj = JSON.stringify(values)
  console.log(obj)
  axios.post("http://localhost:1234/emp/register", obj)
  .then(response => {
    console.log(response)
  })
  .catch(error => {
    console.log(error)
  })


  //window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
});
