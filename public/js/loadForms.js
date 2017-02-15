function loadEditDtgForm() {
    tStr = 'abcd';
    $('#editDtgForm').load('/pages/editDtgForm.html');
    $('#editDtgForm').dialog({
        autoOpen: false,
        width: 350,
        height: 'auto',
        modal: true,
        // beforeclose: function(event, ui) {
        //     canxEditDtgForm(event, ui);

        // },
        buttons: {
            "Ok": function() {
                // updDtgCell();
                $(this).dialog('close');
            },
            "Cancel": function() {
                // canxEditForm();
                $(this).dialog('close');
            }
        }
    });

}