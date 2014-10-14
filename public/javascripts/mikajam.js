$(document).ready(function () {
  $("#mobile").hide();
  if ($(window).width() < 998) {
    $("#fullpage").hide();
    $("#menu").hide();
    $("#mobile").show();
  } 
  else {
    $('#fullpage').fullpage({
      sectionsColor: ['#525252', '#525252', '#525252', '#525252'],
      anchors: ['Home', 'Info', 'Rosters', 'Players'],
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
        // Mikko
        if (anchorLink === 'Players' && slideIndex === 1) {
          if (!mikkoChart) {
            var canvas = document.getElementById('mikkoChart');
            var playerBox = document.getElementById('frame');
            canvas.width = playerBox.offsetWidth - 30;
            canvas.height = playerBox.offsetHeight;
            var ctx = document.getElementById("mikkoChart").getContext("2d");
            mikkoChart = new Chart(ctx);
          }
          mikkoChart.Bar(dataMikko, optionsM);
        }
        //tuomas
        if (anchorLink === 'Players' && slideIndex === 2) {
          if (!tuomasChart) {
            var canvas = document.getElementById('tuomasChart');
            var playerBox = document.getElementById('frame');
            canvas.width = playerBox.offsetWidth - 30;
            canvas.height = playerBox.offsetHeight;
            var ctx = document.getElementById("tuomasChart").getContext("2d");
            tuomasChart = new Chart(ctx);
          }
          tuomasChart.Bar(dataTuomas, optionsM);
        }
        //petteri
        if (anchorLink === 'Players' && slideIndex === 3) {
          if (!petteriChart) {
            var canvas = document.getElementById('petteriChart');
            var playerBox = document.getElementById('frame');
            canvas.width = playerBox.offsetWidth - 30;
            canvas.height = playerBox.offsetHeight;
            var ctx = document.getElementById("petteriChart").getContext("2d");
            petteriChart = new Chart(ctx);
          }
          petteriChart.Bar(dataPetteri, optionsM);
        }
        // jukka
        if (anchorLink === 'Players' && slideIndex === 4) {
          if (!jukkaChart) {
            var canvas = document.getElementById('jukkaChart');
            var playerBox = document.getElementById('frame');
            canvas.width = playerBox.offsetWidth - 30;
            canvas.height = playerBox.offsetHeight;
            var ctx = document.getElementById("jukkaChart").getContext("2d");
            jukkaChart = new Chart(ctx);
          }
          jukkaChart.Bar(dataJukka, optionsM);
        }
        // jukkah
        if (anchorLink === 'Players' && slideIndex === 5) {
          if (!jukkahChart) {
            var canvas = document.getElementById('jukkahChart');
            var playerBox = document.getElementById('frame');
            canvas.width = playerBox.offsetWidth - 30;
            canvas.height = playerBox.offsetHeight;
            var ctx = document.getElementById("jukkahChart").getContext("2d");
            jukkahChart = new Chart(ctx);
          }
          jukkahChart.Bar(dataJukkah, optionsM);
        }
        // kristian
        if (anchorLink === 'Players' && slideIndex === 6) {
          if (!kristianChart) {
            var canvas = document.getElementById('kristianChart');
            var playerBox = document.getElementById('frame');
            canvas.width = playerBox.offsetWidth - 30;
            canvas.height = playerBox.offsetHeight;
            var ctx = document.getElementById("kristianChart").getContext("2d");
            kristianChart = new Chart(ctx);
          }
          kristianChart.Bar(dataKristian, optionsM);
        }
        // jussi
        if (anchorLink === 'Players' && slideIndex === 7) {
          if (!jussiChart) {
            var canvas = document.getElementById('jussiChart');
            var playerBox = document.getElementById('frame');
            canvas.width = playerBox.offsetWidth - 30;
            canvas.height = playerBox.offsetHeight;
            var ctx = document.getElementById("jussiChart").getContext("2d");
            jussiChart = new Chart(ctx);
          }
          jussiChart.Bar(dataJussi, optionsM);
        }
        // riku
        if (anchorLink === 'Players' && slideIndex === 8) {
          if (!rikuChart) {
            var canvas = document.getElementById('rikuChart');
            var playerBox = document.getElementById('frame');
            canvas.width = playerBox.offsetWidth - 30;
            canvas.height = playerBox.offsetHeight;
            var ctx = document.getElementById("rikuChart").getContext("2d");
            rikuChart = new Chart(ctx);
          }
          rikuChart.Bar(dataRiku, optionsM);
        }
        // olli
        if (anchorLink === 'Players' && slideIndex === 9) {
          if (!olliChart) {
            var canvas = document.getElementById('olliChart');
            var playerBox = document.getElementById('frame');
            canvas.width = playerBox.offsetWidth - 30;
            canvas.height = playerBox.offsetHeight;
            var ctx = document.getElementById("olliChart").getContext("2d");
            olliChart = new Chart(ctx);
          }
          olliChart.Bar(dataOlli, optionsM);
        }
        // jaakko
        if (anchorLink === 'Players' && slideIndex === 10) {
          if (!jaakkoChart) {
            var canvas = document.getElementById('jaakkoChart');
            var playerBox = document.getElementById('frame');
            canvas.width = playerBox.offsetWidth - 30;
            canvas.height = playerBox.offsetHeight;
            var ctx = document.getElementById("jaakkoChart").getContext("2d");
            jaakkoChart = new Chart(ctx);
          }
          jaakkoChart.Bar(dataJaakko, optionsM);
        }
        // kimmo
        if (anchorLink === 'Players' && slideIndex === 11) {
          if (!kimmoChart) {
            var canvas = document.getElementById('kimmoChart');
            var playerBox = document.getElementById('frame');
            canvas.width = playerBox.offsetWidth - 30;
            canvas.height = playerBox.offsetHeight;
            var ctx = document.getElementById("kimmoChart").getContext("2d");
            kimmoChart = new Chart(ctx);
          }
          kimmoChart.Bar(dataKimmo, optionsC);
        }
        // teemu
        if (anchorLink === 'Players' && slideIndex === 12) {
          if (!teemuChart) {
            var canvas = document.getElementById('teemuChart');
            var playerBox = document.getElementById('frame');
            canvas.width = playerBox.offsetWidth - 30;
            canvas.height = playerBox.offsetHeight;
            var ctx = document.getElementById("teemuChart").getContext("2d");
            teemuChart = new Chart(ctx);
          }
          teemuChart.Bar(dataTeemu, optionsC);
        }
        // mikkoj
        if (anchorLink === 'Players' && slideIndex === 13) {
          if (!mikkojChart) {
            var canvas = document.getElementById('mikkojChart');
            var playerBox = document.getElementById('frame');
            canvas.width = playerBox.offsetWidth - 30;
            canvas.height = playerBox.offsetHeight;
            var ctx = document.getElementById("mikkojChart").getContext("2d");
            mikkojChart = new Chart(ctx);
          }
          mikkojChart.Bar(dataMikkoj, optionsC);
        }
        // ollis
        if (anchorLink === 'Players' && slideIndex === 14) {
          if (!ollisChart) {
            var canvas = document.getElementById('ollisChart');
            var playerBox = document.getElementById('frame');
            canvas.width = playerBox.offsetWidth - 30;
            canvas.height = playerBox.offsetHeight;
            var ctx = document.getElementById("ollisChart").getContext("2d");
            ollisChart = new Chart(ctx);
          }
          ollisChart.Bar(dataOllis, optionsC);
        }
        // juhani
        if (anchorLink === 'Players' && slideIndex === 15) {
          if (!juhaniChart) {
            var canvas = document.getElementById('juhaniChart');
            var playerBox = document.getElementById('frame');
            canvas.width = playerBox.offsetWidth - 30;
            canvas.height = playerBox.offsetHeight;
            var ctx = document.getElementById("juhaniChart").getContext("2d");
            juhaniChart = new Chart(ctx);
          }
          juhaniChart.Bar(dataJuhani, optionsC);
        }
        // niklas
        if (anchorLink === 'Players' && slideIndex === 16) {
          if (!niklasChart) {
            var canvas = document.getElementById('niklasChart');
            var playerBox = document.getElementById('frame');
            canvas.width = playerBox.offsetWidth - 30;
            canvas.height = playerBox.offsetHeight;
            var ctx = document.getElementById("niklasChart").getContext("2d");
            niklasChart = new Chart(ctx);
          }
          niklasChart.Bar(dataNiklas, optionsC);
        }
        // matias
        if (anchorLink === 'Players' && slideIndex === 17) {
          if (!matiasChart) {
            var canvas = document.getElementById('matiasChart');
            var playerBox = document.getElementById('frame');
            canvas.width = playerBox.offsetWidth - 30;
            canvas.height = playerBox.offsetHeight;
            var ctx = document.getElementById("matiasChart").getContext("2d");
            matiasChart = new Chart(ctx);
          }
          matiasChart.Bar(dataMatias, optionsC);
        }
        // matiasm
        if (anchorLink === 'Players' && slideIndex === 18) {
          if (!matiasmChart) {
            var canvas = document.getElementById('matiasmChart');
            var playerBox = document.getElementById('frame');
            canvas.width = playerBox.offsetWidth - 30;
            canvas.height = playerBox.offsetHeight;
            var ctx = document.getElementById("matiasmChart").getContext("2d");
            matiasmChart = new Chart(ctx);
          }
          matiasmChart.Bar(dataMatiasm, optionsC);
        }
        // sauli
        if (anchorLink === 'Players' && slideIndex === 19) {
          if (!sauliChart) {
            var canvas = document.getElementById('sauliChart');
            var playerBox = document.getElementById('frame');
            canvas.width = playerBox.offsetWidth - 30;
            canvas.height = playerBox.offsetHeight;
            var ctx = document.getElementById("sauliChart").getContext("2d");
            sauliChart = new Chart(ctx);
          }
          sauliChart.Bar(dataSauli, optionsC);
        }
        // lauri
        if (anchorLink === 'Players' && slideIndex === 20) {
          if (!lauriChart) {
            var canvas = document.getElementById('lauriChart');
            var playerBox = document.getElementById('frame');
            canvas.width = playerBox.offsetWidth - 30;
            canvas.height = playerBox.offsetHeight;
            var ctx = document.getElementById("lauriChart").getContext("2d");
            lauriChart = new Chart(ctx);
          }
          lauriChart.Bar(dataLauri, optionsC);
        }
        // benjamin
        if (anchorLink === 'Players' && slideIndex === 21) {
          if (!benjaminChart) {
            var canvas = document.getElementById('benjaminChart');
            var playerBox = document.getElementById('frame');
            canvas.width = playerBox.offsetWidth - 30;
            canvas.height = playerBox.offsetHeight;
            var ctx = document.getElementById("benjaminChart").getContext("2d");
            benjaminChart = new Chart(ctx);
          }
          benjaminChart.Bar(dataBenjamin, optionsC);
        }
        // vili
        if (anchorLink === 'Players' && slideIndex === 22) {
          if (!viliChart) {
            var canvas = document.getElementById('viliChart');
            var playerBox = document.getElementById('frame');
            canvas.width = playerBox.offsetWidth - 30;
            canvas.height = playerBox.offsetHeight;
            var ctx = document.getElementById("viliChart").getContext("2d");
            viliChart = new Chart(ctx);
          }
          viliChart.Bar(dataVili, optionsC);
        }
        // jussil
        if (anchorLink === 'Players' && slideIndex === 23) {
          if (!jussilChart) {
            var canvas = document.getElementById('jussilChart');
            var playerBox = document.getElementById('frame');
            canvas.width = playerBox.offsetWidth - 30;
            canvas.height = playerBox.offsetHeight;
            var ctx = document.getElementById("jussilChart").getContext("2d");
            jussilChart = new Chart(ctx);
          }
          jussilChart.Bar(dataJussil, optionsC);
        }

      },
      onSlideLeave: function (anchorLink, index, slideIndex, direction) {
        //
      },
      afterResize: function() {
        location.reload();
      }
    });
    // Wait until the video meta data has loaded
  rosterMargin();

  $('#section1 video').on('loadedmetadata', function () {
    console.log("täällä");
    var x = $(window).height();
    var y = $(window).width();
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
  scaleOverride: true,
  scaleSteps: 10,
  scaleStepWidth: 10,
  scaleStartValue: 0,

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
  scaleOverride: true,
  scaleSteps: 10,
  scaleStepWidth: 10,
  scaleStartValue: 0,

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
// Data Players Hirvonen
var mikkoChart = null;
var dataMikko = {
    labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
    datasets: [
        {
            label: "Skills",
            fillColor: "rgba(29, 141, 204, 0.79)",
            strokeColor: "rgba(199, 198, 198, 0.82)",
            highlightFill: "rgba(255, 255, 255, 0.83)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [79, 75, 70, 85, 90, 70, 78]
        }
    ]
};
// Data Tuomas Viertola
var tuomasChart = null;
var dataTuomas = {
    labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
    datasets: [
        {
            label: "Skills",
            fillColor: "rgba(29, 141, 204, 0.79)",
            strokeColor: "rgba(199, 198, 198, 0.82)",
            highlightFill: "rgba(255, 255, 255, 0.83)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [97,97,93,95,99,88,95]
        }
    ]
};

// Data Petteri Salo
var dataPetteri = {
    labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
    datasets: [
        {
            label: "Skills",
            fillColor: "rgba(29, 141, 204, 0.79)",
            strokeColor: "rgba(199, 198, 198, 0.82)",
            highlightFill: "rgba(255, 255, 255, 0.83)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [85,79,75,90,74,65,78]
        }
    ]
};
var petteriChart = null;
// Data Jukka Rajamäki
var dataJukka = {
    labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
    datasets: [
        {
            label: "Skills",
            fillColor: "rgba(29, 141, 204, 0.79)",
            strokeColor: "rgba(199, 198, 198, 0.82)",
            highlightFill: "rgba(255, 255, 255, 0.83)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [90,80,90,88,70,79,83]
        }
    ]
};
var jukkaChart = null;
// Data Jukka Heino
var dataJukkah = {
    labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
    datasets: [
        {
            label: "Skills",
            fillColor: "rgba(29, 141, 204, 0.79)",
            strokeColor: "rgba(199, 198, 198, 0.82)",
            highlightFill: "rgba(255, 255, 255, 0.83)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [65,90,68,75,85,91,79]
        }
    ]
};
var jukkahChart = null;
// Data Kristian Lindfors
var dataKristian = {
    labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
    datasets: [
        {
            label: "Skills",
            fillColor: "rgba(29, 141, 204, 0.79)",
            strokeColor: "rgba(199, 198, 198, 0.82)",
            highlightFill: "rgba(255, 255, 255, 0.83)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [60,65,85,65,85,100,77]
        }
    ]
};
var kristianChart = null;
// Data Jussi Malminen
var dataJussi = {
    labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
    datasets: [
        {
            label: "Skills",
            fillColor: "rgba(29, 141, 204, 0.79)",
            strokeColor: "rgba(199, 198, 198, 0.82)",
            highlightFill: "rgba(255, 255, 255, 0.83)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [74,79,75,95,80,87,82]
        }
    ]
};
var jussiChart = null;
// Data Riku Lempiä
var dataRiku = {
    labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
    datasets: [
        {
            label: "Skills",
            fillColor: "rgba(29, 141, 204, 0.79)",
            strokeColor: "rgba(199, 198, 198, 0.82)",
            highlightFill: "rgba(255, 255, 255, 0.83)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [83,91,97,83,69,97,87]
        }
    ]
};
var rikuChart = null;
// Data Olli Harju
var dataOlli = {
    labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
    datasets: [
        {
            label: "Skills",
            fillColor: "rgba(29, 141, 204, 0.79)",
            strokeColor: "rgba(199, 198, 198, 0.82)",
            highlightFill: "rgba(255, 255, 255, 0.83)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [55,60,79,65,77,85,70]
        }
    ]
};
var olliChart = null;
// Data Jaakko Lievonen
var dataJaakko = {
    labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
    datasets: [
        {
            label: "Skills",
            fillColor: "rgba(29, 141, 204, 0.79)",
            strokeColor: "rgba(199, 198, 198, 0.82)",
            highlightFill: "rgba(255, 255, 255, 0.83)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [55,60,88,55,70,83,69]
        }
    ]
};
var jaakkoChart = null;
// ////////////////////////////
// // Contenders/////
// ////////////////////////////
// Data Kimmo Reunila
var dataKimmo = {
    labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
    datasets: [
        {
            label: "Skills",
            fillColor: "rgba(255, 66, 61, 0.79)",
            strokeColor: "rgba(199, 156, 156, 0.82)",
            highlightFill: "rgba(255, 255, 255, 0.83)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [70,80,80,76,83,85,79]
        }
    ]
};
var kimmoChart = null;
// Data Teemu Seppälä
var dataTeemu = {
    labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
    datasets: [
        {
            label: "Skills",
    fillColor: "rgba(255, 66, 61, 0.79)",
    strokeColor: "rgba(199, 156, 156, 0.82)",
    highlightFill: "rgba(255, 255, 255, 0.83)",
    highlightStroke: "rgba(220,220,220,1)",
            data: [50,65,75,55,88,75,68]
        }
    ]
};
var teemuChart = null;
// Data Mikko Jämsä
var dataMikkoj = {
    labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
    datasets: [
        {
            label: "Skills",
            fillColor: "rgba(255, 66, 61, 0.79)",
            strokeColor: "rgba(199, 156, 156, 0.82)",
            highlightFill: "rgba(255, 255, 255, 0.83)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [97,88,80,98,100,86,92]
        }
    ]
};
var mikkojChart = null;
// Data Olli Salminen
var dataOllis = {
    labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
    datasets: [
        {
            label: "Skills",
            fillColor: "rgba(255, 66, 61, 0.79)",
            strokeColor: "rgba(199, 156, 156, 0.82)",
            highlightFill: "rgba(255, 255, 255, 0.83)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [65,65,70,65,73,77,69]
        }
    ]
};
var ollisChart = null;
// Data Juhani Jämsä
var dataJuhani = {
    labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
    datasets: [
        {
            label: "Skills",
            fillColor: "rgba(255, 66, 61, 0.79)",
            strokeColor: "rgba(199, 156, 156, 0.82)",
            highlightFill: "rgba(255, 255, 255, 0.83)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [88,85,85,100,77,83,86]
        }
    ]
};
var juhaniChart = null;
// Data Niklas Lindström
var dataNiklas = {
    labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
    datasets: [
        {
            label: "Skills",
            fillColor: "rgba(255, 66, 61, 0.79)",
            strokeColor: "rgba(199, 156, 156, 0.82)",
            highlightFill: "rgba(255, 255, 255, 0.83)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [70,76,81,71,80,80,76]
        }
    ]
};
var niklasChart = null;
// Data Matias Repo
var dataMatias = {
    labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
    datasets: [
        {
            label: "Skills",
            fillColor: "rgba(255, 66, 61, 0.79)",
            strokeColor: "rgba(199, 156, 156, 0.82)",
            highlightFill: "rgba(255, 255, 255, 0.83)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [55,69,83,55,65,82,68]
        }
    ]
};
var matiasChart = null;
// Data Matias Mattila
var matiasmChart = null;
var dataMatiasm = {
  labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
  datasets: [
        {
            label: "Skills",
            fillColor: "rgba(255, 66, 61, 0.79)",
            strokeColor: "rgba(199, 156, 156, 0.82)",
            highlightFill: "rgba(255, 255, 255, 0.83)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [74, 90, 92, 71, 85, 100, 85]
        }
  ]
};
// Data Sauli Sukanen
var dataSauli = {
    labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
    datasets: [
        {
            label: "Skills",
            fillColor: "rgba(255, 66, 61, 0.79)",
            strokeColor: "rgba(199, 156, 156, 0.82)",
            highlightFill: "rgba(255, 255, 255, 0.83)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [93,88,95,89,78,79,87]
        }
    ]
};
var sauliChart = null;
// Data Lauri Jämsä
var dataLauri = {
    labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
    datasets: [
        {
            label: "Skills",
            fillColor: "rgba(255, 66, 61, 0.79)",
            strokeColor: "rgba(199, 156, 156, 0.82)",
            highlightFill: "rgba(255, 255, 255, 0.83)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [82,91,86,80,85,80,84]
        }
    ]
};
var lauriChart = null;
// Data Benjamin Kokkonen
var dataBenjamin = {
    labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
    datasets: [
        {
            label: "Skills",
            fillColor: "rgba(255, 66, 61, 0.79)",
            strokeColor: "rgba(199, 156, 156, 0.82)",
            highlightFill: "rgba(255, 255, 255, 0.83)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [60,70,75,69,70,78,70]
        }
    ]
};
var benjaminChart = null;
// Data Vili Valajärvi
var dataVili = {
    labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
    datasets: [
        {
            label: "Skills",
            fillColor: "rgba(255, 66, 61, 0.79)",
            strokeColor: "rgba(199, 156, 156, 0.82)",
            highlightFill: "rgba(255, 255, 255, 0.83)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [55,55,63,60,83,75,65]
        }
    ]
};
var viliChart = null;
// Data Jussi Lilja
var dataJussil = {
    labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
    datasets: [
        {
            label: "Skills",
            fillColor: "rgba(255, 66, 61, 0.79)",
            strokeColor: "rgba(199, 156, 156, 0.82)",
            highlightFill: "rgba(255, 255, 255, 0.83)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [67,75,64,76,80,73,73]
        }
    ]
};
var jussilChart = null;

// edit roster fotos
function rosterMargin() {
  var rosterBox = $('#conTeam').width();
  console.log(rosterBox);
  var marginSizeCon = (rosterBox - 30 - 0.7*rosterBox)/14;
  var marginSizeMas = (rosterBox - 30 - 0.6*rosterBox)/12;
  $('.photoContainerCon').css("margin","0px " + marginSizeCon + "px");
  $('.photoContainerMas').css("margin","0px " + marginSizeMas + "px");
}
