Action()
{

	web_url("newtours.demoaut.com", 
		"URL=http://newtours.demoaut.com/", 
		"Resource=0", 
		"RecContentType=text/html", 
		"Referer=", 
		"Snapshot=t11.inf", 
		"Mode=HTML", 
		LAST);

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

	lr_think_time(10);

	lr_start_transaction("p1s01_FlightSearch");

	web_submit_form("mercuryreservation2.php", 
		"Snapshot=t13.inf", 
		ITEMDATA, 
		"Name=tripType", "Value=roundtrip", ENDITEM, 
		"Name=passCount", "Value=1", ENDITEM, 
		"Name=fromPort", "Value=London", ENDITEM, 
		"Name=fromMonth", "Value=July", ENDITEM, 
		"Name=fromDay", "Value=3", ENDITEM, 
		"Name=toPort", "Value=New York", ENDITEM, 
		"Name=toMonth", "Value=July", ENDITEM, 
		"Name=toDay", "Value=3", ENDITEM, 
		"Name=servClass", "Value=First", ENDITEM, 
		"Name=airline", "Value=No Preference", ENDITEM, 
		"Name=findFlights.x", "Value=32", ENDITEM, 
		"Name=findFlights.y", "Value=7", ENDITEM, 
		LAST);

	lr_end_transaction("p1s01_FlightSearch",LR_AUTO);

	lr_think_time(7);

	lr_start_transaction("p1s02_FlightSelect");

	web_submit_form("mercurypurchase.php", 
		"Snapshot=t14.inf", 
		ITEMDATA, 
		"Name=outFlight", "Value=Blue Skies Airlines$360$270$5:03", ENDITEM, 
		"Name=inFlight", "Value=Blue Skies Airlines$630$270$12:23", ENDITEM, 
		"Name=reserveFlights.x", "Value=60", ENDITEM, 
		"Name=reserveFlights.y", "Value=7", ENDITEM, 
		LAST);

	lr_end_transaction("p1s02_FlightSelect",LR_AUTO);

	lr_think_time(15);

	lr_start_transaction("p1s03_FlightBook");

	web_submit_form("mercurypurchase2.php", 
		"Snapshot=t15.inf", 
		ITEMDATA, 
		"Name=passFirst0", "Value=Jojo", ENDITEM, 
		"Name=passLast0", "Value=Bean", ENDITEM, 
		"Name=pass.0.meal", "Value=No preference", ENDITEM, 
		"Name=creditCard", "Value=American Express", ENDITEM, 
		"Name=creditnumber", "Value=12345678", ENDITEM, 
		"Name=cc_exp_dt_mn", "Value=None", ENDITEM, 
		"Name=cc_exp_dt_yr", "Value=None", ENDITEM, 
		"Name=cc_frst_name", "Value=", ENDITEM, 
		"Name=cc_mid_name", "Value=", ENDITEM, 
		"Name=cc_last_name", "Value=", ENDITEM, 
		"Name=billAddress1", "Value=1325 Borregas Ave.", ENDITEM, 
		"Name=billAddress2", "Value=", ENDITEM, 
		"Name=billCity", "Value=Sunnyvale", ENDITEM, 
		"Name=billState", "Value=CA", ENDITEM, 
		"Name=billZip", "Value=94089", ENDITEM, 
		"Name=billCountry", "Value=UNITED STATES", ENDITEM, 
		"Name=delAddress1", "Value=1325 Borregas Ave.", ENDITEM, 
		"Name=delAddress2", "Value=", ENDITEM, 
		"Name=delCity", "Value=Sunnyvale", ENDITEM, 
		"Name=delState", "Value=CA", ENDITEM, 
		"Name=delZip", "Value=94089", ENDITEM, 
		"Name=delCountry", "Value=UNITED STATES", ENDITEM, 
		"Name=buyFlights.x", "Value=84", ENDITEM, 
		"Name=buyFlights.y", "Value=9", ENDITEM, 
		LAST);

	lr_end_transaction("p1s03_FlightBook",LR_AUTO);

	lr_start_transaction("a03_SignOff");

	web_link("SIGN-OFF", 
		"Text=SIGN-OFF", 
		"Snapshot=t16.inf", 
		LAST);

	lr_end_transaction("a03_SignOff",LR_AUTO);

	return 0;
}