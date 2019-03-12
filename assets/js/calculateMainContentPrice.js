
try {
    var mPrice = document.getElementById("mokrijPrice");
    mPrice.innerText = materials.decor.koroed.cost + materials.decor.koroed.job_cost;
} catch (err) {
    console.log(err)
}

try {
    var hPrice = document.getElementById("haubergPrice");
    hPrice.innerText = materials.decor.hauberg.cost + materials.decor.hauberg.job_cost;
} catch (err) {
    console.log(err)
}

try {
    var vPrice = document.getElementById("vinilPrice");
    vPrice.innerText = materials.decor.vinil.cost + materials.decor.vinil.job_cost;
} catch (err) {
    console.log(err)
}

try {
    var mePrice = document.getElementById("metalPrice");
    mePrice.innerText = materials.decor.metal.cost + materials.decor.metal.job_cost;
} catch (err) {
    console.log(err)
}

try {
    var fPrice = document.getElementById("fibraPrice");
    fPrice.innerText = materials.decor.fibra.cost + materials.decor.fibra.job_cost;
} catch (err) {
    console.log(err)
}

try {
    var tPrice = document.getElementById("termoPrice");
    tPrice.innerText = materials.decor.termo.cost + materials.decor.termo.job_cost;
} catch (err) {
    console.log(err)
}

try {
    var kPrice = document.getElementById("klinkerPrice");
    kPrice.innerText = materials.decor.klinker.cost + materials.decor.klinker.job_cost;
} catch (err) {
    console.log(err)
}