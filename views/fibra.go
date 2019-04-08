package views

import (
	"html/template"
	"net/http"

	mobiledetect "github.com/Shaked/gomobiledetect"
	"github.com/meehalkoff/loggi"
	"gitlab.com/mvalkov/katzman/lib"
)

func FibraHandler(w http.ResponseWriter, r *http.Request) {

	tmpl := template.New("fibra")

	detect := mobiledetect.NewMobileDetect(r, nil)
	if detect.IsMobile() {
		tmpl.ParseFiles(
			"mobile/templates/fibra.html",
			"mobile/templates/header.html",
			"mobile/templates/footer.html",
			"mobile/templates/top-panel.html",
			"mobile/templates/calc.html",
			"mobile/templates/call.html",
			"mobile/templates/about.html",
			"mobile/templates/firstPromoBlock.html",
			"mobile/templates/creditPromoBlock.html",
			"mobile/templates/lastPromoBlock.html",
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
			"templates/fibra/index.html",
			"templates/fibra/summary.html",
			"templates/fibra/palitra.html",
			"templates/fibra/kachestva.html",
			"templates/fibra/schema.html",
			"templates/fibra/otkos.html",
			"templates/fibra/portfolio.html",
			"templates/shared/video.html",
			"templates/fibra/promo.html",
			"templates/lastPromoBlock.html",
			"templates/creditPromoBlock.html",
		)
	}

	data := lib.FirstPromoBlock{
		MaterialName: `Сайдинг Фиброцемент`,
		ID:           "fibraPrice",
		PictureURL:   "/assets/img/promo/fibra.jpg",
		UnitName:     "кв.м.",
		YoutubeID:    "q0BymYA4LR4",
	}
	if err := tmpl.Execute(w, data); err != nil {
		loggi.Fatal(err)
	}
}
