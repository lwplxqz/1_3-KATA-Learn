const show_button = document.querySelector('.slider__show-more-button');
const hide_button = document.querySelector('.slider__hide-more-button');
const wrapper = document.querySelector('.slider__swiper-wrapper');
const swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    autoHeight: true,
    spaceBetween: 16,
    slidesPerView: 1.2,
    centeredSlides: false,
    breakpoints: {
        768: {
            enabled: false,
            onAny() {
                swiper.destroy(true, true);
            }
        }
    },
    observer: true,
})

show_button.addEventListener('click', function(){
    wrapper.classList.add('slider__swiper-wrapper_unfolded');
    show_button.classList.add('hidden');
    hide_button.classList.remove('hidden');
})
hide_button.addEventListener('click', function(){
    wrapper.classList.remove('slider__swiper-wrapper_unfolded');
    hide_button.classList.add('hidden');
    show_button.classList.remove('hidden');
})