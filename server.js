const express = require('express');
const server = express();

server.all('/', (req, res)=>{
    res.send('Hảo Hán!')
})
function keepAlive(){
    server.listen(2333, ()=>{console.log("Bot Deploy thành công!")});
}
module.exports = keepAlive;

// Vui lòng không edit credit nếu như chưa được cho phép
// By Folody Team
