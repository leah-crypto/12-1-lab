const bcryptjs = require('bcryptjs');
const users = []; //database


module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if(users[i].username === username){
          const existing = bcrypt.compareSync(username, users[i].pinHash);
          //if (users[i].username === username && users[i].password === password) {
            if(existing){
               // users[i].passsword.push(password);
            let hasToReturn = {...users[i]};
            delete hasToReturn.pinHash;
            console.log(users[i].password);
            res.status(200).send(userToReturn)
            }
        }
      }
       
        
       // }
        res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        console.log(req.body);
      //  users.push(req.body)
        const{username, password, email, firstName, lastName} = req.body;

        const salt = bcrypt.genSaltSync(5);
        const pinHash = bcrypt.hashSync(password, salt);

        console.log(pinHash);

        let userObj = {
          pinHash,
          username,
          email,
          firstName,
          lastName
        }

      
        users.push(userObj);
        let passToReturn = {...userObj}
        delete hasToReturn.pinHash;
      
      res.status(200).send(passToReturn);
        

    }
}