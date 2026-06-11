$(document).ready(function () {

    console.log("Application Started");
    // DYNAMIC THEME SWITCHER
    $("#themeBtn").click(function () {

        $("body").toggleClass("dark-theme");

        if ($("body").hasClass("dark-theme")) {
            $(this).text("Light Mode");
        } else {
            $(this).text("Dark Mode");
        }
    });
    // LIVE CHARACTER COUNTER
    $("#message").keyup(function () {

        let count = $(this).val().length;

        $("#charCount").text(
            `${count} Characters Typed`
        );

        if (count > 100) {
            $("#charCount").css("color", "red");
        } else {
            $("#charCount").css("color", "green");
        }
    });
    // ADVANCED FORM VALIDATION
    $("#registrationForm").submit(function (e) {

        e.preventDefault();

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let password = $("#password").val().trim();

        let emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name.length < 3) {
            alert("Name must contain 3 characters");
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Invalid Email");
            return;
        }

        if (password.length < 8) {
            alert("Password minimum 8 characters");
            return;
        }

        alert("Validation Success");

        $("#userTable tbody").append(`
            <tr>
                <td>${name}</td>
                <td>${email}</td>
            </tr>
        `);

        this.reset();
    });
    // DOM MANIPULATION
    $("#addTask").click(function () {

        let task = $("#taskInput").val();

        if (task === "") return;

        $("#taskList").append(`
            <li class="task-item">
                ${task}
                <button class="deleteBtn">
                    Delete
                </button>
            </li>
        `);

        $("#taskInput").val("");
    });

    // Event Delegation

    $("#taskList").on(
        "click",
        ".deleteBtn",
        function () {

            $(this)
                .parent()
                .fadeOut(500, function () {
                    $(this).remove();
                });
        }
    );
    // CSS MANIPULATION
    $("#styleBtn").click(function () {

        $(".card").css({
            background: "black",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
            fontSize: "18px"
        });
    });
    // DOM TRAVERSING
    $(".employee").click(function () {

        $(this)
            .parent()
            .siblings()
            .find(".employee")
            .css("background", "");

        $(this)
            .css("background", "yellow");

        console.log(
            "Selected:",
            $(this).text()
        );
    });
    // ANIMATIONS
    $("#animateBtn").click(function () {

        $("#box").animate({
            left: "300px",
            width: "250px",
            height: "250px",
            opacity: 0.5
        }, 2000)
        .animate({
            left: "0px",
            opacity: 1
        }, 2000);
    });
    // FADE EFFECTS
    $("#fadeOutBtn").click(function () {
        $("#content").fadeOut();
    });

    $("#fadeInBtn").click(function () {
        $("#content").fadeIn();
    });

    $("#toggleBtn").click(function () {
        $("#content").fadeToggle();
    });
    // SLIDE EFFECTS
    $("#slideBtn").click(function () {
        $("#panel").slideToggle();
    });
    // ADVANCED SELECTORS
    $("li:first").css("color", "red");

    $("li:last").css("color", "blue");

    $("li:even").css(
        "font-weight",
        "bold"
    );

    $("input:text").css(
        "border",
        "2px solid green"
    );
    // AJAX GET REQUEST
    $("#loadUsers").click(function () {

        $.ajax({

            url:
            "https://jsonplaceholder.typicode.com/users",

            type: "GET",

            success: function (users) {

                $("#usersContainer").empty();

                users.forEach(user => {

                    $("#usersContainer")
                    .append(`
                        <div class="user-card">
                            <h3>${user.name}</h3>
                            <p>${user.email}</p>
                            <p>${user.phone}</p>
                        </div>
                    `);

                });

            },

            error: function () {

                alert(
                    "Unable to fetch data"
                );

            }
        });
    });
    // AJAX POST REQUEST
    $("#createUser").click(function () {

        $.ajax({

            url:
            "https://jsonplaceholder.typicode.com/posts",

            method: "POST",

            data: {
                title: "jQuery Project",
                body: "Advanced AJAX Example",
                userId: 1
            },

            success: function (response) {

                console.log(
                    "Created",
                    response
                );

                alert(
                    "Record Added Successfully"
                );
            }
        });
    });
    // SEARCH FILTER
    $("#search").keyup(function () {

        let value =
            $(this)
            .val()
            .toLowerCase();

        $("#taskList li").filter(function () {

            $(this).toggle(

                $(this)
                .text()
                .toLowerCase()
                .indexOf(value) > -1

            );

        });

    });
    // CHAINING METHODS
    $("#chainBtn").click(function () {

        $("#chainBox")
            .css("background", "orange")
            .slideUp(1000)
            .slideDown(1000)
            .fadeOut(1000)
            .fadeIn(1000);

    });

});