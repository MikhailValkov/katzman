var nextArrow = '<div class="control-next-arrow">▶▶</div>';
var prevArrow = '<div class="control-prev-arrow">◀◀</div>';
var maxSlidePosition = 10;

var control = {
    0: {
        id: "first-promo",
        title: "Термопанели: предложение",
        prev: "",
        next: "Виды покрытий" + nextArrow,
    },
    1: {
        id: "summary",
        title: "Термопанели: обзор",
        prev: prevArrow + "Предложение",
        next: "Палитра цветов" + nextArrow,
    },
    2: {
        id: "palitra",
        title: "Термопанели: палитра цветов",
        prev: prevArrow + "Обзор",
        next: "Качества" + nextArrow,
    },
    3: {
        id: "kachestva",
        title: "Термопанели: качества",
        prev: prevArrow + "Палитра цветов",
        next: "Технология монтажа" + nextArrow,
    },
    4: {
        id: "schema",
        title: "Термопанели: монтаж",
        prev: prevArrow + "Качества",
        next: "Устройство откосов" + nextArrow,
    },
    5: {
        id: "otkos",
        title: "Термопанели: откосы",
        prev: prevArrow + "Технология монтажа",
        next: "Как мы работаем" + nextArrow,
    },
    6: {
        id: "how-we-work",
        title: "Термопанели: как мы работаем",
        prev: prevArrow + "Откосы",
        next: "Портфолио" + nextArrow,
    },
    7: {
        id: "portfolio",
        title: "Термопанели: портфолио",
        prev: prevArrow + "Устройство откосов",
        next: "Видео обзор" + nextArrow,
    },
    8: {
        id: "video",
        title: "Термопанели: видео обзор",
        prev: prevArrow + "Портфолио",
        next: "Предложение" + nextArrow,
    },
    9: {
        id: "credit-promo",
        title: "Термопанели: рассрочка",
        prev: prevArrow + "Видео",
        next: "Предложение" + nextArrow,
    },
    10: {
        id: "last-promo",
        title: "Термопанели: звоните!",
        prev: prevArrow + "Рассрочка",
        next: "",
    },
}

var maxPortfolioPosition = 5;

var portfolio = {
    0: 'url(/assets/img/termopanel/portfolio/0.jpg)',
    1: 'url(/assets/img/termopanel/portfolio/1.jpg)',
    2: 'url(/assets/img/termopanel/portfolio/2.jpg)',
    3: 'url(/assets/img/termopanel/portfolio/3.jpg)',
    4: 'url(/assets/img/termopanel/portfolio/4.jpg)',
    5: 'url(/assets/img/termopanel/portfolio/5.jpg)',
    // 6: 'url(/assets/img/termopanel/portfolio/6.jpg)',
    // 7: 'url(/assets/img/termopanel/portfolio/7.jpg)',
}