function editDTG(gridRow) {
    var tStr;
    var selColIdx = $(gridRow.target.cellIndex)[0];

    var thisGridCols = gridColumns[selColIdx];
    var dtaFld = thisGridCols.dataFld;
    var dtaFldDtg = dtaFld + '_dtg';

    var selGridRowObj = gridRow.target.parentNode;
    var selRowObj = $(selGridRowObj).data().rowData;
    //    gridRow.data('rowData', colRowObj);


    // show the form
    $('#editDtgForm').dialog('option', 'title', selRowObj.callsign);
    $('#editDtgForm').dialog('open');

    // display which item we're updating
    $('#cellLabel').html(thisGridCols.label);
    tStr = 'abcd';
}