require("http").createServer((inRequest, inResponse) => {
        inResponse.end("Hello from first server");
    }
).listen(80)