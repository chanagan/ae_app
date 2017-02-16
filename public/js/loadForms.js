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
                    // updDtgCell();
                    $(this).dialog('close');
                },
                "Cancel": function() {
                    canxEditDtgForm();
                    $(this).dialog('close');
                }
            }
        });

        $('#textDat').datepicker({
            dateFormat: 'dd-M-yy',
            showButtonPanel: true,
            changeMonth: true,
            changeYear: true,
            showOn: 'both',
            buttonImage: '/icons/cal.png',
            buttonImageOnly: true,
            showAnim: 'fold',
            disabled: false
        });

    });
}