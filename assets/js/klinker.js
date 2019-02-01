var nextArrow = '<div class="control-next-arrow">▶▶</div>';
var prevArrow = '<div class="control-prev-arrow">◀◀</div>';
var maxSlidePosition = 9;

var control = {
    0 : {
        id: "summary",
        title: "Клинкерная плитка: обзор",
        prev: "",
        next: "Палитра цветов" + nextArrow,
    },
    1 : {
        id: "palitra",
        title: "Клинкерная плитка: палитра цветов",
        prev: prevArrow + "Обзор",
        next: "Качества" + nextArrow,
    },
    2 : {
        id: "kachestva",
        title: "Клинкерная плитка: качества",
        prev: prevArrow + "Палитра цветов",
        next: "Технология монтажа" + nextArrow,
    },
    3 : {
        id: "schema",
        title: "Клинкерная плитка: монтаж",
        prev: prevArrow + "Качества",
        next: "Устройство откосов" + nextArrow,
    },
    4 : {
        id: "otkos",
        title: "Клинкерная плитка: откосы",
        prev: prevArrow + "Технология монтажа",
        next: "Портфолио" + nextArrow,
    },
    5 : {
        id: "portfolio",
        title: "Клинкерная плитка: портфолио",
        prev: prevArrow + "Устройство откосов",
        next: "Видео обзор" + nextArrow,
    },
    6 : {
        id: "video",
        title: "Клинкерная плитка: видео обзор",
        prev: prevArrow + "Портфолио",
        next: "Предложение" + nextArrow,
    },
    7: {
        id: "promo",
        title: "Клинкерная плитка: предложение",
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
    0: 'url(/assets/img/klinker/portfolio/0.jpg)',
    1: 'url(/assets/img/klinker/portfolio/1.jpg)',
    2: 'url(/assets/img/klinker/portfolio/2.jpg)',
    3: 'url(/assets/img/klinker/portfolio/3.jpg)',
    4: 'url(/assets/img/klinker/portfolio/4.jpg)',
    5: 'url(/assets/img/klinker/portfolio/5.jpg)',
    6: 'url(/assets/img/klinker/portfolio/6.jpg)',
    7: 'url(/assets/img/klinker/portfolio/7.jpg)',
}