// GSAP animations

const exhibition = document.querySelector('.panel__about--exhibition');
const author = document.querySelector('.panel__about--author');
const header1 = document.querySelector('.panel--introduction');

gsap.fromTo(exhibition.children, {y: '+=200', opacity: 0.5}, {y: 0, opacity: 1, duration: 1, ease: 'easeInOut', scrollTrigger: {
    trigger: '.panel__about--exhibition',
    start: 'top 40%'
}})
gsap.fromTo(author.children, {y: '+=100'}, {y: 0, duration: 1, scrollTrigger: {
    trigger: '.panel__about--author',
    start: 'top 60%'
}})
gsap.fromTo(header1.children, {opacity: 1}, {opacity: 0, duration: 0.1, scrollTrigger: {
    trigger: '.panel__about--exhibition',
    start: 'top bottom',
    scrub: true
}})

// Exhibition works slider

$('.works__slider').slick({
    infinite: true,
    // vertical: true
    slidesToShow: 2,
    slidesToScroll: 2
});