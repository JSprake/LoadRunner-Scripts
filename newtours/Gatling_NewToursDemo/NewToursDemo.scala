package newtoursdemo

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class RecordedSimulation extends Simulation {

	val httpProtocol = http
		.baseUrl("http://www.demoaut.com")
		.inferHtmlResources(BlackList(""".*.css, .*.js and .*.ico"""), WhiteList())
		.acceptHeader("image/webp,image/apng,image/*,*/*;q=0.8")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("en-GB,en-US;q=0.9,en;q=0.8")
		.userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36")

	val headers_0 = Map(
		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
		"Pragma" -> "no-cache",
		"Upgrade-Insecure-Requests" -> "1")

	val headers_1 = Map("Pragma" -> "no-cache")



	val scn = scenario("RecordedSimulation")
		.exec(http("Gatling_Home")
			.get("/")
			.headers(headers_0)
			.resources(http("request_1")
			.get("/images/hdr_right.gif")
			.headers(headers_1),
            http("request_2")
			.get("/images/hdr_tips.gif")
			.headers(headers_1),
            http("request_3")
			.get("/images/tip93.gif")
			.headers(headers_1),
            http("request_4")
			.get("/images/hdr_findflight.gif")
			.headers(headers_1),
            http("request_5")
			.get("/images/spacer.gif")
			.headers(headers_1)
			.check(status.is(404)),
            http("request_6")
			.get("/images/hdr_destinations.gif")
			.headers(headers_1),
            http("request_7")
			.get("/images/btn_signin.gif?osCsid=726b46e7cfb377a6d4e9a2b8038b26a7")
			.headers(headers_1),
            http("request_8")
			.get("/images/icn_destinations.gif")
			.headers(headers_1),
            http("request_9")
			.get("/images/hdr_vacation.gif")
			.headers(headers_1),
            http("request_10")
			.get("/images/icn_vacations.gif")
			.headers(headers_1),
            http("request_11")
			.get("/images/hdr_register.gif")
			.headers(headers_1),
            http("request_12")
			.get("/images/icn_register.gif")
			.headers(headers_1),
            http("request_13")
			.get("/black")
			.headers(headers_1)
			.check(status.is(404)),
            http("request_14")
			.get("/images/hdr_links.gif")
			.headers(headers_1),
            http("request_15")
			.get("/images/nav/logo.gif")
			.headers(headers_1),
            http("request_16")
			.get("/images/nav/html.gif")
			.headers(headers_1),
            http("request_17")
			.get("/images/nav/boxad1.gif")
			.headers(headers_1),
            http("request_18")
			.get("/images/banner2.gif")
			.headers(headers_1),
            http("request_19")
			.get("/images/hdr_specials.gif")
			.headers(headers_1),
            http("request_20")
			.get("/images/featured_destination.gif")
			.headers(headers_1)))
            .pause(10)
	setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol)
}