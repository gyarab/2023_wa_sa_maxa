let zadniStrana = '<img src="img/cardBack.jpg" alt="">';
let klik = 0;
const predniStrany = ['<img src="img/andrew.jpg" alt="">','<img src="img/cristiano.jpg" alt="">','<img src="img/jaro.jpg" alt="">','<img src="img/karel.jpg" alt="">','<img src="img/koleso.jpg" alt="">',]

const cards = [document.getElementById('karta1'), document.getElementById('karta2'),document.getElementById('karta3'), document.getElementById('karta4'), document.getElementById('karta5'), document.getElementById('karta6'), document.getElementById('karta7'), document.getElementById('karta8'), document.getElementById('karta9'), document.getElementById('karta10')];
const otoceni = [false,false,false,false,false,false,false,false,false,false];

function zmenIMG(cardID){

    if(otoceni[cardID]==false){
        let obrazekIndex = 0;
        let l = 0;
        for(let i = 0; i<predniStrany.length;i++){
            if(cardID==l||cardID==(l+1)){
                cards[cardID].innerHTML = predniStrany[obrazekIndex];
            }else{
                l+=2;
                obrazekIndex++;
            }
        }
        otoceni[cardID] = true;
    }else {
        cards[cardID].innerHTML = zadniStrana;
        otoceni[cardID] = false;
    }
}
