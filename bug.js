const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // Missing error handling for cases where req.body is undefined or invalid
  db.createUser(user) // Assume db.createUser is an asynchronous function
    .then(() => res.status(201).send())
    .catch(err => {
      // Express's built-in error handling is insufficient
      console.error('Error creating user:', err); // Logs error but does not send a response
    });
});
app.listen(3000, () => console.log('Server listening on port 3000'));