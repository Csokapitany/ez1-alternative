//va'ltozok 

let eredmeny = document.getElementById("eredmeny");
let eredmenyK10 = document.getElementById("eredmenyK10");
let dobasGomb = document.getElementById("dobasGomb");
let mutatGomb = document.getElementById("mutatGomb");
// let dobasK10 = document.getElementById("dobasK10");


let nevMezo = document.getElementById("charName");
let kasztMezo = document.getElementById("charCast");
let szintMezo = document.getElementById("charLevel");
let keMezo = document.getElementById("charKE");
let teMezo = document.getElementById("charTE");
let veMezo = document.getElementById("charVE");
let fpMezo = document.getElementById("charFP");
let epMezo = document.getElementById("charEP");
let sfeMezo = document.getElementById("charSFE");
let spjMezo = document.getElementById("charSPJ");
let spbMezo = document.getElementById("charSPB");

// const dobasD10 = Math.floor(Math.random() * 10) + 1;
// let dobasK10 = Math.floor(Math.random() * 10) + 1;
// let dobasD100 = Math.floor(Math.random() * 100) + 1;
// let dobasK100 = Math.floor(Math.random() * 100) + 1;
// let dobasD6 = Math.floor(Math.random() * 6) + 1;
// let dobasK6 = Math.floor(Math.random() * 6)+ 1;
// let dobas2D6 = (Math.floor(Math.random() * 6)+ 1)+(Math.floor(Math.random() * 6)+ 1);
// let dobas3D6 = (Math.floor(Math.random() * 6)+ 1)+(Math.floor(Math.random() * 6)+ 1)+(Math.floor(Math.random() * 6)+ 1);





  dobasGomb.addEventListener("click", function() {
 
let dobasD10 = Math.floor(Math.random() * 10) + 1;
let dobasK10 = Math.floor(Math.random() * 10) + 1;
let dobasD100 = Math.floor(Math.random() * 100) + 1;
let dobasK100 = Math.floor(Math.random() * 100) + 1;
let dobasD6 = Math.floor(Math.random() * 6) + 1;
let dobasK6 = Math.floor(Math.random() * 6)+ 1;
let dobas2D6 = (Math.floor(Math.random() * 6)+ 1)+(Math.floor(Math.random() * 6)+ 1);
let dobas3D6 = (Math.floor(Math.random() * 6)+ 1)+(Math.floor(Math.random() * 6)+ 1)+(Math.floor(Math.random() * 6)+ 1);

function showCarvalues() {
    document.getElementById("charNamespan").textContent = document.getElementById("charName").value
    document.getElementById("charKEspan").textContent = "KE jobb " + (parseInt((document.getElementById("charKE").value)) + dobasD10);
    document.getElementById("charTEspan").textContent = "TE jobb  " + (parseInt((document.getElementById("charTE").value)) + dobasD100);
    document.getElementById("charSPspan").textContent = "SP jobb  " + (parseInt((document.getElementById("charSPJ").value)) + dobasD6);
    document.getElementById("charKEBspan").textContent = "KE bal " + (parseInt((document.getElementById("charKE").value)) + dobasK10-2);
    document.getElementById("charTEBspan").textContent = "TE bal " + (parseInt((document.getElementById("charTE").value)) + dobasK100-5);
    document.getElementById("charSPBspan").textContent = "SP bal " + (parseInt((document.getElementById("charSPB").value)) + dobasK6);

}

return(
eredmeny.innerHTML = 
"A D10 dobás eredménye: " + dobasD10 
+"<br>A D10 dobás eredménye:  " + dobasK10 
+"<br>A D100 dobás eredménye: " + dobasD100 
+"<br>A D100 dobás eredménye: " +dobasK100 
+"<br>A D6 dobás eredménye:   " +dobasD6 
+"<br>A D6 dobás eredménye:   " +dobasK6 
+"<br>A 2D6 dobás eredménye:  " +dobas2D6 
+"<br>A 3D6 dobás eredménye:  " +dobas3D6
),
  
  //eredmenyK10.innerHTML = "<br>Az K10 dobás eredménye: ";
//nem megy a gombra meg dobasfuggvveny hianyzik span hianyzik


   


document.getElementById("mutatGomb").addEventListener("click", function() {
    
    showCarvalues()
})
});

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
        "charSPB": 0
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
        function caracterCard(){



        }

        document.getElementById("feltoltGomb").addEventListener("click", karakterFeltoltes);
        
        function karakterFeltoltes(){
        createKarakter()
        caracterCard()


        fetch('http://localhost:3000/karakter', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCharacter)
        }).then(function(response) {
            return response.json()
            }).then(function(json) {
            console.log('parsed json: ', json)
            }).catch(function(ex) {
            console.log('parsing failed: ', ex)
            });
            };
