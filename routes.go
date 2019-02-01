package main

import (
	"net/http"

	"gitlab.com/mvalkov/katzman/views"
)

// GetRoutes make a mux
func GetRoutes() *http.ServeMux {

	mux := http.NewServeMux()

	mux.HandleFunc("/", Chain(views.IndexHandler, Method("GET"), Logging()))
	mux.HandleFunc("/мокрый-фасад", Chain(views.MokrijFasadHandler, Method("GET"), Logging()))
	mux.HandleFunc("/виниловый-сайдинг", Chain(views.VinilHandler, Method("GET"), Logging()))
	mux.HandleFunc("/металлосайдинг", Chain(views.MetallHandler, Method("GET"), Logging()))
	mux.HandleFunc("/фиброцементный-сайдинг", Chain(views.FibraHandler, Method("GET"), Logging()))
	mux.HandleFunc("/клинкерная-плитка", Chain(views.KlinkerHandler, Method("GET"), Logging()))
	// mux.HandleFunc("/admin", Chain(views.GetCalcData, Method("GET"), Logging(), SessionChecker()))

	mux.Handle("/assets/", http.StripPrefix("/assets/", http.FileServer(http.Dir("assets/"))))
	return mux
}
