//Dizi: [-2,1,-3,4,-1,2,1,-5,4]
//En büyük toplamı veren alt dizi: [4, -1, 2, 1]
//Toplam: 6

const dizi = [-2,1,-3,4,-1,2,1,-5,4];

let enBuyuk = dizi[0];

const sonuc = (dizi)=>{
    let altdizi = [];
    for(let i = 0 ; i< dizi.length ; i++){
        for (j = i ; j < dizi.length ; j++){
            altdizi = dizi.slice(i,j);
            let toplam = altdizi.reduce((toplam,a)=> toplam + a,0);
            if(toplam>enBuyuk){
                enBuyuk = altdizi;
                console.log(altdizi)
                
            }
        }
    }
    
}
console.log(sonuc(dizi));