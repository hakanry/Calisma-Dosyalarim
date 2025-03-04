// Challenge 1: dokümandaki tüm resimlerin üzerine mouse ile gelince(mouseenter)
//  üzerine gelinen resme class olarak grayscale eklensin. mouse çıkınca
// (mouseleave) grayscale classı çıkarılsın.
const resimler = document.querySelectorAll('img');
resimler.forEach((resim) => {
  resim.addEventListener('mouseenter', () => {
    resim.classList.add('grayscale');
  });
  resim.addEventListener('mouseleave', () => {
    resim.classList.remove('grayscale');
  });
});
/*
Challenge 2: sayfa aktif iken(herhangi bir yerine mouse ile tıklayınca):
- klavyedeki 1 tuşuna basınca body'e theme1, 2'ye basınca theme2, 3'e basınca theme3 classlarını eklesin.
- "Esc" tuşuna basınca classı sıfırlasın
- Not: keyboard eventlerini document'e değil window'a ekleyin. 
*/

window.addEventListener('keydown', (event) => {
  if (event.key === '1') {
    document.body.classList.add('theme1');
  }
  if (event.key === '2') {
    document.body.classList.add('theme2');
  }
  if (event.key === '3') {
    document.body.classList.add('theme3');
  }
  if (event.key === 'Escape') {
    document.body.classList.remove('theme1', 'theme2', 'theme3');
  }
});

/*
Challenge 3: Input alanına bir şeyler yazınca(input event):
- Büyük harfe dönüştürsün
- 5 karakter'den büyük olduğunda buttonı enabled etsin. küçük ise disabled etsin.
*/

const metin = document.querySelector('footer input');
const btnfooter = document.querySelector('footer button');

metin.addEventListener('input', () => {
  metin.value = metin.value.toUpperCase();
  if (metin.value.length > 5) {
    btnfooter.disabled = false;
  } else {
    btnfooter.disabled = true;
  }
});

/*
Challenge 4: Form submit edildiğinde;
- input alanındaki metni alıp, id'si submitResult olan paragrafa metin olarak "{value} başarı ile kaydedildi..." yazsın.
- input alanını sıfırlasın.
- kaydet butonunu disabled yapsın.
*/

const submitform = document.getElementsByTagName('form')[0];

submitform.addEventListener('submit', (event) => {
  event.preventDefault();
  document.getElementById('submitResult').textContent = `${metin.value} başarı ile kaydedildi...`;
  metin.value = ``;
  btnfooter.disabled = true;
});
