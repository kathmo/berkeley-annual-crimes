$.getJSON("https://data.cityofberkeley.info/api/views/efkp-2py4/rows.json", function (JSONdata) {
    var crimeData = JSONdata.data;

    var yearLabels = [];
    var murdMansData = [];
    var rapeData = [];
    var aggrAssaultData = [];
    var robData = [];
    var burglData = [];
    var larceData = [];
    var mvTheftData = [];
    var totCrimeData = [];

    // Extract and collect data for each crime
    for (var i = 0; i < (crimeData.length); i++) {
        yearLabels.push(crimeData[i][8]);
        murdMansData.push(crimeData[i][9]);
        rapeData.push(crimeData[i][10]);
        aggrAssaultData.push(crimeData[i][12]);
        robData.push(crimeData[i][11]);
        burglData.push(crimeData[i][13]);
        larceData.push(crimeData[i][14]);
        mvTheftData.push(crimeData[i][15]);
        totCrimeData.push(crimeData[i][16]);
    }

    var allCrimesChartData = {
        labels: yearLabels,
        datasets: [
            {
                label: "Murder and Manslaughter",
                data: murdMansData,
                backgroundColor: "rgba(255, 32, 82, .8)"
            },
            {
                label: "Rape",
                data: rapeData,
                backgroundColor: "rgba(255, 140, 0, .8)"
            },
            {
                label: "Aggravated Assault",
                data: aggrAssaultData,
                backgroundColor: "rgba(253, 238, 0, .8)"
            },
            {
                label: "Robbery",
                data: robData,
                backgroundColor: "rgba(3, 192, 60, .8)"
            },
            {
                label: "Burglary",
                data: burglData,
                backgroundColor: "rgba(30, 144, 255, .8)"
            },
            {
                label: "Theft (Larceny)",
                data: larceData,
                backgroundColor: "rgba(50, 18, 122, .8)"
            },
            {
                label: "Theft (Motor Vehicle)",
                data: mvTheftData,
                backgroundColor: "rgba(148, 0, 211, .8)"
            }
        ]
    };

    var totCrimesChartData = {
        labels: yearLabels,
        datasets: [
            {
                label: "Total Crimes",
                data: totCrimeData
            }
        ]
    };

    var murdMansChartData = {
        labels: yearLabels,
        datasets: [
            {
                label: "Murder and Manslaughter",
                data: murdMansData
            }
        ]
    };

    var rapeChartData = {
        labels: yearLabels,
        datasets: [
            {
                label: "Rape",
                data: rapeData
            }
        ]
    };

    var aggrAssaultChartData = {
        labels: yearLabels,
        datasets: [
            {
                label: "Aggravated Assault",
                data: aggrAssaultData
            }
        ]
    };

    var robChartData = {
        labels: yearLabels,
        datasets: [
            {
                label: "Robbery",
                data: robData
            }
        ]
    };

    var burglChartData = {
        labels: yearLabels,
        datasets: [
            {
                label: "Burglary",
                data: burglData
            }
        ]
    };

    var larceChartData = {
        labels: yearLabels,
        datasets: [
            {
                label: "Theft (Larceny)",
                data: larceData
            }
        ]
    };

    var mvTheftChartData = {
        labels: yearLabels,
        datasets: [
            {
                label: "Theft (Motor Vehicle)",
                data: mvTheftData
            }
        ]
    };


    // Set some default settings for all charts
    Chart.defaults.global.responsive = true;
    Chart.defaults.global.title.display = true;
    Chart.defaults.global.elements.line.tension = 0;
    Chart.defaults.global.elements.line.fill = false;
    Chart.defaults.global.elements.point.radius = 5;

    var allCrimesCtx = $('#all-crimes-graph');
    var totCrimesCtx = $("#tot-crimes-graph");
    var murdMansCtx = $("#murd-mans-graph");
    var rapeCtx = $("#rape-graph");
    var aggrAssaultCtx = $("#aggr-assault-graph");
    var robCtx = $("#rob-graph");
    var burglCtx = $("#burgl-graph");
    var larceCtx = $("#larce-theft-graph");
    var mvTheftCtx = $("#mv-theft-graph");

    var xAxesOptions = [{
        scaleLabel: {
            display: true,
            labelString: 'Year'
        }
    }];

    var allCrimesChart = new Chart(allCrimesCtx, {
        type: 'bar',
        data: allCrimesChartData,
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

    var totCrimesChart = new Chart(totCrimesCtx, {
        type: 'line',
        data: totCrimesChartData,
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
        data: murdMansChartData,
        options: {
            title: {
                text: 'Murder and Manslaughter'
            },
            scales: {
                xAxes: xAxesOptions,
                yAxes: [{
                    ticks: {
                        min: 0
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Number of Murders and Manslaughters'
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
        data: rapeChartData,
        options: {
            title: {
                text: 'Rape'
            },
            scales: {
                xAxes: xAxesOptions,
                yAxes: [{
                    ticks: {
                        min: 0
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Number of Rapes'
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
        data: aggrAssaultChartData,
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
        data: robChartData,
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
        data: burglChartData,
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
        data: larceChartData,
        options: {
            title: {
                text: 'Theft (Larceny)'
            },
            scales: {
                xAxes: xAxesOptions,
                yAxes: [{
                    ticks: {
                        min: 0
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Number of Thefts (Larcenies)'
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
        data: mvTheftChartData,
        options: {
            title: {
                text: 'Theft (Motor Vehicle)'
            },
            scales: {
                xAxes: xAxesOptions,
                yAxes: [{
                    ticks: {
                        min: 0
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Number of Thefts (Motor Vehicles)'
                    }
                }]
            },
            legend: {
                display: false
            }
        }
    });
});
