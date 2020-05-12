package main

func init() {
}

func main() {
	mux := GetRoutes()

	// if os.Getenv("DEV") == "1" {
	// 	RunDevServer(mux)
	// } else {
	// 	RunTLSServer(mux)
	// }
	RunDevServer(mux)
}
