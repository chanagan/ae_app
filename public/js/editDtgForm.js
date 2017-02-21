    var selGridRowObj;

    function editDTG(gridRow) {
        var tStr;
        var selColIdx = $(gridRow.target.cellIndex)[0];

        var thisGridCols = gridColumns[selColIdx];
        var dtaFld = thisGridCols.dataFld;
        var dtaFldDtg = dtaFld + '_dsp';
        var dtaFldDef = dtaFld + '_def';

        selGridRowObj = gridRow.target.parentNode;
        var selRowObj = $(selGridRowObj).data().rowData;
        selRowObj.__dtaFld = dtaFld;
        //    gridRow.data('rowData', colRowObj);


        // show the form
        $('#editDtgForm').dialog('option', 'title', 'Callsign: ' + selRowObj.callsign);
        $('#editDtgForm').dialog('open');

        // display which item we're updating
        $(selGridRowObj).addClass('ui-state-highlight');

        $('#cellLabel').html(thisGridCols.label);

        var tmpHour, tmpMin, tmpDate;

        tmpDate = selRowObj[dtaFld];

        // if this field is empty, try using the scheduled time instead
        if (tmpDate === null) {
            tmpDate = selRowObj[dtaFldDef];
            // tmpDate = execDate;
        }

        // $('#textDat').val(tmpDate);

        $('#textDat').attr({
            value: (tmpDate),
            defaultValue: (tmpDate)
        });

        $('#textDat').datepicker('setDate', tmpDate);

        tmpHour = tmpDate.substr(-4, 2);
        tmpMin = tmpDate.substr(-2);

        $('#hrInput').attr({
            value: (tmpHour),
            defaultValue: (tmpHour)
        });
        $('#minInput').attr({
            value: (tmpMin),
            defaultValue: (tmpMin)
        });

        tStr = 'abcde';
    }

    function canxEditDtgForm() {
        $(selGridRowObj).removeClass('ui-state-highlight');
    }

    function updDtgCell() {
        var tStr;
        var showDebug = false;
        var fldUpdValue;
        var dtaFld;

        // get the current and default values
        var newDatVal = $('#textDat').val();
        var oldDatVal = $('#textDat').attr('defaultValue');

        var newTimVal = $('#hrInput').val() +
            $('#minInput').val();
        var oldTimVal = $('#hrInput').attr('defaultValue') +
            $('#minInput').attr('defaultValue');

        // if there's no change, leave this
        if ((newDatVal == oldDatVal) &&
            (newTimVal == oldTimVal)) {
            alert('no change');
            canxEditDtgForm();
            return;
        }

        // we're here, so it must be an update
        fldUpdValue = newDatVal + ' ' + newTimVal;
        var selRowObj = $(selGridRowObj).data().rowData;
        dtaFld = selRowObj.__dtaFld;
        selRowObj[dtaFld] = fldUpdValue;

        $(selGridRowObj).empty();
        makeGridRow(selRowObj, $(selGridRowObj));

        canxEditDtgForm();

    }