const express = require('express');
const router =require('./router.js');
const path =require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(router);

app.listen(3000,()=>{
  console.log('服务器连接成功...')
})