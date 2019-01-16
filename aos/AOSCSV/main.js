// This script was generated and reflects raw data. It is recommended to change this code to your required logic
load.initialize(async function () {
});

load.action("Action", async function () {

    load.WebRequest.defaults.returnBody = false;
    load.WebRequest.defaults.headers = {
        "Connection": "Keep-Alive",
        "Content-Type": " text/plain"
    };

    let _Home = new load.Transaction("01_Home");
    _Home.start();
    const webResponse1 = new load.WebRequest({
        id: 1,
        url: "http://www.advantageonlineshopping.com/#/",
        method: "GET",
    }).sendSync();

    _Home.stop();
    
    load.thinkTime(3);

    let _Laptops = new load.Transaction("02_Laptops");
    _Laptops.start();
    const webResponse2 = new load.WebRequest({
        id: 2,
        url: "http://www.advantageonlineshopping.com/#/category/Laptops/1",
        method: "GET",
    }).sendSync();

    _Laptops.stop();
    
    load.thinkTime(3);

    let _Headphones = new load.Transaction("03_Headphones");
    _Headphones.start();
    const webResponse3 = new load.WebRequest({
        id: 3,
        url: "http://www.advantageonlineshopping.com/#/category/Headphones/2",
        method: "GET",
    }).sendSync();

    _Headphones.stop();
    
    load.thinkTime(3);

    let _Tablets = new load.Transaction("04_Tablets");
    _Tablets.start();
    const webResponse4 = new load.WebRequest({
        id: 4,
        url: "http://www.advantageonlineshopping.com/#/category/Tablets/3",
        method: "GET",
    }).sendSync();

    _Tablets.stop();
    
    load.thinkTime(3);

    let _Speakers = new load.Transaction("05_Speakers");
    _Speakers.start();
    const webResponse5 = new load.WebRequest({
        id: 5,
        url: "http://www.advantageonlineshopping.com/#/category/Speakers/4",
        method: "GET",
    }).sendSync();

    _Speakers.stop();
    
    load.thinkTime(3);

    let _Mice = new load.Transaction("06_Mice");
    _Mice.start();
    const webResponse6 = new load.WebRequest({
        id: 6,
        url: "http://www.advantageonlineshopping.com/#/category/Mice/5",
        method: "GET",
    }).sendSync();

    _Mice.stop();
    
    load.thinkTime(3);
});

load.finalize(async function () {
});
