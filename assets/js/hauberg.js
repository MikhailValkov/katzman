var nextArrow = '<div class="control-next-arrow">▶▶</div>';
var prevArrow = '<div class="control-prev-arrow">◀◀</div>';
var maxSlidePosition = 7;

var control = {
    0: {
        id: "first-promo",
        title: "Фиброцементный сайдинг: предложение",
        prev: "",
        next: "Виды покрытий" + nextArrow,
    },
    1: {
        id: "summary",
        title: "Плитка Технониколь: обзор",
        prev: prevArrow + "Предложение",
        next: "Палитра цветов" + nextArrow,
    },
    2: {
        id: "palitra",
        title: "Плитка Технониколь: палитра цветов",
        prev: prevArrow + "Обзор",
        next: "Качества" + nextArrow,
    },
    3: {
        id: "kachestva",
        title: "Плитка Технониколь: качества",
        prev: prevArrow + "Палитра цветов",
        next: "Технология монтажа" + nextArrow,
    },
    4: {
        id: "schema",
        title: "Плитка Технониколь: монтаж",
        prev: prevArrow + "Качества",
        next: "Устройство откосов" + nextArrow,
    },
    5: {
        id: "otkos",
        title: "Плитка Технониколь: откосы",
        prev: prevArrow + "Технология монтажа",
        next: "Портфолио" + nextArrow,
    },
    6: {
        id: "portfolio",
        title: "Плитка Технониколь: портфолио",
        prev: prevArrow + "Устройство откосов",
        next: "Видео обзор" + nextArrow,
    },
    7: {
        id: "video",
        title: "Плитка Технониколь: видео обзор",
        prev: prevArrow + "Портфолио",
        next: "Предложение" + nextArrow,
    },
}

var maxPortfolioPosition = 7;

var portfolio = {
    0: 'url(/assets/img/hauberg/portfolio/0.jpg)',
    1: 'url(/assets/img/hauberg/portfolio/1.jpg)',
    2: 'url(/assets/img/hauberg/portfolio/2.jpg)',
    3: 'url(/assets/img/hauberg/portfolio/3.jpg)',
    4: 'url(/assets/img/hauberg/portfolio/4.jpg)',
    5: 'url(/assets/img/hauberg/portfolio/5.jpg)',
    6: 'url(/assets/img/hauberg/portfolio/6.jpg)',
    7: 'url(/assets/img/hauberg/portfolio/7.jpg)',
    8: 'url(/assets/img/hauberg/portfolio/8.jpg)',
}