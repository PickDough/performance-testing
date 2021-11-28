package simulations

import baseConfig.BaseSimulation
import io.gatling.core.Predef.*
import io.gatling.http.Predef.*

class AddProductWithPauseSimulation extends BaseSimulation {
  def AddProduct() =
    exec(
      http(s"Add product request")
        .post("/products")
        .body(StringBody(
        """{title: 'test product',
            |price: 13.5,
            |description: 'lorem ipsum set',
            |image: 'https://i.pravatar.cc',
            |category: 'electronic'}"""))
        .check(status.is(200))
    )

  val scn = scenario("Add two products with pause scenario")
    .exec(AddProduct())
    .pause(2, 4)
    .exec(AddProduct())

  setUp(scn.inject(
    rampUsers(30) during 5)
    .protocols(httpConf))
}
