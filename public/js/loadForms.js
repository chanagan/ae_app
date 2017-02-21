function loadEditDtgForm() {
    tStr = 'abcd';
    $('#editDtgForm').load('/pages/editDtgForm.html', function() {
        $('#editDtgForm').dialog({
            autoOpen: false,
            width: 350,
            height: 'auto',
            modal: true,
            beforeclose: function(event, ui) {
                canxEditDtgForm(event, ui);
            },
            buttons: {
                "Ok": function() {
                    updDtgCell();
                    $(this).dialog('close');
                },
                "Cancel": function() {
                    canxEditDtgForm();
                    $(this).dialog('close');
                }
            }
        });

        $('#textDat').datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: 'dd-M-yy',
            onSelect: function(dateText, inst) {
                setReqDate(dateText, inst);
            },
            showButtonPanel: true,
            showOn: 'button',
            buttonImage: '/icons/calendar.png',
            buttonImageOnly: true

            // dateFormat: 'yyyymmdd',
            // showButtonPanel: true,
            // changeMonth: true,
            // changeYear: true,
            // showOn: 'both',
            // autoOpen: false,
            // buttonImage: '/icons/cal.png',
            // buttonImageOnly: true,
            // showAnim: 'fold',
            // disabled: false
        });

    });
}