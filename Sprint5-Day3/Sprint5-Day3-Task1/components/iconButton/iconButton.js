/*
  Adım 1: Aşağıdaki HTML button yapısını oluşturup geri dönecek 'IconButton' isimli bir fonksiyon yazın.

  <button class="btn btn-{btnColor}">
    <i class="{iconClass}" />
    {btnText}
  </button>

  'IconButton' fonksiyonu 3 argüman alacak: 
  - btnText: butonun içindeki metin
  - btnColor: butonun arkplan rengi [ blue | orange | red ] değerlerini alabilir
  - iconClass: FontAwesome kütüphanesi icon class ismi 

Adım 2: Bu fonksiyonu kullanarak aşağıdaki butonları oluşturun: 

    1. { btnText: "Aç", btnColor: "blue", iconClass: "fa fa-folder-open" }
    2. { btnText: "Düzenle", btnColor: "orange", iconClass: "fa fa-pen" }
    3. { btnText: "Sil", btnColor: "red", iconClass: "fa fa-trash" }

Adım 3: Oluşturduğunuz buttonları div#icon-buttons içerisine ekleyin

*/

function IconButton(btnText, btnColor, iconClass){
  const buton = document.createElement("button");
  buton.classList.add("btn");
  buton.classList.add(`btn-${btnColor}`);
  
  const ikon = document.createElement("i");
  ikon.classList.add(...iconClass.split(" "));
  buton.appendChild(ikon);
  buton.append(btnText);
  return buton;
  
}

const butonlar = [
  { btnText: "Aç", btnColor: "blue", iconClass: "fa fa-folder-open" },
  { btnText: "Düzenle", btnColor: "orange", iconClass: "fa fa-pen" },
  { btnText: "Sil", btnColor: "red", iconClass: "fa fa-trash" }
]

butonlar.forEach(element => {
  document.getElementById("icon-buttons").appendChild(IconButton(element.btnText,element.btnColor,element.iconClass));  
});
