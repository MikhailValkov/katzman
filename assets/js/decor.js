var nextArrow = '<div class="control-next-arrow">▶▶</div>';
var prevArrow = '<div class="control-prev-arrow">◀◀</div>';
var maxSlidePosition = 8;

var control = {
    0: {
        id: "first-promo",
        title: "Декоративные элементы: предложение",
        prev: "",
        next: "Обзор" + nextArrow,
    },
    1: {
        id: "summary",
        title: "Декоративные элементы: обзор",
        prev: prevArrow + "Предложение",
        next: "Палитра цветов" + nextArrow,
    },
    2: {
        id: "palitra",
        title: "Декоративные элементы: палитра цветов",
        prev: prevArrow + "Обзор",
        next: "Качества" + nextArrow,
    },
    3: {
        id: "kachestva",
        title: "Декоративные элементы: качества",
        prev: prevArrow + "Палитра цветов",
        next: "Технология монтажа" + nextArrow,
    },
    4: {
        id: "schema",
        title: "Декоративные элементы: монтаж",
        prev: prevArrow + "Качества",
        next: "Портфолио" + nextArrow,
    },
    5: {
        id: "portfolio",
        title: "Декоративные элементы: портфолио",
        prev: prevArrow + "Монтаж",
        next: "Видео обзор" + nextArrow,
    },
    6: {
        id: "video",
        title: "Декоративные элементы: видео обзор",
        prev: prevArrow + "Портфолио",
        next: "Предложение" + nextArrow,
    },
    7: {
        id: "credit-promo",
        title: "Декоративные элементы: рассрочка",
        prev: prevArrow + "Видео",
        next: "Предложение" + nextArrow,
    },
    8: {
        id: "last-promo",
        title: "Декоративные элементы: звоните!",
        prev: prevArrow + "Рассрочка",
        next: "",
    },
}

var maxPortfolioPosition = 8;

var portfolio = {
    0: 'url(/assets/img/decor/portfolio/0.jpg)',
    1: 'url(/assets/img/decor/portfolio/1.jpg)',
    2: 'url(/assets/img/decor/portfolio/2.jpeg)',
    3: 'url(/assets/img/decor/portfolio/3.jpg)',
    4: 'url(/assets/img/decor/portfolio/4.png)',
    5: 'url(/assets/img/decor/portfolio/5.jpg)',
    6: 'url(/assets/img/decor/portfolio/6.jpg)',
    7: 'url(/assets/img/decor/portfolio/7.jpg)',
    8: 'url(/assets/img/decor/portfolio/8.jpg)',
}