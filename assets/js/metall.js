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
        title: "Фиброцементный сайдинг: обзор",
        prev: prevArrow + "Предложение",
        next: "Палитра цветов" + nextArrow,
    },
    2: {
        id: "palitra",
        title: "Металлосайдинг: палитра цветов",
        prev: prevArrow + "Обзор",
        next: "Качества" + nextArrow,
    },
    3: {
        id: "kachestva",
        title: "Металлосайдинг: качества",
        prev: prevArrow + "Палитра цветов",
        next: "Технология монтажа" + nextArrow,
    },
    4: {
        id: "schema",
        title: "Металлосайдинг: монтаж",
        prev: prevArrow + "Качества",
        next: "Устройство откосов" + nextArrow,
    },
    5: {
        id: "otkos",
        title: "Металлосайдинг: откосы",
        prev: prevArrow + "Технология монтажа",
        next: "Портфолио" + nextArrow,
    },
    6: {
        id: "portfolio",
        title: "Металлосайдинг: портфолио",
        prev: prevArrow + "Устройство откосов",
        next: "Видео обзор" + nextArrow,
    },
    7: {
        id: "video",
        title: "Металлосайдинг: видео обзор",
        prev: prevArrow + "Портфолио",
        next: "Предложение" + nextArrow,
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