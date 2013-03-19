/* Code to handle application post to be redirected to google docs */

var application_submitted = false;

$('#apply-form').on('submit', function(){
    application_submitted = true;
});

$('#hidden_iframe').on('load', function(){
    if(application_submitted){
        alert('Thanks we will get in touch very soon!');
        $('#apply-modal').modal('hide');
    }
});


/* scrollTo navigation */

$('nav a').on('click', function(event){
	$.scrollTo($(this).attr('href'),600);
	return false;
});