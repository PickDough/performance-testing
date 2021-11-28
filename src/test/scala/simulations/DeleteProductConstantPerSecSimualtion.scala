package simulations

import io.gatling.core.Predef.*
import io.gatling.http.Predef.*

import baseConfig.BaseSimulation

class DeleteProductConstantPerSecSimualtion extends BaseSimulation{
  def DeleteProduct() =
    exec(
      http(s"Delete product request")
        .delete("/products/${id}")
        .check(status.is(200))
    )

  val scn = scenario("Delete product scenario")
    .feed(IdFeeder)
    .exec(DeleteProduct())

  setUp(scn.inject(
    constantUsersPerSec(10) during 5)
    .protocols(httpConf))
}
