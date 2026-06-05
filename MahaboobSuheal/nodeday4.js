const http = require('http');

const server = http.createServer((req, res) => {


    if (req.method === 'GET') {
        res.write("GET Request Received");
        res.end();
    }


    else if (req.method === 'POST') {
        res.write("POST Request Received");
        res.end();
    }

    else if (req.method === 'PUT') {
        res.write("PUT Request Received");
        res.end();
    }


    else if (req.method === 'DELETE') {
        res.write("DELETE Request Received");
        res.end();
    }


    else {
        res.write("Invalid Request");
        res.end();
    }
});


server.listen(8000, () => {
    console.log("Server started on port 8000");
});