package simulations

import baseConfig.BaseSimulation
import io.gatling.core.Predef.*
import io.gatling.http.Predef.*

class UpdateProductStressPeakUsersSimulation extends BaseSimulation {
  def UpdateProduct() =
    exec(
      http(s"Update product request")
        .put("/products/${id}")
        .check(status.is(200))
    )

  val scn = scenario("Update product scenario")
    .feed(IdFeeder)
    .exec(UpdateProduct())

  setUp(scn.inject(
    stressPeakUsers(50)  during 2)
    .protocols(httpConf))
}
