var execDate;

function planLoadSuccess(data, textStatus) {
    // so now make a grid out of the JSON object we came in with

    //    var flt_json = JSON.parse(data);
    var flt_json = data.flight;
    var t1 = 1234;

    // 1 and 2 - not using block separators (US,RS,GS), so
    // the thing is already parsed into flight and mission fields

    var gridBody;
    gridBody = $("#gridTblBdy");
    gridBody.empty();

    $.each(flt_json, function(idx, entry) {
        var t1;
        var fltRow;
        fltRow = entry;
        t1 = 1234;
    })
}

function planLoad() {
    if (execDate.length < 3) {
        return;
    }

    var tStr = '124';
    var showDebug = false;
    tStr = 'abcd';

    $.ajax({
        //        cache: false,
        type: 'GET',
        dataType: 'json',
        //        url: "/EDB/missions/air_exec/getMissionGrid.pl",
        //        url: "http://localhost:3001/get_flights/" + '03-22-2016',
        url: "http://localhost:3001/get_flights/" + execDate,
        processData: true,
        //        data: "03-22-2016",
        success: function(data, textStatus, zz) {
            // if (showDebug) {
            //     $('#plTrail').html(data);
            //     showTrail();
            // }
            planLoadSuccess(data, textStatus);
            //                planLoadSuccess("not a chance", textStatus);
            var tStr = '1234';
            tStr = 'abcd';
        },
        error: function(reqObj, textStatus, errorThrown) {
            statusLine = 'Air Plan Load: . . ' + execDate + ' . . ' + reqObj.statusText;
            alert(statusLine);
        },
        complete: function(reqObj, textStatus) {
            statusLine = 'Air Plan Load: . . ' + execDate + ' . . ' + reqObj.statusText;
            //            document.parentWindow.status = statusLine;

            // if (showGrid == true) {
            //     $('#plTrail').html(reqObj.responseText);
            //     showTrail();
            // }

        }
    });
}

function firstLoad() {
    alert("show plan for " + execDate);
    planLoad();

}

$(document)
    .ready(function() {
        execDate = $('#hdrDateA').text();
        firstLoad();
        // alert('test:' + execDate);
        // console.log("ready!");
    });