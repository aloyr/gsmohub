jQuery(function() {
	jQuery('#edit-field-scrum-notes-0-value-wrapper, fieldset.book-outline-form').hide();
	jQuery('#edit-field-ct-plus-status-value').change(function(){
		if(jQuery('#edit-field-ct-plus-status-value').val() == 'Completed'){
			var user = jQuery('.picture a').attr('href').split('/')[3];
			if(jQuery('#edit-field-ct-plus-assignees-uid-uid').val() == "") {
				jQuery('#edit-field-ct-plus-assignees-uid-uid').val(user);
			}
			jQuery('#edit-field-ct-plus-progress-value').val('100');
			if(jQuery('#edit-field-ct-hid-plus-due-date-0-value-datepicker-popup-0').val() == "") {
				var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
	    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
	    		var today = new Date();
	    		var day = today.getDate();
	    		var month = monthNames[today.getMonth()];
	    		var year = today.getYear() + 1900;
	    		date = month + ' ' + day + ', ' + year;
				jQuery('#edit-field-ct-hid-plus-due-date-0-value-datepicker-popup-0').val(date);
			}
			if(jQuery('#edit-field-ct-plus-type-value').val() == "-") {
				jQuery('#edit-field-ct-plus-type-value').val('Web - Enhancement');
			}
			if(jQuery('#edit-field-ct-plus-project-nid-nid').val() == "116") {
				jQuery('#edit-field-ct-plus-project-nid-nid').val('129');
			}
			jQuery('#edit-field-ct-hid-task-duration-0-value').focus()
		}
	});
});