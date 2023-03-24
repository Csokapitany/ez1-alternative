
// //feltolto resz  Ez megy csak a szamokat stringbe viszi be
// let newCharacter = {
//     "charName": "",
//     "charCast": "",
//     "charLevel": 0,
//     "charKE": 0,
//     "charTE": 0,
//     "charVE": 0,
//     "charFP": 0,
//     "charEP": 0,
//     "charSFE": 0,
//     "charSPJ": 0,
//     "charSPB": 0,
// }

// function createKarakter(){
//     newCharacter.charName = document.getElementById("charName").value
//     newCharacter.charCast = document.getElementById("charCast").value
//     newCharacter.charLevel = document.getElementById("charLevel").value
//     newCharacter.charKE = document.getElementById("charKE").value
//     newCharacter.charTE = document.getElementById("charTE").value
//     newCharacter.charVE = document.getElementById("charVE").value
//     newCharacter.charFP = document.getElementById("charFP").value
//     newCharacter.charEP = document.getElementById("charEP").value
//     newCharacter.charSFE = document.getElementById("charSFE").value
//     newCharacter.charSPJ = document.getElementById("charSPJ").value
//     newCharacter.charSPB = document.getElementById("charSPB").value

//     console.log(newCharacter)
// }



//ezek a karakterek az igazi APIrol jonnek 
(function getCharacters(){
    fetch(`https://practicefullstackapp.azurewebsites.net/characters`)
        .then( response => response.json() )
        .then((data) => {
           console.log(data)
            
            data.forEach(element => {
                let div = document.createElement('div');
    
                div.innerHTML = (`     
                    <div class="card text-center text-dark p-3 d-flex justify-content-center kiJelol" onclick="select(${element.id})" id="${element.id}" ">
                        <div class="m-2">                                           
                            <img class="avatar" src="${element.image}">
                        </div>  
                        <h2>${element.name}</h2>                         
                        <h4> ${element.class}</h4p>
                        <h4> Szint: ${element.level}</h4>
                        <p> KE: ${element.ke}</p>
                        <p> TE: ${element.te}</p>
                        <p> VE: ${element.ve}</p>
                        <p> FP: ${element.fp}</p>
                        <p> EP: ${element.ep}</p>
                        <p> SFE: ${element.sfe}</p>
                        <p> SPJ: ${element.spj}</p>
                        <p> SPB: ${element.spb}</p>                                                                                                                                    
                    </div>
                `);
        
                div.classList.add("col-lg-3");        
        
                let posts = document.getElementById('characters');
                
                posts.appendChild(div);        
        })
    })
})();

var cardsToFight = [];

function select(id){
    console.log(id);
    
    var card = document.getElementById(`${id}`);
    
    card.classList.toggle("bg-success");
    
    if(cardsToFight.includes(id)){
        cardsToFight.pop(id);
    } else {
        cardsToFight.push(id);
    }

    console.log(cardsToFight);
}
            
document.getElementById("betolt").addEventListener("click", dinamicNavigate);
function dinamicNavigate(){
    window.location.href = `fight.html?id1=${cardsToFight[0]}&id2=${cardsToFight[1]}`;
   
}









//      productCards.forEach(kiJelol => {
//         kiJelol.addEventListener('click', () => {
//         productCards.forEach(kiJelol => {
//            kiJelol.classList.remove('kiJelol');
//     });
    
//     kiJelol.classList.add('bg-success');
//     kiJelol.classList.add('kiValaszt1');
//     let group1 = document.querySelectorAll('kiValaszt1');
//     group1.id = `group1`;
    
    
//     console.log(group1);
   
// });
// // itt jeloli ki a 2 es groupot ad nekik id-2 amit lehet hivni
// kiJelol.addEventListener('contextmenu', () => {
    
//     productCards.forEach(kiJelol => {
        
//         kiJelol.classList.remove('kiJelol');
//     });
    
//     kiJelol.classList.add('bg-warning');
//     kiJelol.classList.add('kiValaszt2');
    
//     let group2 = document.querySelectorAll('kiValaszt2');
//     group2.id = `group2`;
//     console.log(group2);
// });
// });
// });   

// // Add event listener to disable right-click menu
// document.addEventListener('contextmenu', event => {
//     event.preventDefault();  
//  });
 
 

 



 
 