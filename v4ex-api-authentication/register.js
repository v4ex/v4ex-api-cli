const { program } = require('commander')

const { authentication } = require('v4ex-api-authentication')

program.command('register')
       .argument('<username>', 'user to login')
       .argument('[password]', 'password for user, if required', 'no password given')
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
