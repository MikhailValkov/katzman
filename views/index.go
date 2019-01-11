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
		// "templates/main-content.html",
		"templates/top-panel/top-panel.html",
		"templates/top-panel/main-menu.html",
		"templates/top-panel/about.html",
		"templates/top-panel/calc.html",
		"templates/top-panel/call.html",
	)

	if err := tmpl.Execute(w, nil); err != nil {
		loggi.Fatal(err)
	}
}
