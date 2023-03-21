
//feltolto resz  Ez megy csak a szamokat stringbe viszi be
let newCharacter = {
    "charName": "",
    "charCast": "",
    "charLevel": 0,
    "charKE": 0,
    "charTE": 0,
    "charVE": 0,
    "charFP": 0,
    "charEP": 0,
    "charSFE": 0,
    "charSPJ": 0,
    "charSPB": 0,
}

function createKarakter(){
    newCharacter.charName = document.getElementById("charName").value
    newCharacter.charCast = document.getElementById("charCast").value
    newCharacter.charLevel = document.getElementById("charLevel").value
    newCharacter.charKE = document.getElementById("charKE").value
    newCharacter.charTE = document.getElementById("charTE").value
    newCharacter.charVE = document.getElementById("charVE").value
    newCharacter.charFP = document.getElementById("charFP").value
    newCharacter.charEP = document.getElementById("charEP").value
    newCharacter.charSFE = document.getElementById("charSFE").value
    newCharacter.charSPJ = document.getElementById("charSPJ").value
    newCharacter.charSPB = document.getElementById("charSPB").value

    console.log(newCharacter)
}

// ez mar nem is kell 
 

// itt IIFE-t csinaltam a functionbol hogy ne kelljen a betolt gombbal hivni ennek erdemes utanannezni
//onclick="dinamicNavigate(${karakter.id})"
(function createCard() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `http://localhost:3000/karakter`, true);
    
    xhr.onload = function() {
        if(this.status === 200){
            const karakter = JSON.parse(this.responseText);
            let output = '';
            karakter.forEach(function(karakter){ 
            output += `
                    <div class="col-md-6 col-lg-3">
                        <div class="card bg-primary ">
                            <div id="Load${karakter.id}"  class="btn-lg kiJelol">
                                <div class="card-body text-center text-dark">
                                    <li> Nev: ${karakter.charName}</li>
                                    <li> Kaszt: ${karakter.charCast}</li>
                                    <li> Szint: ${karakter.charLevel}</li>
                                    <li> KE: ${karakter.charKE}</li>
                                    <li> TE: ${karakter.charTE}</li>
                                    <li> VE: ${karakter.charVE}</li>
                                    <li> FP: ${karakter.charFP}</li>
                                    <li> EP: ${karakter.charEP}</li>
                                    <li> SFE: ${karakter.charSFE}</li>
                                    <li> SPJ: ${karakter.charSPJ}</li>
                                    <li> SPB: ${karakter.charSPB}</li>                                                               
                                </div>
                            </div>
                        </div>
                    </div>    
                `; 
            });
            document.getElementById("cardsPlace").innerHTML=output;
        }
    }
    xhr.send();
    









//ezek a karakterek az igazi APIrol jonnek 
(function getCharacters(){
    fetch(`https://practicefullstackapp.azurewebsites.net/characters`)
        .then( response => response.json() )
        .then((data) => {
           //console.log(data)
            
            data.forEach(element => {
                let div = document.createElement('div');
    
                div.innerHTML = (`     
                    <div class="card text-center text-dark bg-primary p-3 d-flex justify-content-center kiJelol">
                        <div class="m-2">                                           
                            <img class="avatar" src="./img/armor.jpg">
                        </div>  
                        <h3>${element.name}</h3>  
                                                                                   
                        <p>Id: <span>${element.id}</span></p>                                                             
                        <p>Damage: <span>${element.damage}</span></p>                                                             
                        <p>HitPoints: <span>${element.hitPoints}</span></p>                                                             
                        <p>Armor: <span>${element.armor}</span></p>                                                                                                                                     
                    </div>
                `);
        
                div.classList.add("col-lg-3");        
        
                let posts = document.getElementById('characters');
        
                posts.appendChild(div);        
            });

const productCards = document.querySelectorAll('.kiJelol');
//console.log (productCards);

// Add event listener to each card
productCards.forEach(kiJelol => {
    kiJelol.addEventListener('click', () => {
    // Remove selected class from all cards
    productCards.forEach(kiJelol => {
       
        kiJelol.classList.remove('kiJelol');
    });

    // Add selected class to clicked card
    kiJelol.classList.add('bg-success');
    kiJelol.classList.add('kiValaszt1');
    let group1 = document.querySelectorAll('kiValaszt1');
    group1.id = `group1`;
 
 
 console.log(group1);
    
  });
  // itt jeloli ki a 2 es groupot ad nekik id-2 amit lehet hivni
  kiJelol.addEventListener('contextmenu', () => {
    
    productCards.forEach(kiJelol => {
       
    kiJelol.classList.remove('kiJelol');
    });

    kiJelol.classList.add('bg-warning');
    kiJelol.classList.add('kiValaszt2');
    
    let group2 = document.querySelectorAll('kiValaszt2');
    group2.id = `group2`;
    console.log(group2);
  });
  });
});   
})();

  // Add event listener to disable right-click menu
document.addEventListener('contextmenu', event => {
    event.preventDefault();


    
 });
 
 
// ez navigal at a fight oldalra dinamikus query parameterrel

})();
 

document.getElementById("betolt").addEventListener("click", dinamicNavigate);
function dinamicNavigate(){
    window.location.href = `fight.html?id=group1`;
   
}


 
 