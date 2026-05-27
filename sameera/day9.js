//DOCUMENT OBJECT MODEL
<html>
<head>
<title>Tab in the browser</title>
</head>
<body>
<h1>DOM</h1>
<div>
<p>Hello web!</p>
<a href="https://google.com">Here's a link!</a>
</div>
</body>
</html>

//selecting page elements

<!doctype html>
<html>
<head>
<title>JS Tester</title>
</head>
<body>
<h1 class="output">Hello World</h1>
<div class="output">Test</div>
</body>
</html>
const ele1 = document.querySelector("h1");
console.dir(ele1);
const eles = document.querySelectorAll(".output");
console.log(eles);

<!DOCTYPE html>
<html>
<head>
    <title>DOM Manipulation</title>

    <style>
        .red {
            color: white;
        }
    </style>
</head>
<body>

    <h1 id="demo">Original Text</h1>

    <script>

        // 1. Select the page element
        let element = document.getElementById("demo");

        // 2. Update textContent
        element.textContent = "Updated Text Content";

        // 3. Add class using classList.add()
        element.classList.add("red");

        // 4. Update id property
        element.id = "tester";

        // 5. Add background color using style object
        element.style.backgroundColor = "red";

    </script>

</body>
</html>