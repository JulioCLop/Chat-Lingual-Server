const express = require('express');
const bodyparser = require('body-parser');
const cors  = require('cors')




const app = express();

app.use(bodyparser.json());
app.use(cors());





const database = {
    users:[
        {
            id: 1,
            firstName: 'saint',
            lastName: 'nick',
            clientSince:  new Date().toLocaleDateString(),
            email: 'saint@yahoo.com'
        },
        {
            id: 2,
            firstName: 'john',
            lastName: 'wick',
            clientSince:  new Date().toLocaleDateString(),
            email: 'john@yahoo.com'
        },
        {
            id: 3,
            firstName: 'adam',
            lastName: 'sandler',
            clientSince:  new Date().toLocaleDateString(),
            email: 'smith@yahoo.com'
        }
    ]
}

console.log(database.users);

app.get('/',(req,res)=>{
    res.send(database.users)
});

app.post('/new-file', (req,res) => {
const { name ,size } = req.body;

  database.users.push({
    id: 3,
    firstName: firstName,
    lastName: lastName,
    clientSince:  new Date().toLocaleDateString(),
    email: email
  });
    res.json(database.usersrs[database.users.length - 1])
});


app.listen(3000);

