package views

import (
	"html/template"
	"net/http"

	"github.com/meehalkoff/loggi"
	"gitlab.com/mvalkov/katzman/lib"
)

func HaubergHandler(w http.ResponseWriter, r *http.Request) {

	tmpl := template.New("hauberg")
	tmpl.ParseFiles(
		"templates/header.html",
		"templates/footer.html",
		"templates/top-panel/top-panel.html",
		"templates/top-panel/about.html",
		"templates/top-panel/calc.html",
		"templates/top-panel/call.html",
		"templates/top-panel/main-menu.html",
		"templates/control-panel.html",
		"templates/firstPromoBlock.html",
		"templates/hauberg/index.html",
		"templates/hauberg/summary.html",
		"templates/hauberg/palitra.html",
		"templates/hauberg/kachestva.html",
		"templates/hauberg/schema.html",
		"templates/hauberg/otkos.html",
		"templates/hauberg/portfolio.html",
		"templates/hauberg/video.html",
		"templates/hauberg/promo.html",
		"templates/lastPromoBlock.html",
	)

	data := lib.FirstPromoBlock{
		MaterialName: `Фасадная плитка "Технониколь"`,
		ID:           "haubergPrice",
		PictureURL:   "/assets/img/promo/hauberg.png",
	}
	if err := tmpl.Execute(w, data); err != nil {
		loggi.Fatal(err)
	}
}
