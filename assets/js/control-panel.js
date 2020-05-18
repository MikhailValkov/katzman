var prev = document.getElementById("control-prev");
var title = document.getElementById("control-text");
var next = document.getElementById("control-next");
var currentSlide = 0;
var delay = 400;
var inSliding = false;

next.innerHTML = control[0].next;
title.innerHTML = control[0].title;
prev.innerHTML = control[0].prev;

function nextSlide() {
    if (currentSlide < maxSlidePosition) {

        var cslide = document.getElementById(control[currentSlide].id);
        cslide.style.left = "-100vw";
        var nslide = document.getElementById(control[currentSlide + 1].id);
        nslide.style.left = "0px";

        prev.innerHTML = control[currentSlide + 1].prev;
        title.innerHTML = control[currentSlide + 1].title;
        if (currentSlide + 1 === maxSlidePosition) {
            next.style.visibility = "hidden";
        } else {
            next.style.visibility = "visible";
            next.innerHTML = control[currentSlide + 1].next;
        }

        currentSlide += 1;
        prev.style.visibility = "visible";
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        var cslide = document.getElementById(control[currentSlide].id);
        cslide.style.left = "-100vw";
        var nslide = document.getElementById(control[currentSlide - 1].id);
        nslide.style.left = "0px";

        if (currentSlide - 1 === 0) {
            prev.style.visibility = "hidden";
        } else {
            prev.style.visibility = "visible";
            prev.innerHTML = control[currentSlide - 1].prev;
        }
        title.innerHTML = control[currentSlide - 1].title;
        next.innerHTML = control[currentSlide - 1].next;
        currentSlide -= 1;
        next.style.visibility = "visible";
    }

}

function wheelHandler(event) {
    event.preventDefault();
    if (!inSliding) {

        inSliding = true;

        if (event.deltaY > 0) {
            nextSlide();
        } else {
            prevSlide();
        }

        setTimeout(() => { inSliding = false }, delay);

    } else {
        return
    }
}

function keyHandler(event) {
    if (!inSliding) {

        inSliding = true;

        if (event.keyCode === 37 || event.keyCode === 38) {
            // left
            prevSlide();
        }
        if (event.keyCode === 39 || event.keyCode === 40) {
            //  right
            nextSlide();
        }

        setTimeout(() => { inSliding = false }, delay);

    } else {
        return
    }
}

window.onwheel = wheelHandler;
window.onkeydown = keyHandler;