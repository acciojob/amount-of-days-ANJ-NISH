//your JS code here. If required.
function daysOfAYear(year)
{
	if(year%4!==0)
	{
		return 365;
	}
	else if(year%4===0 && year%400!==0)
	{
		return 365;
	}
	else
	{
		return 366;
	}
}