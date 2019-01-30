var nextArrow = '<div class="control-next-arrow">▶▶</div>';
var prevArrow = '<div class="control-prev-arrow">◀◀</div>';
var maxSlidePosition = 9;

var control = {
    0 : {
        id: "summary",
        title: "Металлосайдинг: обзор",
        prev: "",
        next: "Палитра цветов" + nextArrow,
    },
    1 : {
        id: "palitra",
        title: "Металлосайдинг: палитра цветов",
        prev: prevArrow + "Обзор",
        next: "Качества" + nextArrow,
    },
    2 : {
        id: "kachestva",
        title: "Металлосайдинг: качества",
        prev: prevArrow + "Палитра цветов",
        next: "Технология монтажа" + nextArrow,
    },
    3 : {
        id: "schema",
        title: "Металлосайдинг: монтаж",
        prev: prevArrow + "Качества",
        next: "Устройство откосов" + nextArrow,
    },
    4 : {
        id: "otkos",
        title: "Металлосайдинг: откосы",
        prev: prevArrow + "Технология монтажа",
        next: "Портфолио" + nextArrow,
    },
    5 : {
        id: "portfolio",
        title: "Металлосайдинг: портфолио",
        prev: prevArrow + "Устройство откосов",
        next: "Видео обзор" + nextArrow,
    },
    6 : {
        id: "video",
        title: "Металлосайдинг: видео обзор",
        prev: prevArrow + "Портфолио",
        next: "Предложение" + nextArrow,
    },
    7: {
        id: "promo",
        title: "Металлосайдинг: предложение",
        prev: prevArrow + "Видео обзор",
        next: "Наши качества" + nextArrow,
    },
    8 : {
        id: "qualities",
        title: "Наши качества",
        prev: prevArrow + "Предложение",
        next: "Как мы работаем" + nextArrow,
    },
    9 : {
        id: "we-work",
        title: "Как мы работаем",
        prev: prevArrow + "Наши качества",
        next: "",
    },
}

var maxPortfolioPosition = 7;

var portfolio = {
    0: 'url(/assets/img/metal/portfolio/0.jpg)',
    1: 'url(/assets/img/metal/portfolio/1.jpg)',
    2: 'url(/assets/img/metal/portfolio/2.jpg)',
    3: 'url(/assets/img/metal/portfolio/3.jpg)',
    4: 'url(/assets/img/metal/portfolio/4.jpg)',
    5: 'url(/assets/img/metal/portfolio/5.jpg)',
    6: 'url(/assets/img/metal/portfolio/6.jpg)',
    7: 'url(/assets/img/metal/portfolio/7.jpg)',
}