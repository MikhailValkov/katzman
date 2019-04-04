package views

import (
	"net/http"
	"path"
)

func ServeFileHandler(res http.ResponseWriter, req *http.Request) {
	fname := path.Base(req.URL.Path)
	http.ServeFile(res, req, "./assets/"+fname)
}
