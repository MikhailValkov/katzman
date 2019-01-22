package views

import (
	"html/template"
	"net/http"

	"github.com/meehalkoff/loggi"
)

func MokrijFasadHandler(w http.ResponseWriter, r *http.Request) {

	tmpl := template.New("mokrij-fasad")
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
		"templates/mokrij-fasad/qualities.html",
		"templates/mokrij-fasad/we-work.html",
	)

	if err := tmpl.Execute(w, nil); err != nil {
		loggi.Fatal(err)
	}
}
