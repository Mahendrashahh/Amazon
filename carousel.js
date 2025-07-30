function slideCarousel(carouselId, direction) {
    const track = document.getElementById(carouselId);
    const img = track.querySelector('.carousel-img');
    if (!img) return;
    const imgWidth = img.offsetWidth + 16; // 16px gap
    track.scrollBy({ left: direction * imgWidth * 3, behavior: 'smooth' });
}
