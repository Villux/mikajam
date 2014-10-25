
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
