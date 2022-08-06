const express = require ('express');
const path = require('path');

const app = express();
const {logger} = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const cookieParse = require('cookie-parser');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');


const PORT = process.env.PORT || 3500;

app.use(logger);
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParse());

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/', require('./routers/root'));

app.all('*', (req,res) => {
    res.status(404)
    if(req.accepts('html')) {
        res.sendFile(path.join(__dirname,'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: "Page not found"})
    } else {
        res.type('txt').send('404. Page not found')
    }
   
})

app.use(errorHandler)

app.listen(PORT, () =>console.log(`Server running on port ${PORT}`));
