package views

import (
	"html/template"
	"net/http"

	mobiledetect "github.com/Shaked/gomobiledetect"
	"github.com/meehalkoff/loggi"
	"gitlab.com/mvalkov/katzman/lib"
)

func MetallHandler(w http.ResponseWriter, r *http.Request) {

	tmpl := template.New("metall")
	detect := mobiledetect.NewMobileDetect(r, nil)
	if detect.IsMobile() {
		tmpl.ParseFiles(
			"mobile/templates/metal.html",
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
			"templates/metall/index.html",
			"templates/metall/summary.html",
			"templates/metall/palitra.html",
			"templates/metall/kachestva.html",
			"templates/metall/schema.html",
			"templates/metall/otkos.html",
			"templates/howWeWork.html",
			"templates/metall/portfolio.html",
			"templates/shared/video.html",
			"templates/metall/promo.html",
			"templates/lastPromoBlock.html",
			"templates/creditPromoBlock.html",
		)
	}
	data := lib.FirstPromoBlock{
		MaterialName: `Металический сайдинг`,
		ID:           "metalPrice",
		PictureURL:   "/assets/img/promo/metall.jpg",
		UnitName:     "кв.м.",
		YoutubeID:    "p_G9w0iF6yU",
	}

	if err := tmpl.Execute(w, data); err != nil {
		loggi.Fatal(err)
	}
}
