const express = require('express')
const app = express() // ham express tra ve 1 doi tuong de xay dung webside
const port = 3000 //port la cổng 


app.get('/', (req, res) =>{
  var a = 2;
var b = 1;
var c = a + b
return res.send('Hello World!')
})
// khai báo tuyến đường khi đi vào app của bạn thì return ra chữ Hello World
  // lắng nghe cổng 3000 và in ra chữ Example....
app.listen(port, ()=> console.log(`Example app listening at http://localhost:${port} `))