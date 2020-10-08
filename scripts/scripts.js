$(document).ready(function () {

  const bar = document.querySelector('.bar');
  const fulfilled = document.querySelector('.fulfilled');
  const percents = document.querySelector('.percents');
  const randomWidth = Math.floor((Math.random() * 20) + 10);

  fulfilled.style.width = `${randomWidth}%`;
  percents.textContent = `${randomWidth}%`;

  bar.addEventListener('mouseover', () => {
    const randomTiming = Math.floor((Math.random() * 2) + 2);
    fulfilled.style.transitionDuration = `${randomTiming}s`;
    fulfilled.style.width = '100%';
    percents.textContent = `100%`;
  });

  const mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    }
  });

});