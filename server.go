package main

import (
	// "crypto/tls"
	"net/http"

	"github.com/meehalkoff/loggi"
	// "golang.org/x/crypto/acme/autocert"
)

// RunTLSServer start https server with letsencrypt
// func RunTLSServer(mux *http.ServeMux) {
// 	certManager := autocert.Manager{
// 		Prompt: autocert.AcceptTOS,
// 		Cache:  autocert.DirCache("/root/certs/"),
// 	}

// 	server := &http.Server{
// 		Addr:    ":443",
// 		Handler: mux,
// 		TLSConfig: &tls.Config{
// 			GetCertificate: certManager.GetCertificate,
// 		},
// 	}
// 	loggi.Debug("run production tls server at :443 port")
// 	go http.ListenAndServe(":80", certManager.HTTPHandler(nil))
// 	if err := server.ListenAndServeTLS("", ""); err != nil {
// 		loggi.Fatal(err)
// 	}
// }

// RunDevServer start http server at localhost:8080
func RunDevServer(mux *http.ServeMux) {
	server := &http.Server{
		Addr:    ":8080",
		Handler: mux,
	}
	loggi.Debug("run dev server at :8080 port")
	server.ListenAndServe()
}
