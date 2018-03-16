const express=require('express');
const hbs=require('hbs');
const app=express();
app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partials');

// app.get('/',(req,res)=>{
//   res.send('<h1>Hello World<h2>');
// });
app.use((req,res,next)=>{//express middleware
  console.log(`bro ${req.method} and ${req.url}`);//sending the data to server
  next();
});
app.use((req,res,next)=>{//express middleware
  res.render('maintaince.hbs');//for every page
});
app.use(express.static(__dirname+'/public'));
hbs.registerHelper('date',()=>{
  return new Date().getFullYear();
});
app.get('/',(req,res)=>{
  // res.send({
  //   name:'prateek',
  //   likes:[
  //     'pano',
  //     'lalli'
  //   ]
  // })
  res.render('home.hbs',{
    name:'pro',


  })
});
app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    name:'prateek',

  });
});
app.listen(3000,()=>{
  console.log('connected to port 3000');
});
