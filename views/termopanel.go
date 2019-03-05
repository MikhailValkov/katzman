package views

import (
	"html/template"
	"net/http"

	mobiledetect "github.com/Shaked/gomobiledetect"
	"github.com/meehalkoff/loggi"
)

func TermopanelHandler(w http.ResponseWriter, r *http.Request) {

	tmpl := template.New("termopanel")

	detect := mobiledetect.NewMobileDetect(r, nil)
	if detect.IsMobile() {
		tmpl.ParseFiles(
			"mobile/templates/termopanel.html",
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
			"templates/termopanel/index.html",
			"templates/termopanel/summary.html",
			"templates/termopanel/palitra.html",
			"templates/termopanel/kachestva.html",
			"templates/termopanel/schema.html",
			"templates/termopanel/otkos.html",
			"templates/termopanel/portfolio.html",
			"templates/termopanel/video.html",
			"templates/termopanel/promo.html",
		)
	}

	if err := tmpl.Execute(w, nil); err != nil {
		loggi.Fatal(err)
	}
}
