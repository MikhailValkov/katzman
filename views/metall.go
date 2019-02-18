package views

import (
	"html/template"
	"net/http"

	"github.com/meehalkoff/loggi"
)

func MetallHandler(w http.ResponseWriter, r *http.Request) {

	tmpl := template.New("metall")
	tmpl.ParseFiles(
		"templates/header.html",
		"templates/footer.html",
		"templates/top-panel/top-panel.html",
		"templates/top-panel/about.html",
		"templates/top-panel/calc.html",
		"templates/top-panel/call.html",
		"templates/top-panel/main-menu.html",
		"templates/control-panel.html",
		"templates/metall/index.html",
		"templates/metall/summary.html",
		"templates/metall/palitra.html",
		"templates/metall/kachestva.html",
		"templates/metall/schema.html",
		"templates/metall/otkos.html",
		"templates/metall/portfolio.html",
		"templates/metall/video.html",
		"templates/metall/promo.html",
	)

	if err := tmpl.Execute(w, nil); err != nil {
		loggi.Fatal(err)
	}
}
