
try {
    var mPrice = document.getElementById("mokrijPrice");
    mPrice.innerText = materials.koroed.cost + materials.koroed.job_cost;
} catch (err) {
    console.log(err)
}

try {
    var hPrice = document.getElementById("haubergPrice");
    hPrice.innerText = materials.hauberg.cost + materials.hauberg.job_cost;
} catch (err) {
    console.log(err)
}

try {
    var vPrice = document.getElementById("vinilPrice");
    vPrice.innerText = materials.vinil.cost + materials.vinil.job_cost;
} catch (err) {
    console.log(err)
}

try {
    var mePrice = document.getElementById("metalPrice");
    mePrice.innerText = materials.metal.cost + materials.metal.job_cost;
} catch (err) {
    console.log(err)
}

try {
    var fPrice = document.getElementById("fibraPrice");
    fPrice.innerText = materials.fibra.cost + materials.fibra.job_cost;
} catch (err) {
    console.log(err)
}

try {
    var tPrice = document.getElementById("termoPrice");
    tPrice.innerText = materials.termo.cost + materials.termo.job_cost;
} catch (err) {
    console.log(err)
}

try {
    var kPrice = document.getElementById("klinkerPrice");
    kPrice.innerText = materials.klinker.cost + materials.klinker.job_cost;
} catch (err) {
    console.log(err)
}

try {
    var dPrice = document.getElementById("decorPrice");
    dPrice.innerHTML = materials.decor.cost;
} catch (err) {
    console.log(err)
}