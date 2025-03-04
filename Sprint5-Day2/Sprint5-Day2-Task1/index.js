// Kodlar Buraya

//TASK-1/////////
const resimler = document.querySelectorAll('.main-navigation img');

resimler.forEach((resim) => {
  resim.addEventListener('mouseenter', (event) => {
    document.getElementById('main-image').src = event.target.src;
  });
});
