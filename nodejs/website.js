const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    console.log(req.url)
    res.statusCode=200;
    res.setHeader('Content-Type','text/html')
    if(req.url=='/'){
        res.end('<h1>This is Mayuresh<\h1><p>hey this the way to rock the world!</p>');

    }
    else if(req.url=='/about'){
        res.statusCode=200;
        res.end('<h1>This is khush kodape <\h1><p>hey this the way to rock the world!</p>');

    }
    else{
        res.hehhhllo();
        res.statusCode=404;
        res.end('<h1>This is khush kodape <\h1>')

    }
    
})
server.listen(port,()=>{
    console.log(`server is listining ${port}`);
});