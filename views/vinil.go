package views

import (
	"html/template"
	"net/http"

	"github.com/meehalkoff/loggi"
)

func VinilHandler(w http.ResponseWriter, r *http.Request) {

	tmpl := template.New("vinil")
	tmpl.ParseFiles(
		"templates/header.html",
		"templates/footer.html",
		"templates/top-panel/top-panel.html",
		"templates/top-panel/about.html",
		"templates/top-panel/calc.html",
		"templates/top-panel/call.html",
		"templates/top-panel/main-menu.html",
		"templates/control-panel.html",
		"templates/vinil/index.html",
		"templates/vinil/summary.html",
		"templates/vinil/palitra.html",
		"templates/vinil/kachestva.html",
		"templates/vinil/schema.html",
		"templates/vinil/otkos.html",
		"templates/vinil/portfolio.html",
		"templates/vinil/video.html",
		"templates/vinil/promo.html",
		"templates/vinil/qualities.html",
		"templates/vinil/we-work.html",
	)

	if err := tmpl.Execute(w, nil); err != nil {
		loggi.Fatal(err)
	}
}
