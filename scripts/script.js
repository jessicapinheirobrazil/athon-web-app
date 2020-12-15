/* pop up */

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})

/* json */
$(document).ready(function() {
    getCrimes();
});

function getCrimes() {
    $.ajax({
        type: "get",
        cache: false,
        url: "https://athon-tech-ps.herokuapp.com/crime_types",
        dataType: "text",
        error: function (request, error) {
            console.log(arguments);
            alert("Can't do because: " + error);
        },
        success: function (request) {
            var crimeTypes = JSON.parse(request);
            $(crimeTypes.data.crime_types).each(function (index) {
                var txType = crimeTypes.data.crime_types[index].tx_type;
                var crimeId = crimeTypes.data.crime_types[index].id_crime_type;
                $('#typeofcrime').append($("<option />").val(crimeId).text(txType));
            });
        }   
    });
}

// Script do Datepicker suspenso, para questões de estudo! :D

// import DateRangePicker from './node_modules/vanillajs-datepicker/js/DateRangePicker.js';
// const elem = document.getElementById('daterangepicker');
// const rangepicker = new DateRangePicker(elem, {
//   // (cód.)
// }); 