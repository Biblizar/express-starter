const app = require('./app');

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on ${app.get('port')}`);
});
