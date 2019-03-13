var nextArrow = '<div class="control-next-arrow">▶▶</div>';
var prevArrow = '<div class="control-prev-arrow">◀◀</div>';
var maxSlidePosition = 8;

var control = {
    0: {
        id: "first-promo",
        title: "Мокрый фасад: предложение",
        prev: "",
        next: "Виды покрытий" + nextArrow,
    },
    1: {
        id: "vid",
        title: "Мокрый фасад: виды покрытий",
        prev: prevArrow + "Предложение",
        next: "Палитра цветов" + nextArrow,
    },
    2: {
        id: "palitra",
        title: "Мокрый фасад: палитра цветов",
        prev: prevArrow + "Виды покрытий",
        next: "Плюсы и минусы" + nextArrow,
    },
    3: {
        id: "plus-minus",
        title: "Мокрый фасад: плюсы и минусы",
        prev: prevArrow + "Палитра цветов",
        next: "Технология монтажа" + nextArrow,
    },
    4: {
        id: "schema",
        title: "Мокрый фасад: технология монтажа",
        prev: prevArrow + "Плюсы и минусы",
        next: "Устройство откосов" + nextArrow,
    },
    5: {
        id: "otkos",
        title: "Мокрый фасад: устройство откосов",
        prev: prevArrow + "Технология монтажа",
        next: "Портфолио" + nextArrow,
    },
    6: {
        id: "portfolio",
        title: "Мокрый фасад: портфолио",
        prev: prevArrow + "Устройство откосов",
        next: "Видео обзор" + nextArrow,
    },
    7: {
        id: "video",
        title: "Мокрый фасад: видео обзор",
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
    0: 'url(/assets/img/mokrij-fasad/portfolio/1.jpg)',
    1: 'url(/assets/img/mokrij-fasad/portfolio/2.jpg)',
    2: 'url(/assets/img/mokrij-fasad/portfolio/3.jpg)',
    3: 'url(/assets/img/mokrij-fasad/portfolio/4.jpg)',
    4: 'url(/assets/img/mokrij-fasad/portfolio/5.jpg)',
    5: 'url(/assets/img/mokrij-fasad/portfolio/6.jpg)',
    6: 'url(/assets/img/mokrij-fasad/portfolio/7.jpg)',
    7: 'url(/assets/img/mokrij-fasad/portfolio/8.jpg)',
}