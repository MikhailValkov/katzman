package views

import (
	"html/template"
	"net/http"

	"github.com/meehalkoff/loggi"
)

func TermopanelHandler(w http.ResponseWriter, r *http.Request) {

	tmpl := template.New("termopanel")
	tmpl.ParseFiles(
		"templates/header.html",
		"templates/footer.html",
		"templates/top-panel/top-panel.html",
		"templates/top-panel/about.html",
		"templates/top-panel/calc.html",
		"templates/top-panel/call.html",
		"templates/top-panel/main-menu.html",
		"templates/control-panel.html",
		"templates/termopanel/index.html",
		"templates/termopanel/summary.html",
		"templates/termopanel/palitra.html",
		"templates/termopanel/kachestva.html",
		"templates/termopanel/schema.html",
		"templates/termopanel/otkos.html",
		"templates/termopanel/portfolio.html",
		"templates/termopanel/video.html",
		"templates/termopanel/promo.html",
		"templates/termopanel/qualities.html",
		"templates/termopanel/we-work.html",
	)

	if err := tmpl.Execute(w, nil); err != nil {
		loggi.Fatal(err)
	}
}
