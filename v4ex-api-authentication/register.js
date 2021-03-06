const { program } = require('commander')

const { authentication } = require('v4ex-api-authentication')

program.command('register')
       .argument('<username>', 'username to login')
       .argument('[password]', '(optional) password paired with the username')
       .action((username, password) => {
         console.log('username:', username);
         console.log('password:', password);
         authentication.register(username, password, function(err, authenticationDoc) {
           if (err) {
             console.log(err)
           }
          
           console.log(authenticationDoc)
         })
       })
