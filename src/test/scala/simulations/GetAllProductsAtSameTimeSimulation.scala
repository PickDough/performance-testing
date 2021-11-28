package simulations

import io.gatling.core.Predef.*
import io.gatling.http.Predef.*

import baseConfig.BaseSimulation

class GetAllProductsAtSameTimeSimulation extends BaseSimulation{
  def GetAllProducts() =
    exec(http("Get all products request")
      .get("/products")
      .check(status.is(200)))
    
  val scn = scenario("Get all products scenario")
    .exec(GetAllProducts())
  
  setUp(scn.inject(
    atOnceUsers(10))
    .protocols(httpConf))
}
