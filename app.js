const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const homeRoutes = require('./src/routes/homeRoutes.js');
const inforegisterRoutes = require('./src/routes/inforegisterRoutes');
const infoquizRoutes = require('./src/routes/infoquizRoutes');
const registerRoutes = require('./src/routes/registerRoutes');
const questionsRoutes = require('./src/routes/questionsRoutes');
const reportRoutes = require('./src/routes/reportRoutes');

const app = express();
const port = 80;

//const maria = require('./model/connect/maria');
//maria.connect();

// Set views directory and view engine
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/', homeRoutes);
app.use('/home', homeRoutes);
app.use('/homepage', homeRoutes);
app.use('/inforegister', inforegisterRoutes);
app.use('/infoquiz', infoquizRoutes);
app.use('/register', registerRoutes);
app.use('/questions', questionsRoutes);
app.use('/report', reportRoutes);

// Static Files
app.use(express.static(path.join(__dirname, 'src', 'public')));

require("./src/routes/question.routes.js")(app);
require("./src/routes/session.routes.js")(app);
require("./src/routes/category.routes.js")(app);
require("./src/routes/checkhistory.routes.js")(app);
require("./src/routes/userinfo.routes.js")(app);

// Start the server
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
