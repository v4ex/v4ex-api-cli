const { program } = require('commander')

const { authentication } = require('v4ex-api-authentication')

program.command('login')
       .argument('<username>', 'username to login')
       .argument('<password>', 'password paired with the username')
       .action((username, password) => {
         console.log('username:', username);
         console.log('password:', password);
         authentication.login(username, password, function(err, tokenDoc) {
           if (err) {
             console.log(err)
           }
          
           console.log(tokenDoc)
         })
       })
