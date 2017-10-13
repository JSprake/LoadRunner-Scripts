Action()
{

	web_url("newtours.demoaut.com", 
		"URL=http://newtours.demoaut.com/", 
		"Resource=0", 
		"RecContentType=text/html", 
		"Referer=", 
		"Snapshot=t6.inf", 
		"Mode=HTML", 
		LAST);

	lr_start_transaction("c");

	web_link("Cruises", 
		"Text=Cruises", 
		"Snapshot=t7.inf", 
		LAST);

	lr_end_transaction("c",LR_AUTO);

	lr_think_time(10);

	lr_start_transaction("s");

	web_link("Hotels", 
		"Text=Hotels", 
		"Snapshot=t8.inf", 
		LAST);

	lr_end_transaction("s",LR_AUTO);

	lr_think_time(10);

	lr_start_transaction("c");

	web_link("Hotels_2", 
		"Text=Hotels", 
		"Snapshot=t9.inf", 
		LAST);

	lr_end_transaction("c",LR_AUTO);

	lr_think_time(10);

	lr_start_transaction("bh");

	web_link("Home", 
		"Text=Home", 
		"Snapshot=t10.inf", 
		LAST);

	lr_end_transaction("bh",LR_AUTO);

	lr_think_time(10);

	return 0;
}