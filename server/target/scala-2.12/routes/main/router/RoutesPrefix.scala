// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/samvincent/Desktop/VinSynth/server/conf/routes
// @DATE:Wed Jul 29 12:23:43 PDT 2020


package router {
  object RoutesPrefix {
    private var _prefix: String = "/"
    def setPrefix(p: String): Unit = {
      _prefix = p
    }
    def prefix: String = _prefix
    val byNamePrefix: Function0[String] = { () => prefix }
  }
}
