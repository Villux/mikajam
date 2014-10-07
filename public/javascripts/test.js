$(document).ready(function () {
  $("#mobile").hide();
  $("#section4menu").click(function () {
    console.log("width:")
    console.log($(window).width());
    console.log("height:")
    console.log($(window).height());
  });
  if ($(window).width() < 998) {
    $("#fullpage").hide();
    $("#menu").hide();
    $("#mobile").show();
  } 
  else {
    $('#fullpage').fullpage({
      sectionsColor: ['#525252', '#525252', '#525252', '#525252'],
      anchors: ['Home', 'Rosters', 'Players', 'fourthPage'],
      menu: '#menu',
      css3: true,
      scrollOverflow: false,
      afterLoad: function (anchorLink, index) {
        if (anchorLink === 'Rosters') {}
        if (anchorLink === 'Players') {
          if (!mikaChart) {
            var canvas = document.getElementsByTagName('canvas')[0];
            var playerBox = document.getElementById('frame');
            canvas.width = playerBox.offsetWidth - 30;
            canvas.height = playerBox.offsetHeight;
            var ctx = document.getElementById("mikaChart").getContext("2d");
            mikaChart = new Chart(ctx);
          }
          mikaChart.Bar(dataMika, optionsM);
        }
      },
      afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
        if (anchorLink === 'Players' && slideIndex === 0) {}
        if (anchorLink === 'Players' && slideIndex === 1) {
          if (!matiasmChart) {
            var canvas = document.getElementById('matiasmChart');
            console.log(canvas);
            var playerBox = document.getElementById('frame');
            console.log(playerBox);
            canvas.width = playerBox.offsetWidth - 30;
            canvas.height = playerBox.offsetHeight;
            var ctx = document.getElementById("matiasmChart").getContext("2d");
            matiasmChart = new Chart(ctx);
          }
          matiasmChart.Bar(dataMatiasm, optionsC);
        }
        if (anchorLink === 'Players' && slideIndex === 2) {
          tuomasChart.Bar(dataTuomas, options);
        }
        if (anchorLink === 'Players' && slideIndex === 3) {
          petteriChart.Bar(dataPetteri, options);
        }
        if (anchorLink === 'Players' && slideIndex === 4) {
          jukkaChart.Bar(dataJukka, options);
        }
        if (anchorLink === 'Players' && slideIndex === 5) {
          jukkahChart.Bar(dataJukkah, options);
        }
        if (anchorLink === 'Players' && slideIndex === 6) {
          kristianChart.Bar(dataKristian, options);
        }
        if (anchorLink === 'Players' && slideIndex === 7) {
          jussiChart.Bar(dataJussi, options);
        }
        if (anchorLink === 'Players' && slideIndex === 8) {
          rikuChart.Bar(dataRiku, options);
        }
        if (anchorLink === 'Players' && slideIndex === 9) {
          olliChart.Bar(dataOlli, options);
        }
        if (anchorLink === 'Players' && slideIndex === 10) {
          jaakkoChart.Bar(dataJaakko, options);
        }
        if (anchorLink === 'Players' && slideIndex === 11) {
          benjaminChart.Bar(dataBenjamin, options);
        }
        if (anchorLink === 'Players' && slideIndex === 12) {
          kimmoChart.Bar(dataKimmo, options);
        }
        if (anchorLink === 'Players' && slideIndex === 13) {
          teemuChart.Bar(dataTeemu, options);
        }
        if (anchorLink === 'Players' && slideIndex === 14) {
          mikkojChart.Bar(dataMikkoj, options);
        }
        if (anchorLink === 'Players' && slideIndex === 15) {
          ollisChart.Bar(dataOllis, options);
        }
        if (anchorLink === 'Players' && slideIndex === 16) {
          niklasChart.Bar(dataNiklas, options);
        }
        if (anchorLink === 'Players' && slideIndex === 17) {
          matiasChart.Bar(dataMatias, options);
        }
        if (anchorLink === 'Players' && slideIndex === 18) {
          matiasmChart.Bar(dataMatiasm, options);
        }
        if (anchorLink === 'Players' && slideIndex === 19) {
          sauliChart.Bar(dataSauli, options);
        }
        if (anchorLink === 'Players' && slideIndex === 20) {
          lauriChart.Bar(dataLauri, options);
        }
        if (anchorLink === 'Players' && slideIndex === 21) {
          viliChart.Bar(dataVili, options);
        }
        if (anchorLink === 'Players' && slideIndex === 22) {
          jussilChart.Bar(dataJussil, options);
        }

      },
      onSlideLeave: function (anchorLink, index, slideIndex, direction) {
        //
      },
      afterResize: function() {
        console.log("reload");
        location.reload();
      }
    });
    
    // Wait until the video meta data has loaded
  $('#section1 video').on('loadedmetadata', function () {
    console.log(screen.width);
    console.log(screen.height);
    var x = $(window).height();
    var y = $(window).width();
    console.log(x);
    console.log(y);
    if (screen.width <= 1200) {
      $("#canvas").css("color", "red");
      return;
    }
    var $width, $height, // Width and height of screen
      $vidwidth = this.videoWidth, // Width of video (actual width)
      $vidheight = this.videoHeight, // Height of video (actual height)
      $aspectRatio = $vidwidth / $vidheight; // The ratio the video's height and width are in

    (adjSize = function () { // Create function called adjSize
      $width = $(window).width(); // Width of the screen
      $height = $(window).height(); // Height of the screen

      $boxRatio = $width / $height; // The ratio the screen is in

      $adjRatio = $aspectRatio / $boxRatio; // The ratio of the video divided by the screen size

      // Set the container to be the width and height of the screen
      $('#section1').css({
        'width': $width + 'px',
        'height': $height + 'px'
      });

      if ($boxRatio < $aspectRatio) { // If the screen ratio is less than the aspect ratio..
        // Set the width of the video to the screen size multiplied by $adjRatio
        $vid = $('#section1 video').css({
          'width': $width * $adjRatio + 'px'
        });
      } else {
        // Else just set the video to the width of the screen/container
        $vid = $('#section1 video').css({
          'width': $width + 'px'
        });
      }

    })(); // Run function immediately
    // Run function also on window resize.
    $(window).resize(adjSize);
    // static background for here - if needed
    $('#video')[0].play();
    $("#pheader").fadeIn(10000, 'swing', function () {
      // Animation complete.
    });
  });
  }

  function iedetect(v) {
    var r = RegExp('msie' + (!isNaN(v) ? ('\\s' + v) : ''), 'i');
    return r.test(navigator.userAgent);
  }
});

