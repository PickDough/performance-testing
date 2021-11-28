package simulations

import io.gatling.core.Predef.*
import io.gatling.http.Predef.*

import baseConfig.BaseSimulation

class GetProductRampUpSimulation extends BaseSimulation {
  def getRandomProduct() =
    exec(http("Get product request}")
      .get("/products/${id}")
      .check(status.is(200)))

  val scn = scenario("Get product scenario")
    .feed(IdFeeder)
    .exec(getRandomProduct())

  setUp(scn.inject(
    rampUsers(30) during 5)
    .protocols(httpConf))
}
