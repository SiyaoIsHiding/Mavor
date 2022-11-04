const http = require("http")
const request = require("request")
const fs = require("fs").promises


handler = (inRequest, inResponse) => {
    fs.readFile(__dirname + "/assets/html/cart.html").then(content => {
            inResponse.setHeader("Content-Type", "text/html");
            inResponse.writeHead(200);
            inResponse.end(content);
        }
    ).catch( err => {
        inResponse.writeHead(500);
        inResponse.end(err)
        }
    )
}
http.createServer(handler).listen(80)


