// This script was generated and reflects raw data. It is recommended to change this code to your required logic
load.initialize(async function () {
});

load.action("Action", async function () {

    load.WebRequest.defaults.returnBody = false;
    load.WebRequest.defaults.headers = {
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Pragma": "no-cache",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36"
    };

    const webResponse1 = new load.WebRequest({
        id: 1,
        url: "http://www.advantageonlineshopping.com/",
        method: "GET",
        headers: {
            "Upgrade-Insecure-Requests": "1",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8"
        },
        resources: [
            "http://www.advantageonlineshopping.com/css/main.min.css",
            "http://www.advantageonlineshopping.com/css/images/Down_arrow.svg",
            "http://www.advantageonlineshopping.com/vendor/requirejs/require.js",
            "http://www.advantageonlineshopping.com/main.min.js",
            "http://www.advantageonlineshopping.com/css/fonts/roboto_regular_macroman/Roboto-Regular-webfont.woff",
            "http://www.advantageonlineshopping.com/services.properties",
            "http://www.advantageonlineshopping.com/css/fonts/roboto_medium_macroman/Roboto-Medium-webfont.woff",
            "http://www.advantageonlineshopping.com/css/fonts/roboto_light_macroman/Roboto-Light-webfont.woff",
            "http://www.advantageonlineshopping.com/catalog/api/v1/categories/all_data",
            "http://www.advantageonlineshopping.com/catalog/api/v1/DemoAppConfig/parameters/by_tool/ALL",
            "http://www.advantageonlineshopping.com/catalog/api/v1/DemoAppConfig/parameters/by_tool/ALL",
            "http://www.advantageonlineshopping.com/css/images/logo.png",
            "http://www.advantageonlineshopping.com/css/images/closeDark.png",
            "http://www.advantageonlineshopping.com/catalog/api/v1/categories",
            "http://www.advantageonlineshopping.com/catalog/api/v1/deals/search?dealOfTheDay=true",
            "http://www.advantageonlineshopping.com/css/images/arrow_right.png",
            "http://www.advantageonlineshopping.com/css/fonts/roboto_bold_macroman/Roboto-Bold-webfont.woff",
            "http://www.advantageonlineshopping.com/css/fonts/roboto_thin_macroman/Roboto-Thin-webfont.woff",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=1237",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=1236",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=1235",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=1238",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=1234",
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
            "http://www.advantageonlineshopping.com/catalog/api/v1/categories/attributes",
            "http://www.advantageonlineshopping.com/css/images/category_banner_1.png",
            "http://www.advantageonlineshopping.com/css/images/Filter.png",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=1249",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=1250",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=1700",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=1600",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=1245",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=1200",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=1300",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=11100",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=1400",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=1100",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=1800",
            "http://www.advantageonlineshopping.com/css/images/category_banner_2.png",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=2200",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=2300",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=2100",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=2400",
            "http://www.advantageonlineshopping.com/css/images/category_banner_3.png",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=3200",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=3100",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=3300",
            "http://www.advantageonlineshopping.com/css/images/category_banner_4.png",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=4200",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=4500",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=4600",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=4300",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=4400",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=4100",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=4700",
            "http://www.advantageonlineshopping.com/css/images/category_banner_5.png",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=5400",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=5300",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=5505",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=5200",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=5800",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=5700",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=5100",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=5600",
            "http://www.advantageonlineshopping.com/catalog/fetchImage?image_id=5900",
        ],
    }).sendSync();

    const webResponse2 = new load.WebRequest({
        id: 2,
        url: "http://www.advantageonlineshopping.com/accountservice/GetAccountConfigurationRequest",
        method: "POST",
        headers: {
            "X-Requested-With": "XMLHttpRequest",
            "Referer": "http://www.advantageonlineshopping.com/",
            "SOAPAction": "com.advantage.online.store.accountserviceGetAccountConfigurationRequest",
            "Content-Type": "text/xml; charset=UTF-8",
            "Origin": "http://www.advantageonlineshopping.com",
            "Accept": "application/xml, text/xml, */*; q=0.01"
        },
        body: `<?xml version="1.0" encoding="UTF-8"?>        <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
            <soap:Body>
                <GetAccountConfigurationRequest xmlns="com.advantage.online.store.accountservice"></GetAccountConfigurationRequest>
            </soap:Body>
        </soap:Envelope>`,
    }).sendSync();

    const webResponse3 = new load.WebRequest({
        id: 3,
        url: "http://www.advantageonlineshopping.com/accountservice/GetAccountConfigurationRequest",
        method: "POST",
        headers: {
            "Referer": "http://www.advantageonlineshopping.com/",
            "Content-Type": "text/xml; charset=UTF-8",
            "Accept": "application/xml, text/xml, */*; q=0.01",
            "X-Requested-With": "XMLHttpRequest",
            "SOAPAction": "com.advantage.online.store.accountserviceGetAccountConfigurationRequest",
            "Origin": "http://www.advantageonlineshopping.com"
        },
        body: `<?xml version="1.0" encoding="UTF-8"?>        <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
            <soap:Body>
                <GetAccountConfigurationRequest xmlns="com.advantage.online.store.accountservice"></GetAccountConfigurationRequest>
            </soap:Body>
        </soap:Envelope>`,
    }).sendSync();

    const webResponse4 = new load.WebRequest({
        id: 4,
        url: "http://www.advantageonlineshopping.com/app/tempFiles/popularProducts.json",
        method: "GET",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Referer": "http://www.advantageonlineshopping.com/"
        },
    }).sendSync();

    const webResponse5 = new load.WebRequest({
        id: 5,
        url: "http://www.advantageonlineshopping.com/app/views/home-page.html",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "Referer": "http://www.advantageonlineshopping.com/"
        },
    }).sendSync();

    const webResponse6 = new load.WebRequest({
        id: 6,
        url: "http://www.advantageonlineshopping.com/app/views/category-page.html",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "Referer": "http://www.advantageonlineshopping.com/"
        },
    }).sendSync();
});

load.finalize(async function () {
});
