//Student Management REST API
const express =
    require("express");

const app = express();

app.use(express.json());

let students = [

    {
        id: 1,
        name: "Sameera"
    },

    {
        id: 2,
        name: "Ravi"
    }

];

app.get(
    "/students",
    (req, res) => {

        res.json(students);

    }
);

app.post(
    "/students",
    (req, res) => {

        students.push(
            req.body
        );

        res.json({
            message:
            "Added"
        });

    }
);

app.put(
    "/students/:id",
    (req, res) => {

        const student =
            students.find(
                s =>
                s.id ==
                req.params.id
            );

        if(student) {

            student.name =
                req.body.name;
        }

        res.json(student);

    }
);

app.delete(
    "/students/:id",
    (req, res) => {

        students =
            students.filter(
                s =>
                s.id !=
                req.params.id
            );

        res.json({
            message:
            "Deleted"
        });

    }
);

app.listen(
    3000,
    () =>
        console.log(
            "Server Started"
        )
);