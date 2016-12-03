$.getJSON("https://data.cityofberkeley.info/api/views/efkp-2py4/rows.json", function (JSONdata) {
    var dataArr = JSONdata.data;
    var yearLabels = [];
    var murdMansData = [];

    console.log(dataArr[0][8]);

    for (var i = 0; i < (dataArr.length - 1); i++) {
        yearLabels.push(dataArr[i][8]);
        murdMansData.push(dataArr[i][9]);
    }

    console.log(yearLabels[5]);
    console.log(murdMansData[5]);

    var graphData = {
        labels: yearLabels,
        datasets: [
            {
                label: "Murder and Manslaughter",
                data: murdMansData
            }
        ]
    };

    var ctx = $("#graph");
    var graph = new Chart(ctx, {
        type: 'line',
        data: graphData
    });
});
