const path = require('path');
const express = require('express');
const app = express();
var port = process.env.port || 3000;
const publicPath = path.join(__dirname,'../public');
app.use(express.static(publicPath));
app.listen(3000,()=>{
  console.log(`server is on port ${port}`);
});
