
const slider = $('.sliders').bxSlider({
    pager: false,
    controls: false,
});

$('.arrow_left').click((e) => {
    e.preventDefault();
    slider.goToPrevSlide();
});


$('.arrow_right').click((e) => {
    e.preventDefault();
    slider.goToNextSlide();
});
