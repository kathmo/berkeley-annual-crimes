$.getJSON("https://data.cityofberkeley.info/api/views/efkp-2py4/rows.json", function (JSONdata) {
    var dataCrime = JSONdata.data;

    var lblYear = [];
    var dataMurdMans = [];
    var dataRape = [];
    var dataAggrAssault = [];
    var dataRob = [];
    var dataBurgl = [];
    var dataLarce = [];
    var dataMVtheft = [];
    var dataTot = [];

    // Extract and collect data for each crime
    for (var i = 0; i < (dataCrime.length); i++) {
        lblYear.push(dataCrime[i][8]);
        dataMurdMans.push(dataCrime[i][9]);
        dataRape.push(dataCrime[i][10]);
        dataAggrAssault.push(dataCrime[i][12]);
        dataRob.push(dataCrime[i][11]);
        dataBurgl.push(dataCrime[i][13]);
        dataLarce.push(dataCrime[i][14]);
        dataMVtheft.push(dataCrime[i][15]);
        dataTot.push(dataCrime[i][16]);
    }

    // Set some default settings for all charts
    Chart.defaults.global.responsive = true;
    Chart.defaults.global.title.display = false;
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


    // Define the data for each chart

    var chartDataTotCrime = {
        labels: lblYear,
        datasets: [
            {
                label: "Total Crimes",
                data: dataTot
            }
        ]
    };

    var chartDataMurdMans = {
        labels: lblYear,
        datasets: [
            {
                label: "Criminal Homicide",
                data: dataMurdMans
            }
        ]
    };

    var chartDataRape = {
        labels: lblYear,
        datasets: [
            {
                label: "Rape",
                data: dataRape
            }
        ]
    };

    var chartDataAggrAssault = {
        labels: lblYear,
        datasets: [
            {
                label: "Aggravated Assault",
                data: dataAggrAssault
            }
        ]
    };

    var chartDataRob = {
        labels: lblYear,
        datasets: [
            {
                label: "Robbery",
                data: dataRob
            }
        ]
    };

    var chartDataBurgl = {
        labels: lblYear,
        datasets: [
            {
                label: "Burglary",
                data: dataBurgl
            }
        ]
    };

    var chartDataLarce = {
        labels: lblYear,
        datasets: [
            {
                label: "Larceny (Excluding Motor Vehicle Theft)",
                data: dataLarce
            }
        ]
    };

    var chartDataMVtheft = {
        labels: lblYear,
        datasets: [
            {
                label: "Motor Vehicle Theft",
                data: dataMVtheft
            }
        ]
    };

    var chartDataAllCrime = {
        labels: lblYear,
        datasets: [
            {
                label: "Criminal Homicide",
                data: dataMurdMans,
                backgroundColor: "rgba(255, 32, 82, .8)"
            },
            {
                label: "Rape",
                data: dataRape,
                backgroundColor: "rgba(255, 140, 0, .8)"
            },
            {
                label: "Aggravated Assault",
                data: dataAggrAssault,
                backgroundColor: "rgba(253, 238, 0, .8)"
            },
            {
                label: "Robbery",
                data: dataRob,
                backgroundColor: "rgba(3, 192, 60, .8)"
            },
            {
                label: "Burglary",
                data: dataBurgl,
                backgroundColor: "rgba(30, 144, 255, .8)"
            },
            {
                label: "Theft (Larceny)",
                data: dataLarce,
                backgroundColor: "rgba(50, 18, 122, .8)"
            },
            {
                label: "Theft (Motor Vehicle)",
                data: dataMVtheft,
                backgroundColor: "rgba(148, 0, 211, .8)"
            }
        ]
    };

    // Define the x-axes for all charts
    var xAxesOptions = [{
        scaleLabel: {
            display: true,
            labelString: 'Year'
        }
    }];


    // Define the charts

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
                        labelString: 'Crimes'
                    }
                }]
            }
        }
    });
});
