package views

import (
	"html/template"
	"net/http"

	mobiledetect "github.com/Shaked/gomobiledetect"
	"github.com/meehalkoff/loggi"
	"gitlab.com/mvalkov/katzman/lib"
)

func VinilHandler(w http.ResponseWriter, r *http.Request) {

	tmpl := template.New("vinil")
	detect := mobiledetect.NewMobileDetect(r, nil)
	if detect.IsMobile() {
		tmpl.ParseFiles(
			"mobile/templates/vinil.html",
			"mobile/templates/header.html",
			"mobile/templates/footer.html",
			"mobile/templates/top-panel.html",
			"mobile/templates/calc.html",
			"mobile/templates/call.html",
			"mobile/templates/about.html",
			"mobile/templates/firstPromoBlock.html",
			"mobile/templates/creditPromoBlock.html",
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
			"templates/vinil/index.html",
			"templates/vinil/summary.html",
			"templates/vinil/palitra.html",
			"templates/vinil/kachestva.html",
			"templates/vinil/schema.html",
			"templates/vinil/otkos.html",
			"templates/vinil/portfolio.html",
			"templates/shared/video.html",
			"templates/vinil/promo.html",
			"templates/lastPromoBlock.html",
			"templates/creditPromoBlock.html",
		)
	}
	data := lib.FirstPromoBlock{
		MaterialName: `Виниловый сайдинг`,
		ID:           "vinilPrice",
		PictureURL:   "/assets/img/promo/vinil.jpg",
		UnitName:     "кв.м.",
		YoutubeID:    "ajuIoWYonv4",
	}
	if err := tmpl.Execute(w, data); err != nil {
		loggi.Fatal(err)
	}
}
