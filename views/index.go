package views

import (
	"html/template"
	"net/http"

	mobiledetect "github.com/Shaked/gomobiledetect"
	"github.com/meehalkoff/loggi"
)

func IndexHandler(w http.ResponseWriter, r *http.Request) {

	tmpl := template.New("index")

	detect := mobiledetect.NewMobileDetect(r, nil)
	if detect.IsMobile() {
		tmpl.ParseFiles(
			"mobile/templates/header.html",
			"mobile/templates/index.html",
			"mobile/templates/footer.html",
			"mobile/templates/top-panel.html",
			"mobile/templates/calc.html",
			"mobile/templates/call.html",
		)
	} else {

		tmpl.ParseFiles(
			"templates/header.html",
			"templates/index.html",
			"templates/footer.html",
			// "templates/main-content.html",
			"templates/top-panel/top-panel.html",
			"templates/top-panel/main-menu.html",
			"templates/top-panel/about.html",
			"templates/top-panel/calc.html",
			"templates/top-panel/call.html",
		)
	}
	if err := tmpl.Execute(w, nil); err != nil {
		loggi.Fatal(err)
	}
}
