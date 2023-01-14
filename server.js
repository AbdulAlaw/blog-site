const express = require('express');
const mongoose = require('mongoose');
const articalRouter = require('./routes/articles');
const app = express();

const mongoUri="mongodb://localhost:27017"
mongoose.set('strictQuery', false);


mongoose 
 .connect('mongodb://localhost:27017', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
 })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));



app.get('/', (req, res) => {
    const articles =[
        {
            title: 'Test Article',
            createdAt: new Date(),
            description: 'Test Description'
        },
        {
            title: 'Test Article',
            createdAt: new Date(),
            description: 'Test Description'
        }
    ]
    res.render ('articles/index',{ articles: articles });
});

app.use('/articles', articalRouter);

app.listen(27017)