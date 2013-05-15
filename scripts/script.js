$(document).ready(function() 

	{
		$.getJSON('https://baconipsum.com/api/?callback=?', 
			{ 'type':'meat-and-filler', 'start-with-lorem':'0', 'paras':'3' }, 
			function(baconGoodness)
		{
			
			$('#baconImg').html('<img style="-webkit-user-select: none" src="http://baconmockup.com/300/300">')
			$('#baconImg2').html('<img style="-webkit-user-select: none" src="http://baconmockup.com/200/200">')
			$('#baconImg3').html('<img style="-webkit-user-select: none" src="http://baconmockup.com/400/250">')
			
			$('#content p').html(baconGoodness);
		});
	
});