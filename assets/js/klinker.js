var nextArrow = '<div class="control-next-arrow">▶▶</div>';
var prevArrow = '<div class="control-prev-arrow">◀◀</div>';
var maxSlidePosition = 8;

var control = {
    0: {
        id: "first-promo",
        title: "Фиброцементный сайдинг: предложение",
        prev: "",
        next: "Виды покрытий" + nextArrow,
    },
    1: {
        id: "summary",
        title: "Фиброцементный сайдинг: обзор",
        prev: prevArrow + "Предложение",
        next: "Палитра цветов" + nextArrow,
    },
    2: {
        id: "palitra",
        title: "Клинкерная плитка: палитра цветов",
        prev: prevArrow + "Обзор",
        next: "Качества" + nextArrow,
    },
    3: {
        id: "kachestva",
        title: "Клинкерная плитка: качества",
        prev: prevArrow + "Палитра цветов",
        next: "Технология монтажа" + nextArrow,
    },
    4: {
        id: "schema",
        title: "Клинкерная плитка: монтаж",
        prev: prevArrow + "Качества",
        next: "Устройство откосов" + nextArrow,
    },
    5: {
        id: "otkos",
        title: "Клинкерная плитка: откосы",
        prev: prevArrow + "Технология монтажа",
        next: "Портфолио" + nextArrow,
    },
    6: {
        id: "portfolio",
        title: "Клинкерная плитка: портфолио",
        prev: prevArrow + "Устройство откосов",
        next: "Видео обзор" + nextArrow,
    },
    7: {
        id: "video",
        title: "Клинкерная плитка: видео обзор",
        prev: prevArrow + "Портфолио",
        next: "Предложение" + nextArrow,
    },
    8: {
        id: "last-promo",
        title: "Мокрый фасад: звоните!",
        prev: prevArrow + "Видео",
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