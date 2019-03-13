var nextArrow = '<div class="control-next-arrow">▶▶</div>';
var prevArrow = '<div class="control-prev-arrow">◀◀</div>';
var maxSlidePosition = 6;

var control = {
    0: {
        id: "summary",
        title: "Декоративные элементы: обзор",
        prev: "",
        next: "Палитра цветов" + nextArrow,
    },
    1: {
        id: "palitra",
        title: "Декоративные элементы: палитра цветов",
        prev: prevArrow + "Обзор",
        next: "Качества" + nextArrow,
    },
    2: {
        id: "kachestva",
        title: "Декоративные элементы: качества",
        prev: prevArrow + "Палитра цветов",
        next: "Технология монтажа" + nextArrow,
    },
    3: {
        id: "schema",
        title: "Декоративные элементы: монтаж",
        prev: prevArrow + "Качества",
        next: "Портфолио" + nextArrow,
    },
    4: {
        id: "portfolio",
        title: "Декоративные элементы: портфолио",
        prev: prevArrow + "Монтаж",
        next: "Видео обзор" + nextArrow,
    },
    5: {
        id: "video",
        title: "Декоративные элементы: видео обзор",
        prev: prevArrow + "Портфолио",
        next: "Предложение" + nextArrow,
    },
    // 6: {
    //     id: "promo",
    //     title: "Декоративные элементы: предложение",
    //     prev: prevArrow + "Видео обзор",
    //     next: "",
    // },
    6: {
        id: "last-promo",
        title: "Мокрый фасад: звоните!",
        prev: prevArrow + "Видео",
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