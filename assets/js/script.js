$.getJSON("https://data.cityofberkeley.info/api/views/efkp-2py4/rows.json", function (JSONdata) {
    var dataArr = JSONdata.data;
    var yearLabels = [];
    var murdMansData = [];
    var rapeData = [];
    var robData = [];
    var aggrAssaultData = [];
    /*
    var burglData = [];
    var larceTheftData = [];
    var mvTheftData = [];
    var totCrimes = [];
    */

    for (var i = 0; i < (dataArr.length); i++) {
        yearLabels.push(dataArr[i][8]);
        murdMansData.push(dataArr[i][9]);
        rapeData.push(dataArr[i][10]);
        robData.push(dataArr[i][11]);
        aggrAssaultData.push(dataArr[i][12]);
        /*
        burglData.push(dataArr[i][13]);
        larceTheftData.push(dataArr[i][14]);
        mvTheftData.push(dataArr[i][15]);
        totCrimes.push(dataArr[i][16]);
        */
    }

    var graphData = {
        labels: yearLabels,
        datasets: [
            {
                label: "Murder and Manslaughter",
                data: murdMansData
            },
            {
                label: "Rape",
                data: rapeData
            },
            {
                label: "Robbery",
                data: robData
            },
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

    var ctx = $("#graph");
    var graph = new Chart(ctx, {
        type: 'line',
        data: graphData,
        options: {
            title: {
                text: 'Berkeley Annual Crimes'
            },
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Year'
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Number of Crimes'
                    }
                }]
            }
        }
    });
});
