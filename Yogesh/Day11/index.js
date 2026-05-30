//Element selectors

//index.js

function changeData() {

    // ===================================
    // getElementById()
    // ===================================

    let heading =
        document.getElementById("mainHeading");

    heading.innerHTML =
        "Student Data Updated Successfully";

    heading.style.color = "red";

    heading.style.backgroundColor =
        "yellow";

    heading.style.padding = "10px";



    // ===================================
    // getElementsByClassName()
    // ===================================

    let students =
        document.getElementsByClassName(
            "student"
        );

    students[0].innerHTML =
        "Yogesh Kumar";

    students[1].innerHTML =
        "Rahul Sharma";

    students[2].innerHTML =
        "Kiran Kumar";

    students[0].style.color = "purple";
    students[1].style.color = "orange";
    students[2].style.color = "brown";



    // ===================================
    // getElementsByTagName()
    // ===================================

    let paragraphs =
        document.getElementsByTagName("p");

    for(let i = 0; i < paragraphs.length; i++)
    {
        paragraphs[i].style.fontSize =
            "22px";
    }



    // ===================================
    // querySelector()
    // ===================================

    let firstCourse =
        document.querySelector(".course");

    firstCourse.style.backgroundColor =
        "lightgreen";

    firstCourse.style.padding =
        "5px";



    // ===================================
    // querySelectorAll()
    // ===================================

    let allCourses =
        document.querySelectorAll(
            ".course"
        );

    allCourses.forEach(function(course)
    {
        course.style.border =
            "2px solid green";

        course.style.margin =
            "5px";

        course.style.padding =
            "5px";
    });



    // ===================================
    // querySelectorAll() for boxes
    // ===================================

    let boxes =
        document.querySelectorAll(
            ".box"
        );

    boxes.forEach(function(box)
    {
        box.style.backgroundColor =
            "lightblue";

        box.style.fontWeight =
            "bold";

        box.style.fontSize =
            "20px";
    });



    // ===================================
    // Create New Element
    // ===================================

    let newMessage =
        document.createElement("h3");

    newMessage.innerHTML =
        "All Data Updated Successfully";

    document.body.appendChild(
        newMessage
    );



    // ===================================
    // Console Output
    // ===================================

    console.log(
        "Heading Selected Using ID"
    );

    console.log(
        heading
    );

    console.log(
        "Students Selected Using Class"
    );

    console.log(
        students
    );

    console.log(
        "Paragraphs Selected Using Tag"
    );

    console.log(
        paragraphs
    );

    console.log(
        "Courses Selected Using QuerySelectorAll"
    );

    console.log(
        allCourses
    );

}
