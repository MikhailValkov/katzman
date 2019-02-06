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
	mux.HandleFunc("/термопанели", Chain(views.TermopanelHandler, Method("GET"), Logging()))
	mux.HandleFunc("/декоративные-элементы", Chain(views.DecorHandler, Method("GET"), Logging()))
	mux.HandleFunc("/технониколь-хауберг", Chain(views.HaubergHandler, Method("GET"), Logging()))

	mux.Handle("/assets/", http.StripPrefix("/assets/", http.FileServer(http.Dir("assets/"))))
	return mux
}
