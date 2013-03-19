/* Code to handle application post to be redirected to google docs */

var application_submitted = false;

$('#apply-form').on('submit', function(){
    application_submitted = true;
});

$('#hidden_iframe').on('load', function(){
    if(application_submitted){
        alert('Thanks for applying, we will get in touch very soon!');
        $('#apply-modal').modal('hide');
    }
});


/* scrollTo navigation */
var scrollable = function(event){
	$.scrollTo($(this).attr('href'),600);
	return false;
};

$('.scrollTo').on('click', scrollable);

$('.jumbotron a').on('click', scrollable);