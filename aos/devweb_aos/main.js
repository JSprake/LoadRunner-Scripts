load.setUserCredentials({
    username: "jonathan.sprake@microfocus.com",
    password: load.unmask("NDIFMb2UytaoMDAPFAUnErWHpd4iPD3UOJ2sX4NImK47BiTEjoo="),
    host: "*"
});

// This scriptU was generated and reflects raw data. It is recommended to change this code to your required logic
load.initialize("Initialize", async function () {
});

load.action("Action", async function () {
    load.WebRequest.defaults.returnBody = false;
    load.WebRequest.defaults.headers = {
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Pragma": "no-cache",
        "Referer": "http://www.advantageonlineshopping.com/",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36"
    };

    let a01_home = new load.Transaction("a01_home")
    a01_home.start();
    const textCheck_a01 = new load.TextCheckExtractor("textCheck_a01", "Advantage Shopping");
    const webResponse1 = new load.WebRequest({
        id: 1,
        url: "http://www.advantageonlineshopping.com/",
        method: "GET",
        extractors:[
            textCheck_a01
          ],
        headers: {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Upgrade-Insecure-Requests": "1"
        },
        resources: [
            "http://www.advantageonlineshopping.com/css/main.min.css",
            "http://www.advantageonlineshopping.com/css/images/Down_arrow.svg",
            "http://www.advantageonlineshopping.com/vendor/requirejs/require.js",
            "http://www.advantageonlineshopping.com/main.min.js",
            "http://www.advantageonlineshopping.com/css/fonts/roboto_regular_macroman/Roboto-Regular-webfont.woff",
            "http://www.advantageonlineshopping.com/css/fonts/roboto_medium_macroman/Roboto-Medium-webfont.woff",
            "http://www.advantageonlineshopping.com/css/fonts/roboto_light_macroman/Roboto-Light-webfont.woff",
            "http://www.advantageonlineshopping.com/css/images/logo.png",
            "http://www.advantageonlineshopping.com/css/images/closeDark.png",
            "http://www.advantageonlineshopping.com/css/images/arrow_right.png",
            "http://www.advantageonlineshopping.com/css/fonts/roboto_bold_macroman/Roboto-Bold-webfont.woff",
            "http://www.advantageonlineshopping.com/css/fonts/roboto_thin_macroman/Roboto-Thin-webfont.woff",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=speakers",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=tablets",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=laptops",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=mice",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=headphones",
            "http://www.advantageonlineshopping.com/css/images/Special-offer.jpg",
            "http://www.advantageonlineshopping.com/css/images/chat_logo.png",
            "http://www.advantageonlineshopping.com/css/images/GoUp.png",
            "http://www.advantageonlineshopping.com/css/images/facebook.png",
            "http://www.advantageonlineshopping.com/css/images/twitter.png",
            "http://www.advantageonlineshopping.com/css/images/linkedin.png",
            "http://www.advantageonlineshopping.com/css/images/Banner1.jpg",
            "http://www.advantageonlineshopping.com/css/images/Banner2.jpg",
            "http://www.advantageonlineshopping.com/css/images/Banner3.jpg",
            "http://www.advantageonlineshopping.com/css/images/Popular-item3.jpg",
            "http://www.advantageonlineshopping.com/css/images/Popular-item2.jpg",
            "http://www.advantageonlineshopping.com/css/images/Popular-item1.jpg",
            "http://www.advantageonlineshopping.com/css/images/category_banner_4.png",
            "http://www.advantageonlineshopping.com/css/images/Filter.png",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=4200",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=4700",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=4600",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=4300",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=4400",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=4100",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=4500",
            "http://www.advantageonlineshopping.com/css/images/review_right.png",
            "http://www.advantageonlineshopping.com/css/images/reviewUser.png",
            "http://www.advantageonlineshopping.com/css/images/review_Left_disabled.png",
        ],
    }).sendSync();

    const webResponse2 = new load.WebRequest({
        id: 2,
        url: "http://www.advantageonlineshopping.com/services.properties",
        method: "GET",
        headers: {
            "Accept": "*/*"
        },
    }).sendSync();

    const webResponse3 = new load.WebRequest({
        id: 3,
        url: "http://www.advantageonlineshopping.com/catalog/api/v1/DemoAppConfig/parameters/by_tool/ALL",
        method: "GET",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Origin": "http://www.advantageonlineshopping.com"
        },
    }).sendSync();

    const webResponse4 = new load.WebRequest({
        id: 4,
        url: "http://www.advantageonlineshopping.com//accountservice/ws/GetAccountConfigurationRequest",
        method: "POST",
        headers: {
            "Accept": "application/xml, text/xml, */*; q=0.01",
            "Content-Type": "text/xml; charset=UTF-8",
            "Origin": "http://www.advantageonlineshopping.com",
            "SOAPAction": "com.advantage.online.store.accountserviceGetAccountConfigurationRequest"
        },
        body: `<?xml version="1.0" encoding="UTF-8"?>        <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
            <soap:Body>
                <GetAccountConfigurationRequest xmlns="com.advantage.online.store.accountservice"></GetAccountConfigurationRequest>
            </soap:Body>
        </soap:Envelope>`,
    }).sendSync();

    const webResponse5 = new load.WebRequest({
        id: 5,
        url: "http://www.advantageonlineshopping.com//accountservice/ws/GetAccountConfigurationRequest",
        method: "OPTIONS",
        headers: {
            "Accept": "*/*",
            "Access-Control-Request-Headers": "content-type,soapaction",
            "Access-Control-Request-Method": "POST",
            "Origin": "http://www.advantageonlineshopping.com",
            "Sec-Fetch-Mode": "cors"
        },
    }).sendSync();

    const webResponse6 = new load.WebRequest({
        id: 6,
        url: "http://www.advantageonlineshopping.com/catalog/api/v1/categories",
        method: "GET",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Origin": "http://www.advantageonlineshopping.com"
        },
    }).sendSync();

    const webResponse7 = new load.WebRequest({
        id: 7,
        url: "http://www.advantageonlineshopping.com/catalog/api/v1/deals/search",
        method: "GET",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Origin": "http://www.advantageonlineshopping.com"
        },
        queryString: {
            "dealOfTheDay": "true"
        },
    }).sendSync();

    const webResponse8 = new load.WebRequest({
        id: 8,
        url: "http://www.advantageonlineshopping.com/app/tempFiles/popularProducts.json",
        method: "GET",
        headers: {
            "Accept": "application/json, text/plain, */*"
        },
    }).sendSync();

    const webResponse9 = new load.WebRequest({
        id: 9,
        url: "http://www.advantageonlineshopping.com/app/views/home-page.html",
        method: "GET",
        headers: {
            "Accept": "text/html"
        },
    }).sendSync();

    a01_home.stop();


    if (webResponse1.extractors.textCheck_a01){
        load.log('TEXT CHECK \'Advantage Shopping\' was FOUND in the response body');
    } else {
        load.log('TEXT CHECK: \'Advantage Shopping\' was NOT FOUND in the response body');
    }
