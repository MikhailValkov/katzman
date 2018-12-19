package main

import (
	"os"

	_ "github.com/jinzhu/gorm/dialects/sqlite"
)

func init() {
}

func main() {
	mux := GetRoutes()

	if os.Getenv("DEV") == "1" {
		RunDevServer(mux)
	} else {
		RunTLSServer(mux)
	}

}
