const app = require('./config/server');

require('./app/routes/tasks')(app);

// Starting the server 
app.listen(app.get('port'), () => console.log('Server on port ', app.get('port')));