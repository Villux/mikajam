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

// edit roster fotos
function rosterMargin() {
  var rosterBox = $('#conTeam').width();
  var marginSizeCon = (rosterBox - 30 - 0.7*rosterBox)/14;
  var marginSizeMas = (rosterBox - 30 - 0.6*rosterBox)/12;
  $('.photoContainerCon').css("margin","0px " + marginSizeCon + "px");
  $('.photoContainerMas').css("margin","0px " + marginSizeMas + "px");
}
