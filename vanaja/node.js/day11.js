const http = require('http');

let students = [
    { id: 1, name: 'Vishnu' },
    { id: 2, name: 'Ravi' }
];

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'application/json');

    // GET - Fetch all students
    if (req.method === 'GET' && req.url === '/students') {
        res.writeHead(200);
        res.end(JSON.stringify(students));
    }

    // POST - Add student
    else if (req.method === 'POST' && req.url === '/students') {

        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            const newStudent = JSON.parse(body);

            students.push(newStudent);

            res.writeHead(201);
            res.end(JSON.stringify({
                message: 'Student Added',
                data: newStudent
            }));
        });
    }

    // PUT - Update student
    else if (req.method === 'PUT' && req.url.startsWith('/students/')) {

        const id = parseInt(req.url.split('/')[2]);

        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {

            const updatedStudent = JSON.parse(body);

            const index = students.findIndex(
                student => student.id === id
            );

            if (index !== -1) {

                students[index] = {
                    id,
                    ...updatedStudent
                };

                res.writeHead(200);

                res.end(JSON.stringify({
                    message: 'Student Updated',
                    data: students[index]
                }));

            } else {

                res.writeHead(404);

                res.end(JSON.stringify({
                    message: 'Student Not Found'
                }));
            }
        });
    }

    // DELETE - Remove student
    else if (req.method === 'DELETE' && req.url.startsWith('/students/')) {

        const id = parseInt(req.url.split('/')[2]);

        students = students.filter(
            student => student.id !== id
        );

        res.writeHead(200);

        res.end(JSON.stringify({
            message: 'Student Deleted'
        }));
    }

    // Route Not Found
    else {

        res.writeHead(404);

        res.end(JSON.stringify({
            message: 'Route Not Found'
        }));
    }
});
server.listen(3000, () => {
    console.log('Server Running at http://localhost:3000');
});