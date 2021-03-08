const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const routers = require('./routers/index');

// settings
app.set('port', 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//middlewares
app.use((req,res,next) => {
    console.log(`${req.url} -${req.method}`);
    next();
});


//routers
app.use(routers);
// staric files
app.use('/static', express.static(path.join(__dirname,'public')));

// start the server
app.listen(3000, () => console.log('Server on port 3000'));