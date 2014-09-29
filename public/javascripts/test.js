$(document).ready(function() {
    if ($(window).width() < 600 && $(window).height() <500) {
      $('#fullpage').fullpage({
        sectionsColor: ['#525252', '#525252', '#525252', '#525252'],
        anchors: ['Home', 'Players', 'thirdPage', 'fourthPage'],
        menu: '#menu',
        css3: true,
        scrollOverflow: true,
        afterLoad: function(anchorLink, index){
            if(anchorLink != 'Players'){
                  $('.fadeElement').hide();
            }
            //using anchorLink
            if(anchorLink == 'Players'){
              mikaChart.Bar(dataMika, options)
            }
        },
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
          if(anchorLink == 'Players' && slideIndex == 1){
            mikaChart.Bar(dataMika, options)
          }
        },
        onSlideLeave: function(anchorLink, index, slideIndex, direction){
          //
        }
      });
    }
    else {
      console.log("big screen");
      var test =$(window).width();
      console.log(test);
      $('#fullpage').fullpage({
        sectionsColor: ['#525252', '#525252', '#525252', '#525252'],
        anchors: ['Home', 'Players', 'thirdPage', 'fourthPage'],
        menu: '#menu',
        css3: true,
        scrollOverflow: false,
        afterLoad: function(anchorLink, index){
            if(anchorLink != 'Players'){
              //
            }
            //using anchorLink
            if(anchorLink == 'Players'){
              mikaChart.Bar(dataMika, options)
            }
        },
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
          if(anchorLink == 'Players' && slideIndex == 1){
            mikaChart.Bar(dataMika, options)
          }
        },
        onSlideLeave: function(anchorLink, index, slideIndex, direction){
          //
        }
      });
    }


    // $('#bigtext').bigtext({
    //   minfontsize: 72 // default is null
    // });
    // $('#bigtext').bigtext();

    $( ".fltext .slider:first" ).fadeIn( "slow", function() {
      $( ".fltext .slider" ).slideDown( "slow", function() {
        $( ".fltext .fader" ).fadeIn( "slow", function() {
          // Animation complete.
        });
      });
    });


    function iedetect(v) {
      var r = RegExp('msie' + (!isNaN(v) ? ('\\s' + v) : ''), 'i');
      return r.test(navigator.userAgent);
    }

    // Wait until the video meta data has loaded
    $('#section1 video').on('loadedmetadata', function() {
      console.log(screen.width);
      console.log(screen.height);
      var x = $(window).height();
      var y = $(window).width();
      console.log(x);
      console.log(y);
      if (screen.width <= 1200) {
        $("#canvas").css( "color", "red" );
        return;
      }
      var $width, $height, // Width and height of screen
        $vidwidth = this.videoWidth, // Width of video (actual width)
        $vidheight = this.videoHeight, // Height of video (actual height)
        $aspectRatio = $vidwidth / $vidheight; // The ratio the video's height and width are in

      (adjSize = function() { // Create function called adjSize
        $width = $(window).width(); // Width of the screen
        $height = $(window).height(); // Height of the screen

        $boxRatio = $width / $height; // The ratio the screen is in

        $adjRatio = $aspectRatio / $boxRatio; // The ratio of the video divided by the screen size

        // Set the container to be the width and height of the screen
        $('#section1').css({'width' : $width+'px', 'height' : $height+'px'});

        if($boxRatio < $aspectRatio) { // If the screen ratio is less than the aspect ratio..
          // Set the width of the video to the screen size multiplied by $adjRatio
          $vid = $('#section1 video').css({'width' : $width*$adjRatio+'px'});
        } else {
          // Else just set the video to the width of the screen/container
          $vid = $('#section1 video').css({'width' : $width+'px'});
        }

      })(); // Run function immediately
      // Run function also on window resize.
      $(window).resize(adjSize);
      $('#video')[0].play();
      $( "#pheader" ).fadeIn( 10000, 'swing', function() {
        // Animation complete.
      });
    });

    //chart stuff
    var data = {
    labels: ["Skill1", "Skill2", "Skill3", "Skill4", "Skill5"],
    datasets: [
        {
            label: "Skill",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 90, 81, 56]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 96]
        }]
    };



    var dataKimmo = {
        labels: ["scoring", "defence", "rebounding", "speed", "passing|IQ", "hustle"],
        datasets: [
            {
                label: "Skills",
                fillColor: "rgba(255, 255, 255, 0.68)",
                strokeColor: "rgba(199, 156, 156, 0.82)",
                highlightFill: "rgba(255, 85, 85, 0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: [10, 30, 43, 70, 56, 78]
            }
        ]
    };
    var ctx2 = document.getElementById("kimmoChart").getContext("2d");
    var myBarChart = new Chart(ctx2).Bar(dataKimmo, options);


});
var options = {
  datasetStrokeWidth : 2,
  scaleShowLabels : true,
  pointLabelFontColor : "#000000",
  angleLineColor : "rgba(0,0,0,0.7)",
  scaleLineColor: "rgba(0,0,0,0.2)",
  animationSteps: 200,
  responsive: false,
  label : 'Sleep',
  scaleFontSize: 13,
  scaleFontStyle: "normal",
  scaleFontColor: "#000000",

};

var ctx;

