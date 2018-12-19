package main

import (
	"net/http"

	"gitlab.com/mvalkov/katzman/views"
)

// GetRoutes make a mux
func GetRoutes() *http.ServeMux {

	mux := http.NewServeMux()

	mux.HandleFunc("/", Chain(views.IndexHandler, Method("GET"), Logging()))
	// mux.HandleFunc("/admin", Chain(views.GetCalcData, Method("GET"), Logging(), SessionChecker()))

	mux.Handle("/assets/", http.StripPrefix("/assets/", http.FileServer(http.Dir("assets/"))))
	return mux
}
