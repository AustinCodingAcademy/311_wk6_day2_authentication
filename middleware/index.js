const jwt = require('jsonwebtoken')

const logger = (req, res, next) => {
  console.log('Logging route:' ,'/users', new Date().toISOString())
  next()
}

const authenticate = (req, res, next) => {
  let header = req.headers['authorization']
  console.log(header)
  
  header = header.split(' ')
  console.log(header)

  let token = header[1]

  console.log(token)

  jwt.verify(token, 'secret', function(err, decoded){
    if(err){
      console.log('Invalid Token')
    }else{
      req.user = decoded
      console.log('success')
    }
    console.log(decoded)
  })
  next()

// try{
//   let authHeader = req.headers['authorization']
//   //console.log(authHeader)
//   const [bearer, token] = authHeader.split(' ')
//   console.log(token)
//   const decoded = jwt.verify(token, 'seceret')
//     if (!decoded) {
//       throw new Error('Invalid Token')
//     }
//   req.user = decoded
//   next()
// } catch(error) {
//   res.sendStatus(401)
// }

}

module.exports = {
  logger,
  authenticate
}