// Data Mika Linnaluoma
var dataMika = {
    labels: ["scoring", "defence", "rebounding", "passing|IQ", "speed", "hustle", "average"],
    datasets: [
        {
            label: "Skills",
            fillColor: "rgba(225, 238, 255, 0.69)",
            strokeColor: "rgba(199, 198, 198, 0.82)",
            highlightFill: "rgba(86, 164, 254, 0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [70, 70, 60, 65, 100, 80, 74]
        }
    ]
};
ctx = document.getElementById("mikaChart").getContext("2d");
var mikaChart = new Chart(ctx);
// Data Mikko Hirvonen
var dataMikko = {
    labels: ["scoring", "defence", "rebounding", "speed", "passing|IQ", "hustle", "average"],
    datasets: [
        {
            label: "Skills",
            fillColor: "rgba(255, 255, 255, 0.68)",
            strokeColor: "rgba(199, 198, 198, 0.82)",
            highlightFill: "rgba(86, 164, 254, 0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [79, 75, 70, 85, 90, 70, 78]
        }
    ]
};
// Data Tuomas Viertola
var dataTuomas = {
    labels: ["scoring", "defence", "rebounding", "speed", "passing|IQ", "hustle", "average"],
    datasets: [
        {
            label: "Skills",
            fillColor: "rgba(255, 255, 255, 0.68)",
            strokeColor: "rgba(199, 198, 198, 0.82)",
            highlightFill: "rgba(86, 164, 254, 0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [97,97,93,95,99,88,95]
        }
    ]
};
// Data Petteri Salo
var dataPetteri = {
    labels: ["scoring", "defence", "rebounding", "speed", "passing|IQ", "hustle", "average"],
    datasets: [
        {
            label: "Skills",
            fillColor: "rgba(255, 255, 255, 0.68)",
            strokeColor: "rgba(199, 198, 198, 0.82)",
            highlightFill: "rgba(86, 164, 254, 0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [85,79,75,90,74,65,78]
        }
    ]
};
// Data Jukka Rajamäki
var dataJukka = {
    labels: ["scoring", "defence", "rebounding", "speed", "passing|IQ", "hustle", "average"],
    datasets: [
        {
            label: "Skills",
            fillColor: "rgba(255, 255, 255, 0.68)",
            strokeColor: "rgba(199, 198, 198, 0.82)",
            highlightFill: "rgba(86, 164, 254, 0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [90,80,90,88,70,79,83]
        }
    ]
};
// Data Jukka Heino
var dataJukkah = {
    labels: ["scoring", "defence", "rebounding", "speed", "passing|IQ", "hustle", "average"],
    datasets: [
        {
            label: "Skills",
            fillColor: "rgba(255, 255, 255, 0.68)",
            strokeColor: "rgba(199, 198, 198, 0.82)",
            highlightFill: "rgba(86, 164, 254, 0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [65,90,68,75,85,91,79]
        }
    ]
};
// Data Kristian Lindfors
var dataKristian = {
    labels: ["scoring", "defence", "rebounding", "speed", "passing|IQ", "hustle", "average"],
    datasets: [
        {
            label: "Skills",
            fillColor: "rgba(255, 255, 255, 0.68)",
            strokeColor: "rgba(199, 198, 198, 0.82)",
            highlightFill: "rgba(86, 164, 254, 0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [60,65,85,65,85,100,77]
        }
    ]
};
// Data Jussi Malminen
var dataJussi = {
    labels: ["scoring", "defence", "rebounding", "speed", "passing|IQ", "hustle", "average"],
    datasets: [
        {
            label: "Skills",
            fillColor: "rgba(255, 255, 255, 0.68)",
            strokeColor: "rgba(199, 198, 198, 0.82)",
            highlightFill: "rgba(86, 164, 254, 0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [74,79,75,95,80,87,82]
        }
    ]
};
// Data Riku Lempiä
var dataRiku = {
    labels: ["scoring", "defence", "rebounding", "speed", "passing|IQ", "hustle", "average"],
    datasets: [
        {
            label: "Skills",
            fillColor: "rgba(255, 255, 255, 0.68)",
            strokeColor: "rgba(199, 198, 198, 0.82)",
            highlightFill: "rgba(86, 164, 254, 0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [83,91,97,83,69,97,87]
        }
    ]
};
// Data Olli Harju
var dataOlli = {
    labels: ["scoring", "defence", "rebounding", "speed", "passing|IQ", "hustle", "average"],
    datasets: [
        {
            label: "Skills",
            fillColor: "rgba(255, 255, 255, 0.68)",
            strokeColor: "rgba(199, 198, 198, 0.82)",
            highlightFill: "rgba(86, 164, 254, 0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [55,60,79,65,77,85,70]
        }
    ]
};
// Data Jaakko Lievonen
var dataJaakko = {
    labels: ["scoring", "defence", "rebounding", "speed", "passing|IQ", "hustle", "average"],
    datasets: [
        {
            label: "Skills",
            fillColor: "rgba(255, 255, 255, 0.68)",
            strokeColor: "rgba(199, 198, 198, 0.82)",
            highlightFill: "rgba(86, 164, 254, 0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [55,60,88,55,70,83,69]
        }
    ]
};
// Data Kimmo Reunila
var dataKimmo = {
    labels: ["scoring", "defence", "rebounding", "speed", "passing|IQ", "hustle", "average"],
    datasets: [
        {
            label: "Skills",
            fillColor: "rgba(255, 255, 255, 0.68)",
            strokeColor: "rgba(199, 156, 156, 0.82)",
            highlightFill: "rgba(255, 85, 85, 0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [70,80,80,76,83,85,79]
        }
    ]
};
