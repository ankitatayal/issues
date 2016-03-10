function disableSubmit()
{
	document.getElementById("submit").disabled = true;
}
function activateButton(element)
{
	if(element.checked)
	{
	document.getElementById("submit").disabled= false;
	}
	else{
	document.getElementById("submit").disabled= true;
	}
}

function change()
    {
 
    document.getElementById("f").style.cssText = 'background-color: white; color: black;  border:1px solid ForestGreen; border-radius:4px';
    document.getElementById("m").style.cssText = 'background-color: YellowGreen; color: white';

}
    function change1()
    {
 
    document.getElementById("m").style.cssText = 'background-color: white; color: black; border:1px solid ForestGreen; border-radius:4px';
    document.getElementById("f").style.cssText = 'background-color: YellowGreen; color: white';
}