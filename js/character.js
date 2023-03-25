
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
(function createCard() 
    { const xhr = new XMLHttpRequest();
        xhr.open("GET", `http://localhost:3000/karakter`, true);
    
        xhr.onload = function() 
        {            if(this.status === 200)
            {   const karakter = JSON.parse(this.responseText);
             let output = '';
             karakter.forEach(function(karakter)
             { output += `
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
    });
    

//ezek a karakterek az igazi APIrol jonnek 
(function getCharacters()
    {    fetch(`https://practicefullstackapp.azurewebsites.net/characters`)
        .then( response => response.json() )
        .then((data) => 
        { //console.log(data)
            data.forEach(element => 
                { let div = document.createElement('div');
                    div.innerHTML = 
                    (`  <div class="card text-center text-dark bg-primary 
                                    p-3 d-flex justify-content-center 
                                    kiJelol"
                                    id="${element.id}">
                            <div class="m-2">                                           
                                <img class="avatar" src="${element.image}">
                            </div>  
                            <h3>${element.name}</h3>    
                            <h3 class="varID" id="${element.id}">${element.id}</h3>                                                                                                       
                            <p>Damage: <span>${element.damage}</span></p>                                                             
                            <p>HitPoints: <span>${element.hitPoints}</span></p>                                                             
                            <p>Armor: <span>${element.armor}</span></p>                                                                                                                                     
                        </div>          `);
        
                    div.classList.add("col-lg-3");        
                    let posts = document.getElementById('characters');
                    posts.appendChild(div);
                    // group1 = document.getElementsByClassName("varID"); 
                    // console.log(group1)
                });
        }) // itt kell megmokolni h ogy az element id ja a ramenjen a kartyarol
        //mert lejjebb nem eszi meg az id-t mar
        .then(() =>
            { const productCards = document.querySelectorAll('.kiJelol');
                //console.log (productCards);
           
                productCards.forEach(kiJelol => 
                {  kiJelol.addEventListener("mousedown", function(event) 
                    {
                    if (event.button === 0) {
                        // Left click function here
                        kiJelol.classList.remove('kiJelol')
                        kiJelol.classList.remove('bg-warning')
                        kiJelol.classList.add('bg-success')
                        var groupTransfer1 = kiJelol.id 

                        
                        console.log(groupTransfer1);

                    } else if (event.button === 2) {
                        // Right click function here
                        kiJelol.classList.add('kiJelol')
                        kiJelol.classList.remove('bg-success')
                        kiJelol.classList.add('bg-warning')
                        var groupTransfer2 = kiJelol.id 
                        

                       console.log(groupTransfer2);
                    } 
                    else if (event.button === 1) {
                        // Right click function here
                        kiJelol.classList.add('kiJelol')
                        kiJelol.classList.remove('bg-success')
                        kiJelol.classList.remove('bg-warning')
                       // console.log("Alapbeallitas");
                    } 

                        document.getElementById("betolt").addEventListener("click",
                            function dinamicNavigate()
                            { 
                              
                             window.location.href = `fight.html?id=groupTransfer1`
                             //window.location.href = `fight.html?id2=groupTransfer2`
                            
                            
                        })                


                    });

                    
                });

               
            })
        // .then(() =>
        // {
            
        // })


})();

  // Add event listener to disable right-click menu
document.addEventListener('contextmenu', event => {
    event.preventDefault();
    
 });


 
 