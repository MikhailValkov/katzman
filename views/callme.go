package views

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"

	"github.com/meehalkoff/loggi"
)

type CallData struct {
	// Name  string `json:"name"`
	// Email string `json:"email"`
	Phone string `json:"phone"`
}

func CallMeHandler(w http.ResponseWriter, r *http.Request) {
	b, err := ioutil.ReadAll(r.Body)
	defer r.Body.Close()
	if err != nil {
		loggi.Fatal(err)
	}

	data := CallData{}
	json.Unmarshal(b, &data)

	// msg := strings.Replace(fmt.Sprintf("Заказ замера: %s+%s+%s", data.Name, data.Email, data.Phone), " ", "+", -1)
	msg := strings.Replace(fmt.Sprintf("Заказ замера: %s", data.Phone), " ", "+", -1)
	url := fmt.Sprintf("https://sms.ru/sms/send?api_id=A2C2432C-8573-0446-66E2-9F2E925F08FE&to=79045345759&msg=%s", msg)
	// loggi.Info(msg)

	resp, err := http.Get(url)
	if err != nil {
		loggi.Info("ошибка запроса")
		fmt.Fprint(w, `{"status": false}`)
	}

	loggi.Info(resp.StatusCode)

	if resp.StatusCode != 200 {
		loggi.Info("ошибка отправки смс")
		fmt.Fprint(w, `{"status": "err"}`)
	} else {
		loggi.Info("отправлено")
		fmt.Fprint(w, `{"status": "ok"}`)
	}

}
