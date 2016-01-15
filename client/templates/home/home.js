Template.home.rendered = function() {

    /*$('body').append('<script src="assets/js/jquery.flexslider-min.js"></script>');
    $('body').append('<script src="assets/js/jquery.fitvids.js"></script>');
    $('body').append('<script src="assets/js/jquery.smooth-scroll.min.js"></script>');
    $('body').append('<script src="assets/js/jquery.backstretch.min.js" type="text/javascript"></script>');
    $('body').append('<script src="assets/js/bootstrap.min.js"></script>');
    $('body').append('<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true"></script>');
    $('body').append('<script src="assets/js/gmaps.js" type="text/javascript"></script>');
	$('body').append('<script src="assets/js/script.js" type="text/javascript"></script>');
  	$('body').append("<script>menu(); backstretch(); slider(); contentslider(); map(); panels(); blogposts();</script>");*/

};

Template.home.events({
	"keyup #subject": function () {
		Session.set('subject',$('#subject').val());
	},
	"keyup #body": function () {
		Session.set('body',$('#body').val().replace(/(?:\r\n|\r|\n)/g, '%0D%0A'));
	},
})

Template.home.helpers({
	subject:function () {
		return Session.get('subject');
	},
	body:function () {
		return Session.get('body');
	},

});

