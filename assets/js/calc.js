var materials = {
    // "decor": {
    "koroed": {
        "cost": 360,
        "job_cost": 500,
        "warm_coef": 1,
        // "warm": {
        "nowarm": {
            "dsoft": 0,
            "dmid": 0,
            "dhard": 0
        },
        "vata": {
            "dsoft": 613,
            "dmid": 728,
            "dhard": 1050
        },
        "penoplast": {
            "dsoft": 516,
            "dmid": 571,
            "dhard": 736
        },
        "penopleks": {
            "dsoft": 566,
            "dmid": 649,
            "dhard": 892
        },
        // }
    },
    "mramor": {
        "cost": 705,
        "job_cost": 600,
        "warm_coef": 1,
        "nowarm": {
            "dsoft": 0,
            "dmid": 0,
            "dhard": 0
        },
        "vata": {
            "dsoft": 563,
            "dmid": 678,
            "dhard": 1000
        },
        "penoplast": {
            "dsoft": 466,
            "dmid": 521,
            "dhard": 686
        },
        "penopleks": {
            "dsoft": 516,
            "dmid": 599,
            "dhard": 842
        },
    },
    "hauberg": {
        "cost": 970,
        "job_cost": 500,
        "warm_coef": 1,
        "nowarm": {
            "dsoft": 0,
            "dmid": 0,
            "dhard": 0
        },
        "vata": {
            "dsoft": 180,
            "dmid": 230,
            "dhard": 330
        },
        "penoplast": {
            "dsoft": 230,
            "dmid": 280,
            "dhard": 430
        },
        "penopleks": {
            "dsoft": 260,
            "dmid": 330,
            "dhard": 600
        },
    },
    "vinil": {
        "cost": 400,
        "job_cost": 300,
        "warm_coef": 1,
        "nowarm": {
            "dsoft": 0,
            "dmid": 0,
            "dhard": 0
        },
        "vata": {
            "dsoft": 176,
            "dmid": 250,
            "dhard": 350
        },
        "penoplast": {
            "dsoft": 250,
            "dmid": 300,
            "dhard": 450
        },
        "penopleks": {
            "dsoft": 300,
            "dmid": 350,
            "dhard": 600
        },
    },
    "metal": {
        "cost": 805,
        "job_cost": 300,
        "warm_coef": 1,
        "nowarm": {
            "dsoft": 0,
            "dmid": 0,
            "dhard": 0
        },
        "vata": {
            "dsoft": 218,
            "dmid": 231,
            "dhard": 362
        },
        "penoplast": {
            "dsoft": 220,
            "dmid": 270,
            "dhard": 450
        },
        "penopleks": {
            "dsoft": 270,
            "dmid": 370,
            "dhard": 600
        },
    },
    "fibra": {
        "cost": 1175,
        "job_cost": 300,
        "warm_coef": 1,
        "nowarm": {
            "dsoft": 0,
            "dmid": 0,
            "dhard": 0
        },
        "vata": {
            "dsoft": 218,
            "dmid": 231,
            "dhard": 362
        },
        "penoplast": {
            "dsoft": 220,
            "dmid": 280,
            "dhard": 450
        },
        "penopleks": {
            "dsoft": 270,
            "dmid": 370,
            "dhard": 600
        },
    },
    "termo": {
        "cost": 1200,
        "job_cost": 400,
        "warm_coef": 0,
        "nowarm": {
            "dsoft": 0,
            "dmid": 0,
            "dhard": 0
        },
        "vata": {
            "dsoft": 0,
            "dmid": 0,
            "dhard": 0
        },
        "penoplast": {
            "dsoft": 0,
            "dmid": 0,
            "dhard": 0
        },
        "penopleks": {
            "dsoft": 0,
            "dmid": 0,
            "dhard": 0
        },
    },
    "klinker": {
        "cost": 850,
        "job_cost": 1140,
        "warm_coef": 1,
        "nowarm": {
            "dsoft": 0,
            "dmid": 0,
            "dhard": 0
        },
        "vata": {
            "dsoft": 890,
            "dmid": 1005,
            "dhard": 1327
        },
        "penoplast": {
            "dsoft": 793,
            "dmid": 848,
            "dhard": 1013
        },
        "penopleks": {
            "dsoft": 843,
            "dmid": 926,
            "dhard": 1169
        },

    },
    "decor": {
        "cost": 560,
    }
    // },
    // "warm": {
    //     "nowarm": 0,
    //     "penoplast": {
    //         "dsoft": 413,
    //         "dmid": 468,
    //         "dhard": 628
    //     },
    //     "penopleks": {
    //         "dsoft": 485,
    //         "dmid": 597,
    //         "dhard": 887
    //     },
    //     "vata": {
    //         "dsoft": 506,
    //         "dmid": 608,
    //         "dhard": 908
    //     }
    // }
}

var defaultSetting = {
    "decor": "koroed",
    "warm": "nowarm",
    "depth": "dsoft"
}

var calcState = {
    "decor": "koroed",
    "warm": "nowarm",
    "depth": "dsoft",
    "square": 1,
}

