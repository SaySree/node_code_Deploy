const express = require('express');
const hbs = require('hbs');

var app = express();


app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.get('/',(req,res) => {
  //res.send('Hello express !');

  res.send({
    name: 'sayan',
    like: [
      'click',
      'bind'
    ]
  });
});


app.get('/about',(req,res) => {
  //res.send('Abot page');
res.render('about.hbs',{
  title: 'About Page',
  currentyear: new Date().getFullYear()
})

});

app.listen(3000,()=> {
  console.log('Server is uptp 3000');
});
