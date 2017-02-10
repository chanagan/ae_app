var showGrid = false;
var currentDate, currDateTime;
var execDate, thisDate;
var execDatePcs;

function getDispTime(fullDate) {
    if (fullDate.length) {
        var tmpDatPcs = fullDate.split(':');
        return tmpDatPcs;
    } else {
        return ['', ''];
    }
}

function gridCol(colDtaFld, colLabel, colEdit) {
    this.dataFld = colDtaFld; // colObj.act_takeoff
    this.label = colLabel; // Actual<br>Takeoff
    this.typEdit = colEdit; // true
}
var gridColumns;

function setupGridCols() {
    var tmpGrdCol;
    gridColumns = new Array();

    //  tmpGrdCol = new gridCol('', '', false);
    //    gridColumns.push(tmpGrdCol);

    // tmpGrdCol = new gridCol('mission_briefed', 'Flt<br />Brf', 'yn');
    // gridColumns.push(tmpGrdCol);
    tmpGrdCol = new gridCol('config', 'Config', false);
    gridColumns.push(tmpGrdCol);
    tmpGrdCol = new gridCol('callsign', 'Callsign /<br /> Tail #', false);
    gridColumns.push(tmpGrdCol);
    tmpGrdCol = new gridCol('loc_fm', 'FM', false);
    gridColumns.push(tmpGrdCol);
    tmpGrdCol = new gridCol('loc_to', 'TO', false);
    gridColumns.push(tmpGrdCol);
    tmpGrdCol = new gridCol('', 'Sched<br />Takeoff', false);
    gridColumns.push(tmpGrdCol);
    tmpGrdCol = new gridCol('act_takeoff', 'Actual<br />Takeoff', 'dtg');
    gridColumns.push(tmpGrdCol);
    tmpGrdCol = new gridCol('land_dtg_sked', 'Sched<br />Landing', 'dtg');
    gridColumns.push(tmpGrdCol);
    tmpGrdCol = new gridCol('land_dtg_act', 'Actual<br />Landing', 'dtg');
    gridColumns.push(tmpGrdCol);
    tmpGrdCol = new gridCol('flt_stat', 'Status<br />Reason', 'stat');
    gridColumns.push(tmpGrdCol);
    tmpGrdCol = new gridCol('flt_tacon', 'Flight<br />TACON', false);
    gridColumns.push(tmpGrdCol);
    tmpGrdCol = new gridCol('', 'Mission Type<br />Area', 'typArea');
    gridColumns.push(tmpGrdCol);
    tmpGrdCol = new gridCol('on_sta_dtg_act', 'On<br />Station', 'dtg');
    gridColumns.push(tmpGrdCol);
    tmpGrdCol = new gridCol('off_sta_dtg_act', 'Off<br />Station', 'dtg');
    gridColumns.push(tmpGrdCol);
    tmpGrdCol = new gridCol('', 'Status<br />Reason', 'stat');
    gridColumns.push(tmpGrdCol);
    // tmpGrdCol = new gridCol('asset_link', 'Link', 'yn');
    // gridColumns.push(tmpGrdCol);
    // tmpGrdCol = new gridCol('', 'ACG', false);
    // gridColumns.push(tmpGrdCol);
    tmpGrdCol = new gridCol('', 'Supported<br />Operation', false);
    gridColumns.push(tmpGrdCol);
    tmpGrdCol = new gridCol('msn_tacon', 'Mission<br />TACON', false);
    gridColumns.push(tmpGrdCol);
    tmpGrdCol = new gridCol('', 'Edit', false);
    gridColumns.push(tmpGrdCol);

    var gridRow, colObj;

    gridRow = $('#colLbls');

    $.each(gridColumns, function(idx, entry) {
        colObj = $("<td>" + entry.label + "</td>");
        gridRow.append(colObj);
    });
}


