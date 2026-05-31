<!DOCTYPE html>
<html>
<head>
    <title>HTML DOM Complete Example</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }

        #box {
            width: 100px;
            height: 100px;
            background-color: red;
            position: relative;
            margin-top: 20px;
        }
    </style>
</head>
<body>

    <h1 id="heading">JavaScript HTML DOM Demo</h1>

    <p class="demo">First Paragraph</p>
    <p class="demo">Second Paragraph</p>

    <button onclick="changeHTML()">Change HTML</button>
    <button onclick="changeCSS()">Change CSS</button>
    <button onclick="selectElements()">Select Elements</button>
    <button onclick="showDocumentInfo()">Document Reference</button>
    <button onclick="elementReference()">Element Reference</button>
    <button onclick="startAnimation()">Start Animation</button>

    <h2>Form Validation</h2>

    <form onsubmit="return validateForm()">
        Name:
        <input type="text" id="name">
        <input type="submit" value="Submit">
    </form>

    <div id="box"></div>

    <script>

        function changeHTML() {
            document.getElementById("heading").innerHTML =
                "HTML Content Changed Successfully";
        }

        function changeCSS() {
            let element = document.getElementById("heading");

            element.style.color = "blue";
            element.style.backgroundColor = "yellow";
            element.style.fontSize = "40px";
        }

        function selectElements() {
            let items = document.getElementsByClassName("demo");

            for (let i = 0; i < items.length; i++) {
                items[i].style.color = "green";
                items[i].innerHTML = "Selected Using DOM";
            }
        }

        function validateForm() {
            let name = document.getElementById("name").value;

            if (name === "") {
                alert("Name cannot be empty");
                return false;
            }

            alert("Form Submitted Successfully");
            return true;
        }

        function startAnimation() {
            let box = document.getElementById("box");
            let position = 0;

            let animation = setInterval(frame, 5);

            function frame() {
                if (position >= 300) {
                    clearInterval(animation);
                } else {
                    position++;
                    box.style.left = position + "px";
                }
            }
        }

        function showDocumentInfo() {
            alert("Document Title: " + document.title);
        }

        function elementReference() {
            let element = document.getElementById("heading");

            alert("Element Content: " + element.innerHTML);
        }

    </script>

</body>
</html>