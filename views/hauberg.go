package views

import (
	"html/template"
	"net/http"

	mobiledetect "github.com/Shaked/gomobiledetect"
	"github.com/meehalkoff/loggi"
	"gitlab.com/mvalkov/katzman/lib"
)

func HaubergHandler(w http.ResponseWriter, r *http.Request) {

	tmpl := template.New("hauberg")
	detect := mobiledetect.NewMobileDetect(r, nil)
	if detect.IsMobile() {
		tmpl.ParseFiles(
			"mobile/templates/hauberg.html",
			"mobile/templates/header.html",
			"mobile/templates/footer.html",
			"mobile/templates/top-panel.html",
			"mobile/templates/calc.html",
			"mobile/templates/call.html",
			"mobile/templates/about.html",
			"mobile/templates/firstPromoBlock.html",
			"mobile/templates/creditPromoBlock.html",
			"mobile/templates/lastPromoBlock.html",
			"mobile/templates/how-we-work.html",
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
			"templates/firstPromoBlock.html",
			"templates/hauberg/index.html",
			"templates/hauberg/summary.html",
			"templates/hauberg/palitra.html",
			"templates/hauberg/kachestva.html",
			"templates/hauberg/schema.html",
			"templates/hauberg/otkos.html",
			"templates/howWeWork.html",
			"templates/hauberg/portfolio.html",
			"templates/shared/video.html",
			"templates/hauberg/promo.html",
			"templates/lastPromoBlock.html",
			"templates/creditPromoBlock.html",
		)
	}

	data := lib.FirstPromoBlock{
		MaterialName: `Фасадная плитка "Технониколь"`,
		ID:           "haubergPrice",
		PictureURL:   "/assets/img/promo/hauberg.png",
		UnitName:     "кв.м.",
		YoutubeID:    "LJAJc8XPbdc",
	}
	if err := tmpl.Execute(w, data); err != nil {
		loggi.Fatal(err)
	}
}
