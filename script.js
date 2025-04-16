const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
  });
  
  var tl = gsap.timeline();
  tl.to("#page1", {
    y: "100vh",
    scale: 0.6,
    duration: 0
  });
  tl.to("#page1", {
    y: "30vh",
    duration: 1,
    delay: 1
  });
  tl.to("#page1", {
    y: "0vh",
    rotate: 360,
    scale: 1,
    duration: 0.7
  });
  
  const elemsContainer = document.getElementById('elems');
  let isMouseDown = false;
  let startX, scrollLeft;
  
  elemsContainer.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.pageX - elemsContainer.offsetLeft;
    scrollLeft = elemsContainer.scrollLeft;
    elemsContainer.style.cursor = 'grabbing';
  });
  
  elemsContainer.addEventListener('mouseleave', () => {
    isMouseDown = false;
    elemsContainer.style.cursor = 'grab';
  });
  
  elemsContainer.addEventListener('mouseup', () => {
    isMouseDown = false;
    elemsContainer.style.cursor = 'grab';
  });
  
  elemsContainer.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - elemsContainer.offsetLeft;
    const scroll = (x - startX);
    elemsContainer.scrollLeft = scrollLeft - scroll;
  });
  
  elemsContainer.addEventListener('touchstart', (e) => {
    isMouseDown = true;
    startX = e.touches[0].pageX - elemsContainer.offsetLeft;
    scrollLeft = elemsContainer.scrollLeft;
  });
  
  elemsContainer.addEventListener('touchend', () => {
    isMouseDown = false;
  });
  
  elemsContainer.addEventListener('touchmove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - elemsContainer.offsetLeft;
    const scroll = (x - startX);
    elemsContainer.scrollLeft = scrollLeft - scroll;
  });
  