/*
    if(a01_home.update().duration < 600){
        a01_home.stop(load.TransactionStatus.Passed)
    } else {
        a01_home.stop(load.TransactionStatus.Failed)
    }
*/
    load.sleep(1);

    let a02_category = new load.Transaction("a02_category")
    a02_category.start();

    const webResponse10 = new load.WebRequest({
        id: 10,
        url: "http://www.advantageonlineshopping.com/catalog/api/v1/categories/4/products",
        method: "GET",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Origin": "http://www.advantageonlineshopping.com"
        },
    }).sendSync();

    const webResponse11 = new load.WebRequest({
        id: 11,
        url: "http://www.advantageonlineshopping.com/catalog/api/v1/categories/attributes",
        method: "GET",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Origin": "http://www.advantageonlineshopping.com"
        },
    }).sendSync();

    const webResponse12 = new load.WebRequest({
        id: 12,
        url: "http://www.advantageonlineshopping.com/app/views/category-page.html",
        method: "GET",
        headers: {
            "Accept": "text/html"
        },
    }).sendSync();

    const webResponse13 = new load.WebRequest({
        id: 13,
        url: "http://www.advantageonlineshopping.com/catalog/api/v1/categories/all_data",
        method: "GET",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Origin": "http://www.advantageonlineshopping.com"
        },
    }).sendSync();

    const webResponse14 = new load.WebRequest({
        id: 14,
        url: "http://www.advantageonlineshopping.com/catalog/api/v1/products/25",
        method: "GET",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Origin": "http://www.advantageonlineshopping.com"
        },
    }).sendSync();

    a02_category.stop();

    load.sleep(1);

    let a03_product = new load.Transaction("a03_product")
    a03_product.start();

    const webResponse15 = new load.WebRequest({
        id: 15,
        url: "http://www.advantageonlineshopping.com/catalog/api/v1/categories/4/products",
        method: "GET",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Origin": "http://www.advantageonlineshopping.com"
        },
    }).sendSync();

    const webResponse16 = new load.WebRequest({
        id: 16,
        url: "http://www.advantageonlineshopping.com/app/views/product-page.html",
        method: "GET",
        headers: {
            "Accept": "text/html"
        },
    }).sendSync();

    a03_product.stop();

});

load.finalize("Finalize", async function () {
});
