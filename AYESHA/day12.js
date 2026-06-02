// JS CANVAS
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Rectangle
ctx.fillStyle = "blue";
ctx.fillRect(20, 20, 150, 80);

// Circle
ctx.beginPath();
ctx.arc(250, 80, 50, 0, Math.PI * 2);
ctx.fillStyle = "red";
ctx.fill();

// Line
ctx.beginPath();
ctx.moveTo(50, 200);
ctx.lineTo(300, 200);
ctx.lineWidth = 5;
ctx.strokeStyle = "green";
ctx.stroke();

// Text
ctx.font = "30px Arial";
ctx.fillStyle = "purple";
ctx.fillText("Canvas Graphics", 120, 270);

// PLOTLY.JS
const plotlyData = [
  {
    x: [1, 2, 3, 4, 5],
    y: [10, 15, 13, 17, 20],
    type: "scatter",
    mode: "lines+markers",
    marker: {
      color: "blue",
      size: 10
    }
  }
];

const plotlyLayout = {
  title: "Plotly Line Graph"
};

Plotly.newPlot(
  "plotlyChart",
  plotlyData,
  plotlyLayout
);



// CHART.JS

const chartCanvas = document.getElementById("chartCanvas");

new Chart(chartCanvas, {
  type: "bar",

  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May"
    ],

    datasets: [
      {
        label: "Sales",

        data: [12, 19, 8, 15, 20],

        backgroundColor: [
          "red",
          "blue",
          "green",
          "orange",
          "purple"
        ]
      }
    ]
  },

  options: {
    responsive: false
  }
});

// GOOGLE CHART

google.charts.load("current", {
  packages: ["corechart"]
});

google.charts.setOnLoadCallback(drawGoogleChart);

function drawGoogleChart() {

  const data =
    google.visualization.arrayToDataTable([
      ["Month", "Profit"],
      ["Jan", 1000],
      ["Feb", 1170],
      ["Mar", 660],
      ["Apr", 1030]
    ]);

  const options = {
    title: "Company Profit",
    width: 600,
    height: 400
  };

  const chart =
    new google.visualization.PieChart(
      document.getElementById("googleChart")
    );

  chart.draw(data, options);
}

// D3.JS

const svg =
  d3.select("#d3Chart")
    .attr("width", 600)
    .attr("height", 300);

const numbers = [50, 120, 180, 90, 200];

svg.selectAll("rect")
   .data(numbers)
   .enter()
   .append("rect")

   .attr("x", (d, i) => i * 110)

   .attr("y", d => 300 - d)

   .attr("width", 80)

   .attr("height", d => d)

   .attr("fill", "teal");

// JQUERY SELECTORS


$(".box").css("border", "5px solid black");

$("#changeBtn").css({
  padding: "10px",
  background: "black",
  color: "white"
});

// JQUERY DOM

$("#changeBtn").click(function () {

  $(".box").text("UPDATED");

  $(".box").css({
    background: "green",
    borderRadius: "20px",
    transform: "rotate(10deg)"
  });

  $("body").append(
    "<h2>jQuery DOM Manipulation Success</h2>"
  );
});