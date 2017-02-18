    var selGridRowObj;

    function editDTG(gridRow) {
        var tStr;
        var selColIdx = $(gridRow.target.cellIndex)[0];

        var thisGridCols = gridColumns[selColIdx];
        var dtaFld = thisGridCols.dataFld;
        var dtaFldDtg = dtaFld + '_dtg';

        selGridRowObj = gridRow.target.parentNode;
        var selRowObj = $(selGridRowObj).data().rowData;
        //    gridRow.data('rowData', colRowObj);


        // show the form
        $('#editDtgForm').dialog('option', 'title', selRowObj.callsign);
        $('#editDtgForm').dialog('open');

        // display which item we're updating
        $(selGridRowObj).addClass('ui-state-highlight');

        $('#cellLabel').html(thisGridCols.label);

        var tmpHour, tmpMin, tmpDate;

        tmpDate = selRowObj[dtaFld];

        if (tmpDate === null) {
            tmpDate = execDate;
        }

        $('#textDat').val(tmpDate);

        $('#textDat').attr({
            defaultValue: (tmpDate)
        });

        $('#textDat').datepicker('setDate', tmpDate);

        tStr = 'abcde';
    }

    function canxEditDtgForm() {
        $(selGridRowObj).removeClass('ui-state-highlight');
    }
