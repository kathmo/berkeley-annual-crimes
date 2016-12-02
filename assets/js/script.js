// var ctx = $("#graph");
var ctx = document.getElementById("graph");

$.getJSON("https://data.cityofberkeley.info/api/views/efkp-2py4/rows.json", function (JSONdata) {
    var dataArr = JSONdata.data;
    console.log(dataArr);
    console.log(dataArr[0][8]);
});
