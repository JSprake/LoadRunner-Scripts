//   *****************************************************************************************************************************************
//   ****   PLEASE NOTE: This is a READ-ONLY representation of the actual script. For editing please press the "Develop Script" button.   ****
//   *****************************************************************************************************************************************

Action()
{
	lr_start_transaction("a01_homeTC");
	truclient_step("1", "Navigate to 'https://www.advantageon...shopping.com/#/'", "snapshot=Action_1.inf");
	lr_end_transaction("a01_homeTC",0);
	truclient_step("2", "Verify OUR PRODUCTS 's Visible Text contains OUR PRODUCTS", "snapshot=Action_2.inf");
	lr_start_transaction("a02_categoryTC");
	truclient_step("3", "Click on Category", "snapshot=Action_3.inf");
	lr_end_transaction("a02_categoryTC",0);
	truclient_step("4", "Verify FILTER BY 's Visible Text contains FILTER BY:", "snapshot=Action_4.inf");
	lr_start_transaction("a03_productTC");
	truclient_step("5", "Click on Product", "snapshot=Action_5.inf");
	lr_end_transaction("a03_productTC",0);
	truclient_step("6", "Verify ADD TO CART 's Visible Text contains ADD TO CART", "snapshot=Action_6.inf");
	lr_start_transaction("a02_homeCachedTC");
	truclient_step("7", "Click on dvantage link", "snapshot=Action_7.inf");
	lr_end_transaction("a02_homeCachedTC",0);
	truclient_step("8", "Verify OUR PRODUCTS 's Visible Text contains OUR PRODUCTS", "snapshot=Action_8.inf");

	return 0;
}