function makeGridRow(colRowObj, gridRow) {
    var tmpFld;
    var cl_UW = cl_LND = '';
    var cl_lt_TO = cl_lt_LND = '';

    // has this flight taken off and/or landed?
    cl_UW = (colRowObj.to_dtg_act) ? ' msnMarker' : '';
    cl_LND = (colRowObj.land_dtg_act) ? ' msnMarker' : '';

    // is this flight late for take off and/or landing?
    //    cl_lt_TO = (colRowObj.sked_takeoff < currDateTime) ? ' msnLate' : '';
    //    cl_lt_LND = (colRowObj.sked_landing < currDateTime) ? ' msnLate' : '';

    colRowObj.msn_msn_area = colRowObj.msn_type + ' <br /> ' + colRowObj.msn_area;
    tmpFld = colRowObj.flt_stat_rsn ? ' <br /> ' + colRowObj.flt_stat_rsn : '';
    colRowObj.flt_stat_resn = colRowObj.flt_stat + tmpFld;
    tmpFld = colRowObj.msn_stat_rsn ? ' <br /> ' + colRowObj.msn_stat_rsn : '';
    colRowObj.msn_stat_resn = colRowObj.msn_stat + tmpFld;

    //    infoImg = $("<img src='/EDB/images/iconsEDB/icons/information.png' alt='Takeoff and Landing dates are required.' />");

    //    colObj = $("<td class=' " + cl_UW + "'>&nbsp;</td>").append(infoImg);

    //    gridRow.append("<td class='canEdit " + cl_LND + "'>" + colRowObj.mission_briefed + "&nbsp;</td>");
    //  flight columns
    gridRow.append("<td class=' " + cl_UW + "'>" + colRowObj.config + "&nbsp;</td>");
    gridRow.append("<td class=' " + cl_UW + "'>" + colRowObj.callsign + "&nbsp;</td>");
    gridRow.append("<td class=' " + cl_UW + "'>" + colRowObj.to_loc_sked + "&nbsp;</td>");
    gridRow.append("<td class=' " + cl_UW + "'>" + colRowObj.land_loc_sked + "&nbsp;</td>");

    gridRow.append("<td class=' " + cl_UW + cl_lt_TO + "'>" + colRowObj.to_dtg_sked + "&nbsp;</td>");
    gridRow.append("<td class='canEdit " + cl_UW + cl_lt_TO + "'>" + colRowObj.to_dtg_act + "&nbsp;</td>");

    gridRow.append("<td class=' " + cl_LND + cl_lt_LND + "'>" + colRowObj.land_dtg_sked + "&nbsp;</td>");
    gridRow.append("<td class='canEdit " + cl_LND + cl_lt_LND + "'>" + colRowObj.land_dtg_act + "&nbsp;</td>");

    gridRow.append("<td class='canEdit " + cl_LND + "'>" + colRowObj.flt_stat_resn + "&nbsp;</td>");
    gridRow.append("<td class='canEdit " + cl_LND + "'>" + colRowObj.flt_tacon + "&nbsp;</td>");


    //  mission columns
    gridRow.append("<td class='canEdit " + cl_LND + "'>" + colRowObj.msn_msn_area + "&nbsp;</td>");

    gridRow.append("<td class='canEdit " + cl_UW + "'>" + colRowObj.on_sta_dtg_act + "&nbsp;</td>");
    gridRow.append("<td class='canEdit " + cl_UW + "'>" + colRowObj.off_sta_dtg_act + "&nbsp;</td>");

    gridRow.append("<td class='canEdit " + cl_LND + "'>" + colRowObj.msn_stat_resn + "&nbsp;</td>");
    gridRow.append("<td class='canEdit " + cl_UW + "'>" + colRowObj.msn_supp_op + "&nbsp;</td>");
    gridRow.append("<td class='canEdit " + cl_UW + "'>" + colRowObj.msn_tacon + "&nbsp;</td>");

    gridRow.data('rowData', colRowObj);

}

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
        var colRowObj = entry;
        var t1;
        var fltRow;
        fltRow = entry;
        t1 = 1234;
        gridRow = $("<tr class='msnColDta'></tr>");
        //        var colRowObj = msnRow(entry);

        makeGridRow(colRowObj, gridRow);
        gridBody.append(gridRow);

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

function setReqDate(dateText, inst) {
    var tStr;
    tStr = '1234';

    execDate = $('#requestDate').val();
    execDatePcs = execDate.split('-');

    if (execDatePcs[0] < 10) {
        execDatePcs[0] = leftPad(execDatePcs, 2);
        execDate = execDatePcs.join('-');
        $('#requestDate').val(execDate);
    };
};

function firstLoad() {
    //    alert("show plan for " + execDate);
    planLoad();

    loadEditDtgForm();

    setupGridCols();

    $('requestDate').datepicker({
        dateFormat: 'dd-M-yyyy',
        onSelect: function(dateText, inst) {
            setReqDate(dateText, inst);
        },
        buttonImage: '/icons/cal.png',
        buttonImageOnly: true
    });
};

$(document)
    .ready(function() {
        execDate = $('#hdrDateA').text();
        execDate = '20160322';
        firstLoad();
        // alert('test:' + execDate);
        // console.log("ready!");
    });