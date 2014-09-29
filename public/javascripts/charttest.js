$(document).ready(function() {
  //chart stuff

  var options = {
     // String - Scale label font declaration for the scale label
    scaleFontFamily: "'Arial', 'Arial', 'Arial', Arial",

    // Number - Scale label font size in pixels
    scaleFontSize: 12,

    // String - Scale label font weight style
    scaleFontStyle: "normal",

    // String - Scale label font colour
    scaleFontColor: "#666",
    datasetStrokeWidth : 2,
    pointLabelFontColor : "#444",
    angleLineColor : "rgba(0,0,0,0.6)",
    scaleLineColor: "rgba(0,0,0,0.1)",
    animationSteps: 100
  }
  var data = {
  labels: ["Skill1", "Skill2", "Skill3", "Skill4", "Skill5"],
  datasets: [
      {
          label: "Skill",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: [65, 59, 90, 81, 56]
      },
      {
          label: "My Second dataset",
          fillColor: "rgba(151,187,205,0.2)",
          strokeColor: "rgba(151,187,205,1)",
          pointColor: "rgba(151,187,205,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(151,187,205,1)",
          data: [28, 48, 40, 19, 96]
      }]
  };

  // Chart.defaults.global.responsive = true;
  var ctx = document.getElementById("myChart").getContext("2d");
  var myRadarChart = new Chart(ctx).Radar(data, options);

  // Chart.defaults.global.responsive = true;
});
