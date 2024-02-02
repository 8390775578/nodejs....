// // const http=require('http')

// // const server=http.createServer((req, res) => {
// //     if(req.url=='/about'){
// //         res.end('hii i am mayuresh kodape')
// //     }
// //     // res.write('hello')
// //     // res.end()
// // })
// // server.listen(4000)

// // if (req.url === '/') {
// //     res.writeHead(200, {'Content-Type': 'text/html'});

// //     res.end('Welcome to our home page')
// //   } else if (req.url === '/about') {
// //     res.end('Here is our short history')
// //   } else {
// //     res.end(`
// //     <h1>Oops!</h1>
// //     <p>We can't seem to find the page you are looking for</p>
// //     <a href="/">back home</a>
// //     `)
// //   }
// // })



// // server.listen(5900)


// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('Hello World!');
//   res.end();
// })
// Server.listen(8080)


// const http = require('http')

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//       res.end('Welcome to our home page')
//     }
//     if (req.url === '/about') {
//       res.end('Here is our short history')
//     }
//     res.end(`
//     <h1>Oops!</h1>
//   <p>We can't seem to find the page you are looking for</p>
//   <a href="/">back home</a>
//     `)
// })

// server.listen(5050)
const http = require('http');
const port = process.env.PORT || 8000;
const server = http.createServer((req, res) => {
    console.log(req)
    res.statusCode=200;
    res.setHeader('Content-Type','text/html')
    res.end('<h1>This is Mayuresh<\h1><p>hey this the way to rmhgvhmgvj ock the world!</p>');
})
server.listen(port,()=>{
    console.log(`server is listining ${port}`);
});