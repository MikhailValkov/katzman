var nextArrow = '<div class="control-next-arrow">▶▶</div>';
var prevArrow = '<div class="control-prev-arrow">◀◀</div>';
var maxSlidePosition = 8;

var control = {
    0: {
        id: "first-promo",
        title: "Виниловый сайдинг: предложение",
        prev: "",
        next: "Виды покрытий" + nextArrow,
    },
    1: {
        id: "summary",
        title: "Виниловый сайдинг: обзор",
        prev: prevArrow + "Предложение",
        next: "Палитра цветов" + nextArrow,
    },
    2: {
        id: "palitra",
        title: "Виниловый сайдинг: палитра цветов",
        prev: prevArrow + "Обзор",
        next: "Качества" + nextArrow,
    },
    3: {
        id: "kachestva",
        title: "Виниловый сайдинг: качества",
        prev: prevArrow + "Палитра цветов",
        next: "Технология монтажа" + nextArrow,
    },
    4: {
        id: "schema",
        title: "Виниловый сайдинг: монтаж",
        prev: prevArrow + "Качества",
        next: "Устройство откосов" + nextArrow,
    },
    5: {
        id: "otkos",
        title: "Виниловый сайдинг: откосы",
        prev: prevArrow + "Технология монтажа",
        next: "Портфолио" + nextArrow,
    },
    6: {
        id: "portfolio",
        title: "Виниловый сайдинг: портфолио",
        prev: prevArrow + "Устройство откосов",
        next: "Видео обзор" + nextArrow,
    },
    7: {
        id: "video",
        title: "Виниловый сайдинг: видео обзор",
        prev: prevArrow + "Портфолио",
        next: "Предложение" + nextArrow,
    },
    8: {
        id: "last-promo",
        title: "Виниловый сайдинг: звоните!",
        prev: prevArrow + "Видео",
        next: "",
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