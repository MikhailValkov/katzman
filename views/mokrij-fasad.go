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
		"templates/mokrij-fasad/index.html",
		// "templates/main-content.html",
		"templates/top-panel/top-panel.html",
		"templates/top-panel/about.html",
		"templates/top-panel/calc.html",
		"templates/top-panel/call.html",
	)

	if err := tmpl.Execute(w, nil); err != nil {
		loggi.Fatal(err)
	}
}
