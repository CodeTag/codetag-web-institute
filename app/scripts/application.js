/* Code to handle application post to be redirected to google docs */
$ = require('jquery');

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
