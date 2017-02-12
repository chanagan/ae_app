function editDTG(gridRow) {
    var tStr;
    var selColIdx = $(gridRow.target.cellIndex)[0];

    var thisGridCols = gridColumns[selColIdx];
    var dtaFld = thisGridCols.dataFld;
    var dtaFldDtg = dtaFld + '_dtg';

    var selGridRowObj = gridRow.target.parentNode;
    var selRowObj = $(selGridRowObj).data().rowData;
    //    gridRow.data('rowData', colRowObj);

    tStr = 'abcd';
}