const express = require('express')
const bodyParser = require('body-parser');

const User = require('./models/users');
const Contact = require('./models/contact');
const userCtrl = require('./ctrl/userCtrl')
const app = express()
const port = 3000

app.use(bodyParser.json());

app.use(express.json());
User.sync({force:false});
Contact.sync({force:false});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/add',userCtrl.addUser);
app.get('/users',userCtrl.getUser);
app.delete('/deleteUser/:empId',userCtrl.deleteUser);
app.put('/updateUser/:empId/:updatedId',userCtrl.updateUser);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})