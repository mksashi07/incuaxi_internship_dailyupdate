    // jQuery Selectors

    $("h1").css("color", "blue");

    $("#title").css("background", "yellow");

    $(".box").css("border", "2px solid black");

    $("p:first").css("fontWeight", "bold");

    $("li:last").css("color", "red");

    $("li:even").css("background", "lightgray");

    $("li:odd").css("background", "lightblue");
    // jQuery HTML
   
    $("#btnHtml").click(function () {

        $("#result").html(
            "<h2>Welcome to jQuery HTML</h2>"
        );

    });

    $("#btnText").click(function () {

        $("#result").text(
            "This is text inserted using text()"
        );

    });

    $("#btnAppend").click(function () {

        $("#result").append(
            "<p>New Paragraph Added</p>"
        );

    });

    $("#btnPrepend").click(function () {

        $("#result").prepend(
            "<p>Paragraph Added at Top</p>"
        );

    });
    // jQuery CSS
    $("#btnCss").click(function () {

        $("#box").css({
            width: "250px",
            height: "120px",
            background: "orange",
            color: "white",
            padding: "20px",
            fontSize: "22px",
            textAlign: "center"
        });

    });

    // jQuery DOM

    $("#btnAdd").click(function () {

        $("#list").append(
            "<li>New Item Added</li>"
        );

    });

    $("#btnRemove").click(function () {

        $("#list li:last").remove();

    });

    $("#btnEmpty").click(function () {

        $("#list").empty();

    });

    $("#btnHide").click(function () {

        $("#box").hide();

    });

    $("#btnShow").click(function () {

        $("#box").show();

    });

    $("#btnToggle").click(function () {

        $("#box").toggle();

    });

    // Effects
    
    $("#btnFadeIn").click(function () {

        $("#box").fadeIn();

    });

    $("#btnFadeOut").click(function () {

        $("#box").fadeOut();

    });

    $("#btnSlideUp").click(function () {

        $("#box").slideUp();

    });

    $("#btnSlideDown").click(function () {

        $("#box").slideDown();

    });
    // Events

    $("#box").mouseenter(function () {

        console.log("Mouse Enter");

    });

    $("#box").mouseleave(function () {

        console.log("Mouse Leave");

    });

    $("#box").click(function () {

        alert("Box Clicked");

    });
    // Form Handling

    $("#btnForm").click(function () {

        let name = $("#name").val();

        alert("Entered Name: " + name);

    });
    // Traversing DOM
    $("#btnParent").click(function () {

        $("#child").parent()
            .css("border", "3px solid green");

    });

    $("#btnChildren").click(function () {

        $("#parent").children()
            .css("color", "blue");

    });

    $("#btnNext").click(function () {

        $("#item1").next()
            .css("background", "yellow");

    });

    $("#btnPrev").click(function () {

        $("#item3").prev()
            .css("background", "pink");

    });

    // Attributes

    $("#btnAttr").click(function () {

        $("#link").attr(
            "href",
            "https://www.google.com"
        );

        alert("Attribute Changed");

    });
    // Class Manipulation
    $("#btnAddClass").click(function () {

        $("#box").addClass("highlight");

    });

    $("#btnRemoveClass").click(function () {

        $("#box").removeClass("highlight");

    });

    $("#btnToggleClass").click(function () {

        $("#box").toggleClass("highlight");

    });