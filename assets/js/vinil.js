var nextArrow = '<div class="control-next-arrow">▶▶</div>';
var prevArrow = '<div class="control-prev-arrow">◀◀</div>';
var maxSlidePosition = 7;

var control = {
    0 : {
        id: "summary",
        title: "Виниловый сайдинг: обзор",
        prev: "",
        next: "Палитра цветов" + nextArrow,
    },
    1 : {
        id: "palitra",
        title: "Виниловый сайдинг: палитра цветов",
        prev: prevArrow + "Обзор",
        next: "Качества" + nextArrow,
    },
    2 : {
        id: "kachestva",
        title: "Виниловый сайдинг: качества",
        prev: prevArrow + "Палитра цветов",
        next: "Технология монтажа" + nextArrow,
    },
    3 : {
        id: "schema",
        title: "Виниловый сайдинг: монтаж",
        prev: prevArrow + "Качества",
        next: "Устройство откосов" + nextArrow,
    },
    4 : {
        id: "otkos",
        title: "Виниловый сайдинг: откосы",
        prev: prevArrow + "Технология монтажа",
        next: "Портфолио" + nextArrow,
    },
    5 : {
        id: "portfolio",
        title: "Виниловый сайдинг: портфолио",
        prev: prevArrow + "Устройство откосов",
        next: "Видео обзор" + nextArrow,
    },
    6 : {
        id: "video",
        title: "Виниловый сайдинг: видео обзор",
        prev: prevArrow + "Портфолио",
        next: "Предложение" + nextArrow,
    },
    7: {
        id: "promo",
        title: "Виниловый сайдинг: предложение",
        prev: prevArrow + "Видео обзор",
        next: "Наши качества" + nextArrow,
    },
}

var maxPortfolioPosition = 6;

var portfolio = {
    0: 'url(/assets/img/vinil/portfolio/0.jpg)',
    1: 'url(/assets/img/vinil/portfolio/1.jpg)',
    2: 'url(/assets/img/vinil/portfolio/2.jpg)',
    3: 'url(/assets/img/vinil/portfolio/3.jpg)',
    4: 'url(/assets/img/vinil/portfolio/4.jpg)',
    5: 'url(/assets/img/vinil/portfolio/5.jpg)',
    6: 'url(/assets/img/vinil/portfolio/6.jpeg)',
}