
package views.html

import _root_.play.twirl.api.TwirlFeatureImports._
import _root_.play.twirl.api.TwirlHelperImports._
import _root_.play.twirl.api.Html
import _root_.play.twirl.api.JavaScript
import _root_.play.twirl.api.Txt
import _root_.play.twirl.api.Xml
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

object keyboard extends _root_.play.twirl.api.BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,_root_.play.twirl.api.Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with _root_.play.twirl.api.Template3[String,MessagesRequestHeader,Flash,play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/(message: String)(implicit request: MessagesRequestHeader, flash: Flash):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {


Seq[Any](format.raw/*2.1*/("""
"""),_display_(/*3.2*/main("VinSynth")/*3.18*/ {_display_(Seq[Any](format.raw/*3.20*/("""

  """),format.raw/*5.3*/("""<input type="hidden" id="notePlayed"></input>

  <input type="hidden" id="routeimg" value=""""),_display_(/*7.46*/routes/*7.52*/.Assets.versioned("images/keyboard-graphics/Keyboard.png")),format.raw/*7.110*/("""">
  <input type="hidden" id="dotimg" value=""""),_display_(/*8.44*/routes/*8.50*/.Assets.versioned("images/keyboard-graphics/dot.png")),format.raw/*8.103*/("""">
  <input type="hidden" id="volimg" value=""""),_display_(/*9.44*/routes/*9.50*/.Assets.versioned("images/keyboard-graphics/volume_knob.png")),format.raw/*9.111*/("""">
  <input type="hidden" id="waveimg" value=""""),_display_(/*10.45*/routes/*10.51*/.Assets.versioned("images/keyboard-graphics/waveform-preferences.png")),format.raw/*10.121*/("""">
  <input type="hidden" id="prefdotimg" value=""""),_display_(/*11.48*/routes/*11.54*/.Assets.versioned("images/keyboard-graphics/preference-dot.png")),format.raw/*11.118*/("""">
  <input type="hidden" id="ASDRimg" value=""""),_display_(/*12.45*/routes/*12.51*/.Assets.versioned("images/keyboard-graphics/ADSR.png")),format.raw/*12.105*/("""">

  
  <input type="hidden" id="csrfToken" value="@helper.CSRF.getToken.value">


  <h2>Welcome to the VinSynth!</h2>
  
  <canvas id="kbdcanv" width="800" style="border-style: solid" height="600">Canvas</canvas>

  <input type="hidden" id="notePlayed"></input>
  <!--<img id="keyboard-main" type="hidden" src=""""),_display_(/*23.51*/routes/*23.57*/.Assets.versioned("images/keyboard-graphics/Keyboard.png")),format.raw/*23.115*/("""">-->

  <audio id = "C4">
    <source src=""""),_display_(/*26.19*/routes/*26.25*/.Assets.versioned("sounds/virtual-piano/C4.mp3")),format.raw/*26.73*/("""" type="audio/mpeg">
  </audio>


  <audio id = "D4">
    <source src=""""),_display_(/*31.19*/routes/*31.25*/.Assets.versioned("sounds/virtual-piano/D4.mp3")),format.raw/*31.73*/("""" type="audio/mpeg">
  </audio>


 <audio id = "E4">
    <source src=""""),_display_(/*36.19*/routes/*36.25*/.Assets.versioned("sounds/virtual-piano/E4.mp3")),format.raw/*36.73*/("""" type="audio/mpeg">
  </audio>
  <audio id = "F4">
    <source src=""""),_display_(/*39.19*/routes/*39.25*/.Assets.versioned("sounds/virtual-piano/F4.mp3")),format.raw/*39.73*/("""" type="audio/mpeg">
  </audio>



  <audio id = "G4">
    <source src=""""),_display_(/*45.19*/routes/*45.25*/.Assets.versioned("sounds/virtual-piano/G4.mp3")),format.raw/*45.73*/("""" type="audio/mpeg">
  </audio>


  <audio id = "A4">
    <source src=""""),_display_(/*50.19*/routes/*50.25*/.Assets.versioned("sounds/virtual-piano/A4.mp3")),format.raw/*50.73*/("""" type="audio/mpeg">
  </audio>


  <audio id = "B4">
    <source src=""""),_display_(/*55.19*/routes/*55.25*/.Assets.versioned("sounds/virtual-piano/B4.mp3")),format.raw/*55.73*/("""" type="audio/mpeg">
  </audio>

  <audio id = "C5">
    <source src=""""),_display_(/*59.19*/routes/*59.25*/.Assets.versioned("sounds/virtual-piano/C5.mp3")),format.raw/*59.73*/("""" type="audio/mpeg">
  </audio>


  <script src=""""),_display_(/*63.17*/routes/*63.23*/.Assets.versioned("javascript/keyboard.js")),format.raw/*63.66*/(""""></script>

""")))}),format.raw/*65.2*/("""
"""))
      }
    }
  }

  def render(message:String,request:MessagesRequestHeader,flash:Flash): play.twirl.api.HtmlFormat.Appendable = apply(message)(request,flash)

  def f:((String) => (MessagesRequestHeader,Flash) => play.twirl.api.HtmlFormat.Appendable) = (message) => (request,flash) => apply(message)(request,flash)

  def ref: this.type = this

}


              /*
                  -- GENERATED --
                  DATE: 2020-07-29T17:08:37.130
                  SOURCE: /Users/samvincent/Desktop/VinSynth/server/app/views/keyboard.scala.html
                  HASH: cc8b45b8b3446a663ba5ad244b541b3f7d6a8246
                  MATRIX: 760->1|926->74|953->76|977->92|1016->94|1046->98|1164->190|1178->196|1257->254|1329->300|1343->306|1417->359|1489->405|1503->411|1585->472|1659->519|1674->525|1766->595|1843->645|1858->651|1944->715|2018->762|2033->768|2109->822|2450->1137|2465->1143|2545->1201|2617->1246|2632->1252|2701->1300|2800->1372|2815->1378|2884->1426|2982->1497|2997->1503|3066->1551|3163->1621|3178->1627|3247->1675|3347->1748|3362->1754|3431->1802|3530->1874|3545->1880|3614->1928|3713->2000|3728->2006|3797->2054|3895->2125|3910->2131|3979->2179|4056->2229|4071->2235|4135->2278|4179->2292
                  LINES: 21->1|26->2|27->3|27->3|27->3|29->5|31->7|31->7|31->7|32->8|32->8|32->8|33->9|33->9|33->9|34->10|34->10|34->10|35->11|35->11|35->11|36->12|36->12|36->12|47->23|47->23|47->23|50->26|50->26|50->26|55->31|55->31|55->31|60->36|60->36|60->36|63->39|63->39|63->39|69->45|69->45|69->45|74->50|74->50|74->50|79->55|79->55|79->55|83->59|83->59|83->59|87->63|87->63|87->63|89->65
                  -- GENERATED --
              */
          