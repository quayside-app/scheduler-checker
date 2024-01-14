// exports.monthlyCheck = (req, res) => {
//     console.log("Cloud Scheduler triggered this function.");
//     res.status(200).send("Function executed successfully!");
//   };
  

const express = require('express');
const app = express();
const port = 3000;

// add route to make it easier to find the success message:
app.get('/', (req, res) => {
  res.send('Welcome to the root of the Express server!');
});


app.get('/monthlyCheck', (req, res) => {
  console.log("Cloud Scheduler triggered this function.");
  res.status(200).send("Function executed successfully!");
  console.log("http://localhost:3000/monthlyCheck");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
