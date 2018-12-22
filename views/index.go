package views

import (
	"html/template"
	"net/http"

	"github.com/meehalkoff/loggi"
)

func IndexHandler(w http.ResponseWriter, r *http.Request) {

	tmpl := template.New("index")
	tmpl.ParseFiles(
		"templates/header.html",
		"templates/index.html",
		"templates/footer.html",
		"templates/top-panel.html",
		"templates/main-content.html",
		"templates/about.html",
		"templates/calc.html",
		"templates/call.html",
	)

	if err := tmpl.Execute(w, nil); err != nil {
		loggi.Fatal(err)
	}
}
