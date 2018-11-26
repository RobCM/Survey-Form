$('#submit').click(function()
{
	// Checking to see if user selected the option boxes to validate survey!
	var optionSelected = $('input[name="question"]:checked' && 'input[name="question3"]:checked' && 'input[name="question4"]:checked');
	if(optionSelected.length > 0)
	{	 
		
		// Using sweetAlert jQuery plug in!
		swal({ 
             title: "Survey Complete", 
			 text: "Thank you for your time!", 
			 type: "success" 
			});
	      
	}
});
