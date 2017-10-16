Action()
{
//	lr_set_debug_message(LR_MSG_CLASS_RESULT_DATA, LR_SWITCH_ON);
	lr_think_time(1);

	web_reg_find("Text=<title>Welcome: Mercury Tours</title>", LAST);
	web_reg_find("Text=<input type=\"text\" name=\"userName\"", LAST);
	lr_start_transaction("a01_Home");

	web_url("newtours.demoaut.com", 
		"URL=http://newtours.demoaut.com/", 
		"Resource=0", 
		"RecContentType=text/html", 
		"Referer=", 
		"Snapshot=t6.inf", 
		"Mode=HTML", 
		LAST);
	
	lr_end_transaction("a01_Home", LR_AUTO);

	lr_think_time(1);

	web_reg_find("Text=<title>Cruises: Mercury Tours</title>", LAST);
	lr_start_transaction("b01s01_Cruises");

	web_link("Cruises", 
		"Text=Cruises", 
		"Snapshot=t7.inf", 
		LAST);

	lr_end_transaction("b01s01_Cruises",LR_AUTO);

	lr_think_time(1);

	web_reg_find("Text=<title>Under Construction: Mercury Tours</title>", LAST);
	lr_start_transaction("b01s02_Hotels");

	web_link("Hotels", 
		"Text=Hotels", 
		"Snapshot=t8.inf", 
		LAST);

	lr_end_transaction("b01s02_Hotels",LR_AUTO);

	lr_think_time(1);

	web_reg_find("Text=<title>Under Construction: Mercury Tours</title>", LAST);
	lr_start_transaction("b01s03_CarRentals");

	web_link("Car Rentals", 
		"Text=Car Rentals", 
		"Snapshot=t9.inf", 
		LAST);

	lr_end_transaction("b01s03_CarRentals",LR_AUTO);

	lr_think_time(1);

	web_reg_find("Text=<title>Under Construction: Mercury Tours</title>", LAST);
	lr_start_transaction("b01s04_Support");

	web_link("SUPPORT", 
		"Text=SUPPORT", 
		"Snapshot=t10.inf", 
		LAST);

	lr_end_transaction("b01s04_Support",LR_AUTO);

	lr_think_time(1);

	web_reg_find("Text=<title>Welcome: Mercury Tours</title>", LAST);
	web_reg_find("Text=<input type=\"text\" name=\"userName\"", LAST);
	lr_start_transaction("a03_BackHome");

	web_link("Home", 
		"Text=Home", 
		"Snapshot=t11.inf", 
		LAST);

	lr_end_transaction("a03_BackHome",LR_AUTO);

	lr_think_time(1);

	return 0;
}