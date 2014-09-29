$(document).ready(function() {
    $('#fullpage').fullpage({
      sectionsColor: ['#525252', '#525252', '#525252', '#525252'],
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
      menu: '#menu',
      navigationTooltips: ['firstSlide', 'secondSlide'],
      navigation: true,
      css3: true,
      scrollOverflow: false,
      afterLoad: function(anchorLink, index){
          if(anchorLink != 'secondPage'){
                $('.fadeElement').hide();
          }
          //using anchorLink
          if(anchorLink == 'secondPage'){
              $('.fadeElement').fadeIn("slow", function() {console.log("animation completed")});
          }
      },
      afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
        $('.fadeElement').fadeIn("slow", function() {console.log("animation completed")});
      },
      onSlideLeave: function(anchorLink, index, slideIndex, direction){
        $('.fadeElement').hide();
      }
    });

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
      if (screen.width <= 600) {
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

    // Chart.defaults.global.responsive = true;
    var options = {
      datasetStrokeWidth : 2,
      pointLabelFontColor : "#444",
      angleLineColor : "rgba(0,0,0,0.7)",
      scaleLineColor: "rgba(0,0,0,0.2)",
      animationSteps: 100,
      responsive: false,
      label : 'Sleep',
    };
    var ctx = document.getElementById("myChart").getContext("2d");
    var myRadarChart = new Chart(ctx).Radar(data, options);


    var data1 = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,0.8)",
                highlightFill: "rgba(151,187,205,0.75)",
                highlightStroke: "rgba(151,187,205,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };
    var ctx2 = document.getElementById("chart").getContext("2d");
    var myBarChart = new Chart(ctx2).Bar(data1);
});
