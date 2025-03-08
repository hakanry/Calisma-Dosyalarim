import axios from 'axios';

// Aşağıdaki Fonksiyonu değiştirmeyin

export async function ipAdresimiAl() {
  return await axios({
    method: 'get',
    url: 'https://apis.ergineer.com/ipadresim',
  }).then(function (response) {
    return response.data;
  });
}

/*

	ADIM 1: Aşağdıdaki getData() fonskiyonunda axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız:
  https://apis.ergineer.com/ipgeoapi/{ipAdresiniz}

  Fonksiyon gelen data'yı(obje) geri dönmeli
	
	NOT: ipAdresinizi ipAdresimiAl fonksiyonu ile alabilirsiniz.

  NOT2: gelen datayı browser'da network tab'ından inceleyin. 
  (network tab'ından inceleyemezseniz get isteklerinin URL'ini browser'dan açıp da kontrol edebilirsiniz. 😉)

  Bu data Adım 2'de oluşturacağınız component'de argüman olarak kullanılıyor, önden içindeki verilere(key-Value ikililerine) bakmanız iyi olur).
*/

export async function getData() {
  const ipAdres = await ipAdresimiAl();
  const cevap = await axios.get(
    `https://apis.ergineer.com/ipgeoapi/${ipAdres}`
  );

  return cevap.data;
}

/*
	ADIM 2: Aşağıdaki cardOlustur fonskiyonunu argüman olarak sadece 1 nesne alacak şekilde tanımlayın.

  Bu fonksiyonda DOM metotlarını ve özelliklerini kullanarak, aşağıdaki element'i oluşturup dönün.

  Not: Ülke Bayrağını bu linkten alabilirsiniz:
  'https://flaglog.com/codes/standardized-rectangle-120px/{ülkeKodu}.png';
	
	<div class="card">
    <img src={ülke bayrağı url} />
    <div class="card-info">
      <h3 class="ip">{ip adresi}</h3>
      <p class="ulke">{ülke bilgisi (ülke kodu)}</p>
      <p>Enlem: {enlem} Boylam: {boylam}</p>
      <p>Şehir: {şehir}</p>
      <p>Saat dilimi: {saat dilimi}</p>
      <p>Para birimi: {para birimi}</p>
      <p>ISP: {isp}</p>
    </div>
  </div>
*/

export function cardOlustur(nesne) {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  const bayrak = document.createElement('img');
  bayrak.src = `https://flaglog.com/codes/standardized-rectangle-120px/${nesne.ülkeKodu}.png`;
  cardDiv.appendChild(bayrak);

  const cardInfoDiv = document.createElement('div');
  cardInfoDiv.classList.add('card-info');
  cardDiv.appendChild(cardInfoDiv);

  const h3 = document.createElement('h3');
  h3.classList.add('ip');
  h3.textContent = nesne.sorgu;
  cardInfoDiv.appendChild(h3);

  const ulke = document.createElement('p');
  ulke.classList.add('ulke');
  ulke.textContent = `${nesne['ülke']} (${nesne['ülkeKodu']})`;
  cardInfoDiv.appendChild(ulke);

  const enlemBoylam = document.createElement('p');
  enlemBoylam.textContent = `Enlem: ${nesne.enlem} Boylam: ${nesne.boylam}`;
  cardInfoDiv.appendChild(enlemBoylam);

  const sehir = document.createElement('p');
  sehir.textContent = `Şehir: ${nesne['şehir']}`;
  cardInfoDiv.appendChild(sehir);

  const saatDilim = document.createElement('p');
  saatDilim.textContent = `Saat dilimi: ${nesne['saatdilimi']}`;
  cardInfoDiv.appendChild(saatDilim);

  const paraBirim = document.createElement('p');
  paraBirim.textContent = `Para birimi: ${nesne['parabirimi']}`;
  cardInfoDiv.appendChild(paraBirim);

  const isp = document.createElement('p');
  isp.textContent = `ISP: ${nesne.isp}`;
  cardInfoDiv.appendChild(isp);

  return cardDiv;
}
