var hide_lists = function(cb) {
    $('#posts').fadeOut(300);
	$('#papers').fadeOut(300);
    $('#stories').fadeOut(300);
    $('#posts-btn').removeClass('disabled');
	$('#papers-btn').removeClass('disabled');
    $('#stories-btn').removeClass('disabled');
};
var show_posts = function() {
	$('#papers-btn').removeClass('disabled');
	$('#papers').fadeOut(300);
    $('#stories-btn').removeClass('disabled');
	$('#stories').fadeOut(300);
    $('#posts').fadeIn(300)
    $('#posts-btn').addClass('disabled')
};

var show_papers = function() {
    $('#posts-btn').removeClass('disabled');
    $('#posts').fadeOut(300);
    $('#stories-btn').removeClass('disabled');
	$('#stories').fadeOut(300);
    $('#papers').fadeIn(300);
    $('#papers-btn').addClass('disabled')
};
var show_stories = function() {
    $('#posts-btn').removeClass('disabled');
    $('#posts').fadeOut(300);
    $('#papers-btn').removeClass('disabled');
    $('#papers').fadeOut(300, function() {
        $('#stories').fadeIn(300)
    });
    $('#stories-btn').addClass('disabled')
};
	
