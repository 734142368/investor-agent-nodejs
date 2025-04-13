const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World! This is the Node.js version of investor-agent project.');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});