var optionsM = {
  datasetStrokeWidth: 2,
  scaleShowLabels: true,
  pointLabelFontColor: "#000000",
  angleLineColor: "rgba(255, 119, 0, 0.92)",
  scaleLineColor: "rgba(29, 141, 204, 1)",
  animationSteps: 100,
  responsive: false,
  label: 'Sleep',
  scaleFontSize: 11,
  scaleFontStyle: "normal",
  scaleFontColor: "#ffffff",

};
var optionsC = {
  datasetStrokeWidth: 2,
  scaleShowLabels: true,
  pointLabelFontColor: "#000000",
  angleLineColor: "rgba(255, 119, 0, 0.92)",
  scaleLineColor: "rgba(255, 66, 61, 1)",
  animationSteps: 100,
  responsive: false,
  label: 'Sleep',
  scaleFontSize: 11,
  scaleFontStyle: "normal",
  scaleFontColor: "#ffffff",

};


// Data Mika Linnaluoma
var mikaChart = null;
var dataMika = {
  labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
  datasets: [{
    label: "Skills",
    fillColor: "rgba(29, 141, 204, 0.79)",
    strokeColor: "rgba(199, 198, 198, 0.82)",
    highlightFill: "rgba(255, 255, 255, 0.83)",
    highlightStroke: "rgba(220,220,220,1)",
    data: [70, 70, 60, 65, 100, 80, 74]
  }]
};
// // mikaChart = new Chart(document.getElementById("mikaChart").getContext("2d"));
// // Data Players Hirvonen
// var dataMikko = {
//     labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
//     datasets: [
//         {
//             label: "Skills",
//             fillColor: "rgba(225, 238, 255, 0.69)",
//             strokeColor: "rgba(199, 198, 198, 0.82)",
//             highlightFill: "rgba(86, 164, 254, 0.75)",
//             highlightStroke: "rgba(220,220,220,1)",
//             data: [79, 75, 70, 85, 90, 70, 78]
//         }
//     ]
// };
// var mikkoChart = new Chart(document.getElementById("mikkoChart").getContext("2d"));
// // Data Tuomas Viertola
// var dataTuomas = {
//     labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
//     datasets: [
//         {
//             label: "Skills",
//             fillColor: "rgba(225, 238, 255, 0.69)",
//             strokeColor: "rgba(199, 198, 198, 0.82)",
//             highlightFill: "rgba(86, 164, 254, 0.75)",
//             highlightStroke: "rgba(220,220,220,1)",
//             data: [97,97,93,95,99,88,95]
//         }
//     ]
// };
// var tuomasChart = new Chart(document.getElementById("tuomasChart").getContext("2d"));
// // Data Petteri Salo
// var dataPetteri = {
//     labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
//     datasets: [
//         {
//             label: "Skills",
//             fillColor: "rgba(225, 238, 255, 0.69)",
//             strokeColor: "rgba(199, 198, 198, 0.82)",
//             highlightFill: "rgba(86, 164, 254, 0.75)",
//             highlightStroke: "rgba(220,220,220,1)",
//             data: [85,79,75,90,74,65,78]
//         }
//     ]
// };
// var petteriChart = new Chart(document.getElementById("petteriChart").getContext("2d"));
// // Data Jukka Rajamäki
// var dataJukka = {
//     labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
//     datasets: [
//         {
//             label: "Skills",
//             fillColor: "rgba(225, 238, 255, 0.69)",
//             strokeColor: "rgba(199, 198, 198, 0.82)",
//             highlightFill: "rgba(86, 164, 254, 0.75)",
//             highlightStroke: "rgba(220,220,220,1)",
//             data: [90,80,90,88,70,79,83]
//         }
//     ]
// };
// var jukkaChart = new Chart(document.getElementById("jukkaChart").getContext("2d"));
// // Data Jukka Heino
// var dataJukkah = {
//     labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
//     datasets: [
//         {
//             label: "Skills",
//             fillColor: "rgba(225, 238, 255, 0.69)",
//             strokeColor: "rgba(199, 198, 198, 0.82)",
//             highlightFill: "rgba(86, 164, 254, 0.75)",
//             highlightStroke: "rgba(220,220,220,1)",
//             data: [65,90,68,75,85,91,79]
//         }
//     ]
// };
// var jukkahChart = new Chart(document.getElementById("jukkahChart").getContext("2d"));
// // Data Kristian Lindfors
// var dataKristian = {
//     labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
//     datasets: [
//         {
//             label: "Skills",
//             fillColor: "rgba(225, 238, 255, 0.69)",
//             strokeColor: "rgba(199, 198, 198, 0.82)",
//             highlightFill: "rgba(86, 164, 254, 0.75)",
//             highlightStroke: "rgba(220,220,220,1)",
//             data: [60,65,85,65,85,100,77]
//         }
//     ]
// };
// var kristianChart = new Chart(document.getElementById("kristianChart").getContext("2d"));
// // Data Jussi Malminen
// var dataJussi = {
//     labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
//     datasets: [
//         {
//             label: "Skills",
//             fillColor: "rgba(225, 238, 255, 0.69)",
//             strokeColor: "rgba(199, 198, 198, 0.82)",
//             highlightFill: "rgba(86, 164, 254, 0.75)",
//             highlightStroke: "rgba(220,220,220,1)",
//             data: [74,79,75,95,80,87,82]
//         }
//     ]
// };
// var jussiChart = new Chart(document.getElementById("jussiChart").getContext("2d"));
// // Data Riku Lempiä
// var dataRiku = {
//     labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
//     datasets: [
//         {
//             label: "Skills",
//             fillColor: "rgba(225, 238, 255, 0.69)",
//             strokeColor: "rgba(199, 198, 198, 0.82)",
//             highlightFill: "rgba(86, 164, 254, 0.75)",
//             highlightStroke: "rgba(220,220,220,1)",
//             data: [83,91,97,83,69,97,87]
//         }
//     ]
// };
// var rikuChart = new Chart(document.getElementById("rikuChart").getContext("2d"));
// // Data Olli Harju
// var dataOlli = {
//     labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
//     datasets: [
//         {
//             label: "Skills",
//             fillColor: "rgba(225, 238, 255, 0.69)",
//             strokeColor: "rgba(199, 198, 198, 0.82)",
//             highlightFill: "rgba(86, 164, 254, 0.75)",
//             highlightStroke: "rgba(220,220,220,1)",
//             data: [55,60,79,65,77,85,70]
//         }
//     ]
// };
// var olliChart = new Chart(document.getElementById("olliChart").getContext("2d"));
// // Data Jaakko Lievonen
// var dataJaakko = {
//     labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
//     datasets: [
//         {
//             label: "Skills",
//             fillColor: "rgba(225, 238, 255, 0.69)",
//             strokeColor: "rgba(199, 198, 198, 0.82)",
//             highlightFill: "rgba(86, 164, 254, 0.75)",
//             highlightStroke: "rgba(220,220,220,1)",
//             data: [55,60,88,55,70,83,69]
//         }
//     ]
// };
// var jaakkoChart = new Chart(document.getElementById("jaakkoChart").getContext("2d"));
// // Data Benjamin Kokkonen
// var dataBenjamin = {
//     labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
//     datasets: [
//         {
//             label: "Skills",
//             fillColor: "rgba(225, 238, 255, 0.69)",
//             strokeColor: "rgba(199, 198, 198, 0.82)",
//             highlightFill: "rgba(86, 164, 254, 0.75)",
//             highlightStroke: "rgba(220,220,220,1)",
//             data: [60,70,75,69,70,78,70]
//         }
//     ]
// };
// var benjaminChart = new Chart(document.getElementById("benjaminChart").getContext("2d"));
// ////////////////////////////
// // Contenders/////
// ////////////////////////////
// // Data Kimmo Reunila
// var dataKimmo = {
//     labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
//     datasets: [
//         {
//             label: "Skills",
//             fillColor: "rgba(225, 238, 255, 0.69)",
//             strokeColor: "rgba(199, 156, 156, 0.82)",
//             highlightFill: "rgba(255, 85, 85, 0.75)",
//             highlightStroke: "rgba(220,220,220,1)",
//             data: [70,80,80,76,83,85,79]
//         }
//     ]
// };
// var kimmoChart = new Chart(document.getElementById("kimmoChart").getContext("2d"));
// // Data Teemu Seppälä
// var dataTeemu = {
//     labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
//     datasets: [
//         {
//             label: "Skills",
//             fillColor: "rgba(225, 238, 255, 0.69)",
//             strokeColor: "rgba(199, 156, 156, 0.82)",
//             highlightFill: "rgba(255, 85, 85, 0.75)",
//             highlightStroke: "rgba(220,220,220,1)",
//             data: [50,65,75,55,88,75,68]
//         }
//     ]
// };
// var teemuChart = new Chart(document.getElementById("teemuChart").getContext("2d"));
// // Data Mikko Jämsä
// var dataMikkoj = {
//     labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
//     datasets: [
//         {
//             label: "Skills",
//             fillColor: "rgba(225, 238, 255, 0.69)",
//             strokeColor: "rgba(199, 156, 156, 0.82)",
//             highlightFill: "rgba(255, 85, 85, 0.75)",
//             highlightStroke: "rgba(220,220,220,1)",
//             data: [97,88,80,98,100,86,92]
//         }
//     ]
// };
// var mikkojChart = new Chart(document.getElementById("mikkojChart").getContext("2d"));
// // Data Olli Salminen
// var dataOllis = {
//     labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
//     datasets: [
//         {
//             label: "Skills",
//             fillColor: "rgba(225, 238, 255, 0.69)",
//             strokeColor: "rgba(199, 156, 156, 0.82)",
//             highlightFill: "rgba(255, 85, 85, 0.75)",
//             highlightStroke: "rgba(220,220,220,1)",
//             data: [65,65,70,65,73,77,69]
//         }
//     ]
// };
// var ollisChart = new Chart(document.getElementById("ollisChart").getContext("2d"));
// // Data Juhani Jämsä
// var dataJuhani = {
//     labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
//     datasets: [
//         {
//             label: "Skills",
//             fillColor: "rgba(225, 238, 255, 0.69)",
//             strokeColor: "rgba(199, 156, 156, 0.82)",
//             highlightFill: "rgba(255, 85, 85, 0.75)",
//             highlightStroke: "rgba(220,220,220,1)",
//             data: [88,85,85,100,77,83,86]
//         }
//     ]
// };
// var juhaniChart = new Chart(document.getElementById("juhaniChart").getContext("2d"));
// // Data Niklas Lindström
// var dataNiklas = {
//     labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
//     datasets: [
//         {
//             label: "Skills",
//             fillColor: "rgba(225, 238, 255, 0.69)",
//             strokeColor: "rgba(199, 156, 156, 0.82)",
//             highlightFill: "rgba(255, 85, 85, 0.75)",
//             highlightStroke: "rgba(220,220,220,1)",
//             data: [70,76,81,71,80,80,76]
//         }
//     ]
// };
// var niklasChart = new Chart(document.getElementById("niklasChart").getContext("2d"));
// // Data Matias Repo
// var dataMatias = {
//     labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
//     datasets: [
//         {
//             label: "Skills",
//             fillColor: "rgba(225, 238, 255, 0.69)",
//             strokeColor: "rgba(199, 156, 156, 0.82)",
//             highlightFill: "rgba(255, 85, 85, 0.75)",
//             highlightStroke: "rgba(220,220,220,1)",
//             data: [55,69,83,55,65,82,68]
//         }
//     ]
// };
// var matiasChart = new Chart(document.getElementById("matiasChart").getContext("2d"));
// Data Matias Mattila
var matiasmChart = null;
var dataMatiasm = {
  labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
  datasets: [{
    label: "Skills",
    fillColor: "rgba(255, 66, 61, 0.79)",
    strokeColor: "rgba(199, 156, 156, 0.82)",
    highlightFill: "rgba(255, 255, 255, 0.83)",
    highlightStroke: "rgba(220,220,220,1)",
    data: [74, 90, 92, 71, 85, 100, 85]
  }]
};
// // Data Sauli Sukanen
// var dataSauli = {
//     labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
//     datasets: [
//         {
//             label: "Skills",
//             fillColor: "rgba(225, 238, 255, 0.69)",
//             strokeColor: "rgba(199, 156, 156, 0.82)",
//             highlightFill: "rgba(255, 85, 85, 0.75)",
//             highlightStroke: "rgba(220,220,220,1)",
//             data: [93,88,95,89,78,79,87]
//         }
//     ]
// };
// var sauliChart = new Chart(document.getElementById("sauliChart").getContext("2d"));
// // Data Lauri Jämsä
// var dataLauri = {
//     labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
//     datasets: [
//         {
//             label: "Skills",
//             fillColor: "rgba(225, 238, 255, 0.69)",
//             strokeColor: "rgba(199, 156, 156, 0.82)",
//             highlightFill: "rgba(255, 85, 85, 0.75)",
//             highlightStroke: "rgba(220,220,220,1)",
//             data: [82,91,86,80,85,80,84]
//         }
//     ]
// };
// var lauriChart = new Chart(document.getElementById("lauriChart").getContext("2d"));
// // Data Vili Valajärvi
// var dataVili = {
//     labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
//     datasets: [
//         {
//             label: "Skills",
//             fillColor: "rgba(225, 238, 255, 0.69)",
//             strokeColor: "rgba(199, 156, 156, 0.82)",
//             highlightFill: "rgba(255, 85, 85, 0.75)",
//             highlightStroke: "rgba(220,220,220,1)",
//             data: [55,55,63,60,83,75,65]
//         }
//     ]
// };
// var viliChart = new Chart(document.getElementById("viliChart").getContext("2d"));
// // Data Jussi Lilja
// var dataJussil = {
//     labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
//     datasets: [
//         {
//             label: "Skills",
//             fillColor: "rgba(225, 238, 255, 0.69)",
//             strokeColor: "rgba(199, 156, 156, 0.82)",
//             highlightFill: "rgba(255, 85, 85, 0.75)",
//             highlightStroke: "rgba(220,220,220,1)",
//             data: [67,75,64,76,80,73,73]
//         }
//     ]
// };
// var jussilChart = new Chart(document.getElementById("jussilChart").getContext("2d"));

// var function loadPlayerStats(statsObject,)