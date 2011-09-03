/* variables go here */
var basePath = "ajax/gateway.php";
var ajaxSuggestRespNamesOnly = [];
var ajaxSuggestRespSuggests = {};
var ajaxSuggestResp = [];
var imagePath = 'images/';


/* Autoloaders go here */
$(document).ready(function(){
	
	$('.sad').not('.selected').click(function(event){
		$(restoreOthers(event.target)).parent().find('.radio[value="-1"]').attr('checked',true);
		$(this).attr('src',imagePath+'icon_sad_color.png').addClass('selected');
	}).mouseover(function(){
		$(this).not('.selected').attr('src',imagePath+'icon_sad_color.png');
	}).mouseout(function(){
		$(this).not('.selected').attr('src',imagePath+'icon_sad_gray.png');
	});
	
	$('.neutral').not('.selected').click(function(event){
		$(restoreOthers(event.target)).parent().find('.radio[value="0"]').attr('checked',true);
		$(this).attr('src',imagePath+'icon_neutral_color.png').addClass('selected');
	}).mouseover(function(){
		$(this).not('.selected').attr('src',imagePath+'icon_neutral_color.png');
	}).mouseout(function(){
		$(this).not('.selected').attr('src',imagePath+'icon_neutral_gray.png');
	});
	
	$('.happy').click(function(event){
		$(restoreOthers(event.target)).parent().find('.radio[value="1"]').attr('checked',true);
		$(this).attr('src',imagePath+'icon_happy_color.png').addClass('selected');
	}).mouseover(function(){
		$(this).not('.selected').attr('src',imagePath+'icon_happy_color.png');
	}).mouseout(function(){
		$(this).not('.selected').attr('src',imagePath+'icon_happy_gray.png');
	});
	
	$('#anonymous').click(function(){
		if($(this).is(':checked'))
		{
			$('#info').fadeIn('slow');
		}
		else
		{
			$('#info').fadeOut('slow');
		}
	});
	
});

/* Restores default images for a set of images */
function restoreOthers(ev)
{
	$(ev).parent().find('.neutral').attr('src',imagePath+'icon_neutral_gray.png').removeClass('selected');
	$(ev).parent().find('.happy').attr('src',imagePath+'icon_happy_gray.png').removeClass('selected');
	$(ev).parent().find('.sad').attr('src',imagePath+'icon_sad_gray.png').removeClass('selected');
	return ev;
}

function findCourseId(data)
{
	if(undefined !== ajaxSuggestRespSuggests[$(data).val()])
	{
		getTeachers(ajaxSuggestRespSuggests[$(data).val()]);
	}
}

String.prototype.format = function() {
	var formatted = this;
	for (var i = 0; i < arguments.length; i++) {
		var regexp = new RegExp('\\{'+i+'\\}', 'gi');
		formatted = formatted.replace(regexp, arguments[i]);
	}
	return formatted;
};

