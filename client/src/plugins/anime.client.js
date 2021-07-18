import anime from 'animejs/lib/anime.es.js';

window.addEventListener('load', function(event) {
  document.querySelector('.loading-animated-text1').style.display = "block";
  var brandNameText = document.querySelector('.ml14 .letters');
  brandNameText.innerHTML = brandNameText.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  anime.timeline({loop: false})
  .add({
    targets: '.ml14 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeInOutExpo",
    duration: 900
  }).add({
    targets: '.ml14 .letter',
    opacity: [0,1],
    translateX: [40,0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=600',
    delay: (el, i) => 150 + 25 * i
  }).add({
    targets: '.ml14',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  setTimeout(() => {
    document.querySelector('.loading-animated-text2').style.display = "block";
    document.querySelector('.quotes').style.height = "200px";
    var brandSecondaryText = document.querySelector('.ml3');
    brandSecondaryText.innerHTML = brandSecondaryText.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline({loop: false})
    .add({
      targets: '.ml3 .letter',
      opacity: [0,1],
      easing: "easeInOutQuad",
      duration: 1150,
      delay: (el, i) => 150 + 25 * i
    }).add({
      targets: '.ml3',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
  }, 1000)
  setTimeout(() => {
    document.querySelector('.loading-animated-heart').style.display = 'inline-block';
  }, 1300)
})