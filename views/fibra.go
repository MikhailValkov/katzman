package views

import (
	"html/template"
	"net/http"

	"github.com/meehalkoff/loggi"
)

func FibraHandler(w http.ResponseWriter, r *http.Request) {

	tmpl := template.New("fibra")
	tmpl.ParseFiles(
		"templates/header.html",
		"templates/footer.html",
		"templates/top-panel/top-panel.html",
		"templates/top-panel/about.html",
		"templates/top-panel/calc.html",
		"templates/top-panel/call.html",
		"templates/top-panel/main-menu.html",
		"templates/control-panel.html",
		"templates/fibra/index.html",
		"templates/fibra/summary.html",
		"templates/fibra/palitra.html",
		"templates/fibra/kachestva.html",
		"templates/fibra/schema.html",
		"templates/fibra/otkos.html",
		"templates/fibra/portfolio.html",
		"templates/fibra/video.html",
		"templates/fibra/promo.html",
	)

	if err := tmpl.Execute(w, nil); err != nil {
		loggi.Fatal(err)
	}
}