function allUnpress(cls) {
    var btns = Array.from(document.getElementsByClassName(cls));
    btns.forEach(function (btn) {
        btn.pressed = undefined;
        btn.classList.remove("calc-btn-pressed");
        btn.setAttribute("onclick", "press(" + btn.id + ");");
    });
}

function press(btn) {
    if (btn.pressed === undefined) {
        allUnpress(btn.classList[0]);
        btn.classList.add("calc-btn-pressed");
        btn.pressed = true;
        btn.removeAttribute("onclick");
        controlDepth(btn);
        controlWarm(btn);
        setCalcState(btn);
        calculateSumm();
    } else {
        btn.classList.remove("calc-btn-pressed");
        btn.pressed = undefined;
    }
}

function controlDepth(btn) {
    // var depth = document.getElementById("calcDepth");
    var allWarm = [
        "penoplast",
        "penopleks",
        "vata",
    ]
    if (btn.id === "nowarm") {
        disableDepth();
    }
    if (allWarm.indexOf(btn.id) > -1) {
        enableDepth();
    }
}

function controlWarm(btn) {
    try {
        var warm_coef = materials[btn.id].warm_coef;

        if (warm_coef > 0) {
            enableWarm()
        } else {
            disableWarm()
        }
    } catch (e) {
        console.log('ops')
    }
}

function disableWarm() {
    var btns = [...document.querySelectorAll("div.calc-warm-btn")]
    var nowarmBtn = document.querySelector('div#nowarm')

    if (nowarmBtn.pressed === undefined) {
        console.log(nowarmBtn)
        press(nowarmBtn)
    }


    btns.forEach(btn => {
        if (btn.id !== "nowarm") {
            btn.pressed = undefined;
            btn.classList.add("calc-btn-disabled");
            btn.removeAttribute("onclick");
            btn.classList.remove("calc-btn-pressed");
        }


    })
}

function enableWarm() {
    var btns = [...document.querySelectorAll("div.calc-warm-btn")]

    btns.forEach(btn => {
        if (btn.id !== "nowarm") {
            // btn.pressed = undefined;
            btn.classList.remove("calc-btn-disabled");
            btn.setAttribute("onclick", "press(" + btn.id + ");");
        }
    })

    // press(document.getElementById(defaultSetting.warm))
    // enableDepth()
}

function disableDepth() {
    var btns = Array.from(document.getElementsByClassName("calc-tol-btn"));
    btns.forEach(function (btn) {
        btn.pressed = undefined;
        btn.classList.add("calc-btn-disabled");
        btn.removeAttribute("onclick");
        btn.classList.remove("calc-btn-pressed");
    });
}

function enableDepth() {
    var btns = Array.from(document.getElementsByClassName("calc-tol-btn"));
    btns.forEach(function (btn) {
        btn.pressed = undefined;
        btn.classList.remove("calc-btn-disabled");
        btn.setAttribute("onclick", "press(" + btn.id + ");");
        // btn.addEventListener("click",press(btn.id),true);
    });

    press(document.getElementById("dsoft"));
}

function setDefaultChoice() {
    var d = document.getElementById(defaultSetting.decor);
    var w = document.getElementById(defaultSetting.warm);

    press(d);
    press(w);
}
setDefaultChoice();

function setCalcState(btn) {
    var decorNames = [
        "koroed",
        "mramor",
        "hauberg",
        "vinil",
        "metal",
        "fibra",
        "termo",
        "klinker"
    ];
    var warmNames = [
        "nowarm",
        "penoplast",
        "penopleks",
        "vata",
    ];
    var depthNames = [
        "dsoft",
        "dmid",
        "dhard"
    ];
    if (decorNames.indexOf(btn.id) > -1) {
        calcState.decor = btn.id;
    }
    if (warmNames.indexOf(btn.id) > -1) {
        if (btn.id === "nowarm") {
            calcState.depth = "dsoft";
        }
        calcState.warm = btn.id;
    }
    if (depthNames.indexOf(btn.id) > -1) {
        calcState.depth = btn.id;
    }
}

function checkInput(inp) {
    calcState.square = Number(inp.value);
    calculateSumm();
}

function calculateSumm() {
    var out = document.getElementById("calcSumma");

    // var cost = materials.decor[calcState.decor].cost;
    // var job_cost = materials.decor[calcState.decor].job_cost;
    // var warm_coef = materials.decor[calcState.decor].warm_coef;

    // var cost_warm = 0;
    // if (calcState.depth !== "") {
    //     cost_warm = materials.warm[calcState.warm][calcState.depth];
    // }

    // var square = calcState.square;

    // var result = ((cost + job_cost) + (cost_warm * warm_coef)) * square;


    let decorCost = materials[calcState.decor].cost;
    let decorJobCost = materials[calcState.decor].job_cost;
    let warmCost = materials[calcState.decor][calcState.warm][calcState.depth];

    let result = (decorCost + decorJobCost + warmCost) * calcState.square;


    console.log(result);
    out.value = Math.round(result);
}