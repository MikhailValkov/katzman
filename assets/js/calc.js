function allUnpress(cls) {
    var btns = Array.from(document.getElementsByClassName(cls));
    btns.forEach(function (btn) {
        btn.pressed = undefined;
        btn.classList.remove("calc-btn-pressed");
    });
}

function press(btn) {
    // alert(btn.id);
    if (btn.pressed === undefined) {
        // alert(btn.classList[0])
        allUnpress(btn.classList[0]);
        btn.classList.add("calc-btn-pressed");
        btn.pressed = true;
        controlDepth(btn);
    } else {
        btn.classList.remove("calc-btn-pressed");
        btn.pressed = undefined;
    }
}

function controlDepth(btn) {
    var depth = document.getElementById("dnone");

    if (btn.id === "nowarm") {
        alert("no warm");
    }
}