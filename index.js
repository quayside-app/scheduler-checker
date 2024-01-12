exports.monthlyCheck = (req, res) => {
    console.log("Cloud Scheduler triggered this function.");
    res.status(200).send("Function executed successfully!");
  };
  