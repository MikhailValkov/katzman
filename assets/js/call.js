var callName = document.getElementById("call-name");
var callEmail = document.getElementById("call-email");
var callPhone = document.getElementById("call-phone");
var btnSend = document.getElementById("call-send");


function sendCallRequest() {

    callName.classList.remove("call-need-input-error");
    callEmail.classList.remove("call-need-input-error");
    callPhone.classList.remove("call-need-input-error");

    if (!validateName(callName.value)) {
        callName.classList.add("call-need-input-error");
        console.log("name not valid");
        return;
    }
    if (!validateEmail(callEmail.value)) {
        callEmail.classList.add("call-need-input-error");
        console.log("email not valid");
        return;
    }
    if (!validatePhone(callPhone.value)) {
        callPhone.classList.add("call-need-input-error");
        console.log("phone not valid");
        return;
    }

    btnSend.innerText = "Отправляю...";
    btnSend.disabled = true;
    callName.disabled = true;
    callPhone.disabled = true;
    callEmail.disabled = true;

    var data = {
        "name": callName.value,
        "email": callEmail.value,
        "phone": callPhone.value
    }

    let postData = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch('/callme', postData).then((dataFromServer) => {
        return dataFromServer.json()
    }).then((data) => {
        console.log(data.status);
        if (data.status === "error") {
            console.log("не отправлено");
            btnSend.innerText = "Ошибка отправки";
            return;
        }
        console.log("отправлено");
        btnSend.innerText = "Отправлено!"
    });


}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function validatePhone(phone) {
    var re = /^\d[\d\(\)\ -]{4,14}\d$/;
    return re.test(String(phone).toLowerCase());
}
function validateName(name) {
    if (name === "") {
        return false;
    } else {
        return true;
    }
}