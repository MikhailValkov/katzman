package views

import (
	"html/template"
	"net/http"

	mobiledetect "github.com/Shaked/gomobiledetect"
	"github.com/meehalkoff/loggi"
)

func MokrijFasadHandler(w http.ResponseWriter, r *http.Request) {

	tmpl := template.New("mokrij-fasad")

	detect := mobiledetect.NewMobileDetect(r, nil)
	if detect.IsMobile() {
		tmpl.ParseFiles(
			"mobile/templates/mokrij-fasad.html",
			"mobile/templates/header.html",
			"mobile/templates/footer.html",
			"mobile/templates/top-panel.html",
			"mobile/templates/calc.html",
			"mobile/templates/call.html",
			"mobile/templates/about.html",
		)
	} else {
		tmpl.ParseFiles(
			"templates/header.html",
			"templates/footer.html",
			"templates/top-panel/top-panel.html",
			"templates/top-panel/about.html",
			"templates/top-panel/calc.html",
			"templates/top-panel/call.html",
			"templates/top-panel/main-menu.html",
			"templates/control-panel.html",
			"templates/mokrij-fasad/index.html",
			"templates/mokrij-fasad/vid-pokritij.html",
			"templates/mokrij-fasad/palitra.html",
			"templates/mokrij-fasad/plus-minus.html",
			"templates/mokrij-fasad/schema.html",
			"templates/mokrij-fasad/otkos.html",
			"templates/mokrij-fasad/portfolio.html",
			"templates/mokrij-fasad/video.html",
			"templates/mokrij-fasad/promo.html",
		)
	}

	if err := tmpl.Execute(w, nil); err != nil {
		loggi.Fatal(err)
	}
}
