// Kodlar Buraya
const buton = document.createElement('button');
buton.id = 'acKapa';
buton.textContent = 'Karanlık temayı aç';
document.querySelector('.description').appendChild(buton);

function karanlikTemayiAcKapa() {
  if (!document.body.classList.contains('dark')) {
    buton.textContent = 'Karanlık temayı kapat';
    document.body.classList.add('dark');
  } else {
    buton.textContent = 'Karanlık temayı aç';
    document.body.classList.remove('dark');
  }
}

buton.addEventListener('click', karanlikTemayiAcKapa);
