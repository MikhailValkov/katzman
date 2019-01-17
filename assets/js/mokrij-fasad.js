var nextArrow = '<div class="control-next-arrow">▶▶</div>';
var prevArrow = '<div class="control-prev-arrow">◀◀</div>';
var maxSlidePosition = 2;

var control = {
    0 : {
        id: "vid",
        title: "Мокрый фасад: виды покрытий",
        prev: "",
        next: "Палитра цветов" + nextArrow,
    },
    1 : {
        id: "palitra",
        title: "Мокрый фасад: палитра цветов",
        prev: prevArrow + "Виды покрытий",
        next: "Плюсы и минусы" + nextArrow,
        
    },
    2 : {
        id: "plus-minus",
        title: "Мокрый фасад: плюсы и минусы",
        prev: prevArrow + "Палитра цветов",
        next: "Технология монтажа" + nextArrow,
    },
    3 : {
        id: "montazh",
        title: "Мокрый фасад: технология монтажа",
        prev: prevArrow + "Плюсы и минусы",
        next: "Устройство откосов" + nextArrow,
    },
    4 : {
        id: "otkos",
        title: "Мокрый фасад: устройство откосов",
        prev: prevArrow + "Технология монтажа",
        next: "Портфолио" + nextArrow,
    },
    5 : {
        id: "portfolio",
        title: "Мокрый фасад: портфолио",
        prev: prevArrow + "Устройство откосов",
        next: "Видео обзор" + nextArrow,
    },
    6 : {
        id: "video",
        title: "Мокрый фасад: видео обзор",
        prev: prevArrow + "Портфолио",
        next: "Наши качества" + nextArrow,
    },
    7 : {
        id: "qualities",
        title: "Наши качества",
        prev: prevArrow + "Видео обзор",
        next: "Как мы работаем" + nextArrow,
    },
    8 : {
        id: "we-work",
        title: "Как мы работаем",
        prev: prevArrow + "Наши качества",
        next: "",
    },
}
