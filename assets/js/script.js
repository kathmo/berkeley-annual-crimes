$.getJSON("https://data.cityofberkeley.info/api/views/efkp-2py4/rows.json", function (JSONdata) {
    var crimesData = JSONdata.data;
    var yearLabels = [];
    var murdMansData = [];
    var rapeData = [];
    var aggrAssaultData = [];
    /*
    var robData = [];
    var burglData = [];
    var larceTheftData = [];
    var mvTheftData = [];
    */
    //var totCrimesArr = [];

    for (var i = 0; i < (crimesData.length); i++) {
        yearLabels.push(crimesData[i][8]);
        murdMansData.push(crimesData[i][9]);
        rapeData.push(crimesData[i][10]);
        aggrAssaultData.push(crimesData[i][12]);
        /*
        robData.push(crimesData[i][11]);
        burglData.push(crimesData[i][13]);
        larceTheftData.push(crimesData[i][14]);
        mvTheftData.push(crimesData[i][15]);
        */
        //totCrimesArr.push(crimesData[i][16]);
    }

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

    Chart.defaults.global.responsive = false;
    Chart.defaults.global.title.display = true;
    Chart.defaults.global.elements.line.tension = 0;
    Chart.defaults.global.elements.line.fill = false;
    Chart.defaults.global.elements.point.radius = 5;

    var murdMansCtx = $("#murd-mans-graph");
    var rapeCtx = $("#rape-graph");
    var aggrAssaultCtx = $("#aggr-assault-graph");
    /*
    var robCtx = $("#rob-graph");
    var burglCtx = $("#burgl-graph");
    var larceTheftCtx = $("#larce-theft-graph");
    var mvTheftCtx = $("#mv-theft-graph");
    */

    var xAxesOptions = [{
        scaleLabel: {
            display: true,
            labelString: 'Year'
        }
    }];

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
                    scaleLabel: {
                        display: true,
                        labelString: 'Number of Murders and Manslaughters'
                    }
                }]
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
                    scaleLabel: {
                        display: true,
                        labelString: 'Number of Rapes'
                    }
                }]
            }
        }
    });

    var aggrAssaultChart = new Chart(aggrAssaultCtx, {
        type: 'line',
        data: aggrAssaultChartData,
        options: {
            title: {
                text: 'Rape'
            },
            scales: {
                xAxes: xAxesOptions,
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Number of Rapes'
                    }
                }]
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
                    scaleLabel: {
                        display: true,
                        labelString: 'Number of Aggravated Assaults'
                    }
                }]
            }
        }
    });
});
