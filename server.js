const app = require('./app')


app.listen(app.get('port'), () => {
  console.log('Listening on ' + app.get('port'))
})
