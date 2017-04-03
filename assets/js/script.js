// json at the source here: https://data.cityofberkeley.info/api/views/efkp-2py4/rows.json
$.getJSON("https://cdn.rawgit.com/kathmo/berkeley-annual-crimes/master/assets/data/Berkeley_PD_UCR_-_Annual_Part_I_Crimes.json", function (JSONdata) {
    var dataCrime = JSONdata.data;

    var lblYear = [];
    var dataMurdMans = [];
    var dataRape = [];
    var dataAggrAssault = [];
    var dataRob = [];
    var dataBurgl = [];
    var dataLarce = [];
    var dataMVtheft = [];
    var dataTotCrime = [];

    // Extract and collect data for each crime
    for (var i = 0; i < (dataCrime.length - 1); i++) {
        lblYear.push(dataCrime[i][8]);
        dataMurdMans.push(dataCrime[i][9]);
        dataRape.push(dataCrime[i][10]);
        dataAggrAssault.push(dataCrime[i][12]);
        dataRob.push(dataCrime[i][11]);
        dataBurgl.push(dataCrime[i][13]);
        dataLarce.push(dataCrime[i][14]);
        dataMVtheft.push(dataCrime[i][15]);
        dataTotCrime.push(dataCrime[i][16]);
    }

    // Set some default settings for all charts
    Chart.defaults.global.responsive = true;
    Chart.defaults.global.title.display = false;
    Chart.defaults.global.defaultFontColor = '#333333';
    Chart.defaults.global.elements.line.tension = 0;
    Chart.defaults.global.elements.line.fill = false;
    Chart.defaults.global.elements.point.radius = 5;

    var totCrimeCtx = $("#tot-crime-graph");
    var murdMansCtx = $("#crim-hom-graph");
    var rapeCtx = $("#rape-graph");
    var aggrAssaultCtx = $("#aggr-assault-graph");
    var robCtx = $("#rob-graph");
    var burglCtx = $("#burgl-graph");
    var larceCtx = $("#larce-theft-graph");
    var mvTheftCtx = $("#mv-theft-graph");
    var allCrimeCtx = $('#all-crime-graph');

    // Define data colors
    var colorTotCrime = "rgba(33, 33, 33, .8)";
    var colorMurdMans = "rgba(196, 30, 27, .8)";
    var colorRape = "rgba(0, 140, 153, .8)";
    var colorAggrAssault = "rgba(255, 167, 9, .8)";
    var colorRob = "rgba(138, 102, 76, .8)";
    var colorBurgl = "rgba(0, 81, 172, .8)";
    var colorLarce = "rgba(50, 18, 122, .8)";
    var colorMVtheft = "rgba(155, 7, 94, .8)";

    // Define the data for each chart

    var chartDataTotCrime = {
        labels: lblYear,
        datasets: [
            {
                label: "Total Crimes",
                data: dataTotCrime,
                borderColor: colorTotCrime,
                backgroundColor: colorTotCrime
            }
        ]
    };

    var chartDataMurdMans = {
        labels: lblYear,
        datasets: [
            {
                label: "Criminal Homicide",
                data: dataMurdMans,
                borderColor: colorMurdMans,
                backgroundColor: colorMurdMans
            }
        ]
    };

    var chartDataRape = {
        labels: lblYear,
        datasets: [
            {
                label: "Rape",
                data: dataRape,
                borderColor: colorRape,
                backgroundColor: colorRape
            }
        ]
    };

    var chartDataAggrAssault = {
        labels: lblYear,
        datasets: [
            {
                label: "Aggravated Assault",
                data: dataAggrAssault,
                borderColor: colorAggrAssault,
                backgroundColor: colorAggrAssault
            }
        ]
    };

    var chartDataRob = {
        labels: lblYear,
        datasets: [
            {
                label: "Robbery",
                data: dataRob,
                borderColor: colorRob,
                backgroundColor: colorRob
            }
        ]
    };

    var chartDataBurgl = {
        labels: lblYear,
        datasets: [
            {
                label: "Burglary",
                data: dataBurgl,
                borderColor: colorBurgl,
                backgroundColor: colorBurgl
            }
        ]
    };

    var chartDataLarce = {
        labels: lblYear,
        datasets: [
            {
                label: "Larceny (Excluding Motor Vehicle Theft)",
                data: dataLarce,
                borderColor: colorLarce,
                backgroundColor: colorLarce
            }
        ]
    };

    var chartDataMVtheft = {
        labels: lblYear,
        datasets: [
            {
                label: "Motor Vehicle Theft",
                data: dataMVtheft,
                borderColor: colorMVtheft,
                backgroundColor: colorMVtheft
            }
        ]
    };

    var chartDataAllCrime = {
        labels: lblYear,
        datasets: [
            {
                label: "Criminal Homicide",
                data: dataMurdMans,
                borderColor: colorMurdMans,
                backgroundColor: colorMurdMans
            },
            {
                label: "Rape",
                data: dataRape,
                borderColor: colorRape,
                backgroundColor: colorRape
            },
            {
                label: "Aggravated Assault",
                data: dataAggrAssault,
                borderColor: colorAggrAssault,
                backgroundColor: colorAggrAssault
            },
            {
                label: "Robbery",
                data: dataRob,
                borderColor: colorRob,
                backgroundColor: colorRob
            },
            {
                label: "Burglary",
                data: dataBurgl,
                borderColor: colorBurgl,
                backgroundColor: colorBurgl
            },
            {
                label: "Larceny (Excluding Motor Vehicle Theft)",
                data: dataLarce,
                borderColor: colorLarce,
                backgroundColor: colorLarce
            },
            {
                label: "Motor Vehicle Theft",
                data: dataMVtheft,
                borderColor: colorMVtheft,
                backgroundColor: colorMVtheft
            }
        ]
    };

    // Define the x-axes for all charts
    var xAxesOptions = [{
        scaleLabel: {
            display: true,
            fontStyle: 'bold',
            labelString: 'Year'
        }
    }];


    // Define charts

    var totCrimeChart = new Chart(totCrimeCtx, {
        type: 'line',
        data: chartDataTotCrime,
        options: {
            title: {
                text: 'Total Crimes'
            },
            scales: {
                xAxes: xAxesOptions,
                yAxes: [{
                    ticks: {
                        min: 0
                    },
                    scaleLabel: {
                        display: true,
                        fontStyle: 'bold',
                        labelString: 'Number of Crimes'
                    }
                }]
            },
            legend: {
                display: false
            }
        }
    });

    var murdMansChart = new Chart(murdMansCtx, {
        type: 'line',
        data: chartDataMurdMans,
        options: {
            title: {
                text: 'Criminal Homicide'
            },
            scales: {
                xAxes: xAxesOptions,
                yAxes: [{
                    ticks: {
                        min: 0
                    },
                    scaleLabel: {
                        display: true,
                        fontStyle: 'bold',
                        labelString: 'Number of Criminal Homicides'
                    }
                }]
            },
            legend: {
                display: false
            }
        }
    });

    var rapeChart = new Chart(rapeCtx, {
        type: 'line',
        data: chartDataRape,
        options: {
            title: {
                text: 'Forcible Rape'
            },
            scales: {
                xAxes: xAxesOptions,
                yAxes: [{
                    ticks: {
                        min: 0
                    },
                    scaleLabel: {
                        display: true,
                        fontStyle: 'bold',
                        labelString: 'Number of Forcible Rapes'
                    }
                }]
            },
            legend: {
                display: false
            }
        }
    });

    var aggrAssaultChart = new Chart(aggrAssaultCtx, {
        type: 'line',
        data: chartDataAggrAssault,
        options: {
            title: {
                text: 'Aggravated Assault'
            },
            scales: {
                xAxes: xAxesOptions,
                yAxes: [{
                    ticks: {
                        min: 0
                    },
                    scaleLabel: {
                        display: true,
                        fontStyle: 'bold',
                        labelString: 'Number of Aggravated Assaults'
                    }
                }]
            },
            legend: {
                display: false
            }
        }
    });

    var robChart = new Chart(robCtx, {
        type: 'line',
        data: chartDataRob,
        options: {
            title: {
                text: 'Robbery'
            },
            scales: {
                xAxes: xAxesOptions,
                yAxes: [{
                    ticks: {
                        min: 0
                    },
                    scaleLabel: {
                        display: true,
                        fontStyle: 'bold',
                        labelString: 'Number of Robberies'
                    }
                }]
            },
            legend: {
                display: false
            }
        }
    });

    var burglChart = new Chart(burglCtx, {
        type: 'line',
        data: chartDataBurgl,
        options: {
            title: {
                text: 'Burglary'
            },
            scales: {
                xAxes: xAxesOptions,
                yAxes: [{
                    ticks: {
                        min: 0
                    },
                    scaleLabel: {
                        display: true,
                        fontStyle: 'bold',
                        labelString: 'Number of Burglaries'
                    }
                }]
            },
            legend: {
                display: false
            }
        }
    });

    var larceChart = new Chart(larceCtx, {
        type: 'line',
        data: chartDataLarce,
        options: {
            title: {
                text: 'Larceny (Excluding Motor Vehical Thefts)'
            },
            scales: {
                xAxes: xAxesOptions,
                yAxes: [{
                    ticks: {
                        min: 0
                    },
                    scaleLabel: {
                        display: true,
                        fontStyle: 'bold',
                        labelString: 'Number of Larcenies (Excluding Motor Vehical Thefts)'
                    }
                }]
            },
            legend: {
                display: false
            }
        }
    });

    var mvTheftChart = new Chart(mvTheftCtx, {
        type: 'line',
        data: chartDataMVtheft,
        options: {
            title: {
                text: 'Motor Vehicle Theft'
            },
            scales: {
                xAxes: xAxesOptions,
                yAxes: [{
                    ticks: {
                        min: 0
                    },
                    scaleLabel: {
                        display: true,
                        fontStyle: 'bold',
                        labelString: 'Number of Motor Vehicle Thefts'
                    }
                }]
            },
            legend: {
                display: false
            }
        }
    });

    var allCrimeChart = new Chart(allCrimeCtx, {
        type: 'bar',
        data: chartDataAllCrime,
        options: {
            title: {
                text: 'All Crimes'
            },
            scales: {
                xAxes: [{
                    stacked: true,
                    scaleLabel: {
                        display: true,
                        fontStyle: 'bold',
                        labelString: 'Year'
                    }
                }],
                yAxes: [{
                    stacked: true,
                    ticks: {
                        min: 0
                    },
                    scaleLabel: {
                        display: true,
                        fontStyle: 'bold',
                        labelString: 'Crimes'
                    }
                }]
            }
        }
    });
});
