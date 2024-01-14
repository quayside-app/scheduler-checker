// // // This is what will be executed on the cloudfunction to test if the trigger code is working:
// // exports.monthlyCheck = (req, res) => {
// //     console.log("Cloud Scheduler triggered this function.");
// //     res.status(200).send("Function executed successfully!");
// //   };
  
// // // This next portion is for running in VScode to test the timer
// // If it is runnin properly, we should see an increment every trigger from the cloudfunction
// const express = require('express');
// const app = express();
// const port = 3000;

// // add route to make it easier to find the success message:
// app.get('/', (req, res) => {
//   res.send('Welcome to the root of the Express server!');
// });


// app.get('/monthlyCheck', (req, res) => {
//   console.log("Cloud Scheduler triggered this function.");
//   res.status(200).send("Function executed successfully!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
//   console.log("navigate to: http://localhost:3000/monthlyCheck");
// });

// let triggerCount = 0;

// app.get('/monthlyCheck', (req, res) => {
//   triggerCount++;
//   console.log(`Cloud Scheduler triggered this function. Count: ${triggerCount}`);
//   res.status(200).send(`Function executed successfully! Count: ${triggerCount}`);
// });

// New code-v

const express = require('express');
const app = express();
const port = 3000;

// Counter to keep track of the number of times the endpoint is triggered
let triggerCount = 0;

// Route for the root of the server
app.get('/', (req, res) => {
  res.send('Welcome to the root of the Express server!');
  res.send(`"Cloud Scheduler tri ggered this function. This URL has been triggered this many times:" ${triggerCount}`) // For some reason the text is not on the webpage...
});

// Route to mimic the Cloud Scheduler trigger with a count
app.get('/monthlyCheck', (req, res) => {
  triggerCount++;
  console.log(`Cloud Scheduler triggered this function. Count: ${triggerCount}`);
  res.status(200).send(`Function executed successfully! Count: ${triggerCount}`);
});

// Start the Express server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  console.log("Navigate to http://localhost:3000/monthly Check to trigger the function.");
});
