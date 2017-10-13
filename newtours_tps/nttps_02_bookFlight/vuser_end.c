vuser_end()
{
	lr_think_time(1);

	web_reg_find("Text=<title>Sign-on: Mercury Tours</title>", LAST);
	web_reg_find("Text=<input maxlength=60 name=\"userName\"", LAST);
	lr_start_transaction("z01_SignOff");

	web_link("SIGN-OFF", 
		"Text=SIGN-OFF", 
		"Snapshot=t16.inf", 
		LAST);

	lr_end_transaction("z01_SignOff",LR_AUTO);

	lr_think_time(1);

		return 0;
}
