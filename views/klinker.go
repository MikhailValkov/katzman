package views

import (
	"html/template"
	"net/http"

	"github.com/meehalkoff/loggi"
)

func KlinkerHandler(w http.ResponseWriter, r *http.Request) {

	tmpl := template.New("klinker")
	tmpl.ParseFiles(
		"templates/header.html",
		"templates/footer.html",
		"templates/top-panel/top-panel.html",
		"templates/top-panel/about.html",
		"templates/top-panel/calc.html",
		"templates/top-panel/call.html",
		"templates/top-panel/main-menu.html",
		"templates/control-panel.html",
		"templates/klinker/index.html",
		"templates/klinker/summary.html",
		"templates/klinker/palitra.html",
		"templates/klinker/kachestva.html",
		"templates/klinker/schema.html",
		"templates/klinker/otkos.html",
		"templates/klinker/portfolio.html",
		"templates/klinker/video.html",
		"templates/klinker/promo.html",
	)

	if err := tmpl.Execute(w, nil); err != nil {
		loggi.Fatal(err)
	}
}
