package views

import (
	"html/template"
	"net/http"

	mobiledetect "github.com/Shaked/gomobiledetect"
	"github.com/meehalkoff/loggi"
	"gitlab.com/mvalkov/katzman/lib"
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
			"templates/termopanel/index.html",
			"templates/termopanel/summary.html",
			"templates/termopanel/palitra.html",
			"templates/termopanel/kachestva.html",
			"templates/termopanel/schema.html",
			"templates/termopanel/otkos.html",
			"templates/howWeWork.html",
			"templates/termopanel/portfolio.html",
			"templates/shared/video.html",
			"templates/termopanel/promo.html",
			"templates/lastPromoBlock.html",
			"templates/creditPromoBlock.html",
		)
	}
	data := lib.FirstPromoBlock{
		MaterialName: `Термопанели`,
		ID:           "termoPrice",
		PictureURL:   "/assets/img/promo/termopanel.jpg",
		UnitName:     "кв.м.",
		YoutubeID:    "otvAAro2qIU",
	}
	if err := tmpl.Execute(w, data); err != nil {
		loggi.Fatal(err)
	}
}
