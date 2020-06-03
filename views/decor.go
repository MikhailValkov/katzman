package views

import (
	"html/template"
	"net/http"

	mobiledetect "github.com/Shaked/gomobiledetect"
	"github.com/meehalkoff/loggi"
	"gitlab.com/mvalkov/katzman/lib"
)

func DecorHandler(w http.ResponseWriter, r *http.Request) {

	tmpl := template.New("decor")

	detect := mobiledetect.NewMobileDetect(r, nil)
	if detect.IsMobile() {
		tmpl.ParseFiles(
			"mobile/templates/decor.html",
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
			"templates/decor/index.html",
			"templates/decor/summary.html",
			"templates/decor/palitra.html",
			"templates/decor/kachestva.html",
			"templates/decor/schema.html",
			"templates/howWeWork.html",
			"templates/decor/portfolio.html",
			"templates/shared/video.html",
			"templates/decor/promo.html",
			"templates/lastPromoBlock.html",
			"templates/creditPromoBlock.html",
		)
	}
	data := lib.FirstPromoBlock{
		MaterialName: `Декоративные элементы`,
		ID:           "decorPrice",
		PictureURL:   "/assets/img/promo/decor.jpg",
		UnitName:     "м.п.",
		YoutubeID:    "L8aRCQcdznM",
	}
	if err := tmpl.Execute(w, data); err != nil {
		loggi.Fatal(err)
	}
}
