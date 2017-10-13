vuser_init()
{
	lr_think_time(1);

	web_reg_find("Text=<title>Welcome: Mercury Tours</title>", LAST);
	web_reg_find("Text=<input type=\"text\" name=\"userName\"", LAST);
	lr_start_transaction("a01_Home");

	web_url("newtours.demoaut.com", 
		"URL=http://newtours.demoaut.com/", 
		"Resource=0", 
		"RecContentType=text/html", 
		"Referer=", 
		"Snapshot=t11.inf", 
		"Mode=HTML", 
		LAST);

	lr_end_transaction("a01_Home", LR_AUTO);

	lr_think_time(1);

	web_reg_find("text=<title>Find a Flight: Mercury Tours: </title>", LAST);
	web_reg_find("text=Use our Flight Finder", LAST);
	lr_start_transaction("a02_Login");

	web_submit_form("login.php", 
		"Snapshot=t12.inf", 
		ITEMDATA, 
		"Name=userName", "Value=mercury", ENDITEM, 
		"Name=password", "Value=mercury", ENDITEM, 
		"Name=login.x", "Value=0", ENDITEM, 
		"Name=login.y", "Value=0", ENDITEM, 
		EXTRARES, 
		"Url=/classes/calendar/showCalendar.class", "Referer=", ENDITEM, 
		"Url=/classes/calendar/CalSelect.class", "Referer=", ENDITEM, 
		"Url=/classes/calendar/Calendar.class", "Referer=", ENDITEM, 
		"Url=/classes/calendar/showCalendar$SymAction.class", "Referer=", ENDITEM, 
		LAST);

	lr_end_transaction("a02_Login",LR_AUTO);

	lr_think_time(1);

	return 0;
}
