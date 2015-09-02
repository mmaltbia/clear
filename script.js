$(".task").sortable({
	connectWith: '#in-progress'
});


$("#in-progress").sortable({ 
	connectWith: '.task'
});

$(document).ready(function(){
	$.backstretch("/images/stalk.jpg");
	

});

