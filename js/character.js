// for the upload bit

getCharacters();

class Character {
    constructor(charName, charClass, image, level, ke, te, ve, fp, ep, sfe, spj, spb){
        this.id = 0
        this.name = charName,
        this.class = charClass,
        this.image = image,
        this.level = level,
        this.ke = ke,
        this.te = te,
        this.ve = ve,
        this.fp = fp,
        this.ep = ep,
        this.sfe = sfe,
        this.spj = spj,
        this.spb = spb
    }   
}

//to get data from API 
function getCharacters(){
    fetch(`https://practicefullstackapp.azurewebsites.net/characters`)
        .then( response => 
            response.json() 
        )
        .then((data) => {
           console.log(data)
            
            data.forEach(element => {
                let div = document.createElement('div');
    
                div.innerHTML = (`
                    <div> 
                        <div class="card text-center text-dark p-3 d-flex justify-content-start rounded-bottom-0 border border-dark border-1 border-bottom-0" onclick="select(${element.id})" id="${element.id}" ">
                            <div class="m-2">                                           
                                <img class="avatar" src="${element.image}">
                            </div>  
                            <h2>${element.name}</h2>                         
                            <h4> ${element.class}</h4p>
                            <h4> Level: ${element.level}</h4>
                            <p> KE: ${element.ke}</p>
                            <p> TE: ${element.te}</p>
                            <p> VE: ${element.ve}</p>
                            <p> FP: ${element.fp}</p>
                            <p> EP: ${element.ep}</p>
                            <p> SFE: ${element.sfe}</p>
                            <p> SPJ: ${element.spj}</p>
                            <p> SPB: ${element.spb}</p>                                                                                                                                    
                            </div>
                            <button class="btn btn-danger col-12 rounded-top-0 border border-dark border-1 border-top-0" onclick=deleteCharacter(${element.id})>
                                <i class="bi-trash3" style="color: white; "></i>
                                Delete
                            </button>
                    </div>
                `);
        
                div.classList.add("col-lg-3");        
        
                let posts = document.getElementById('characters');
                
                posts.appendChild(div);        
        })
    })
};


function upload(){
    var charName = document.getElementById('name').value;
    var charClass = document.getElementById('class').value;
    var image = document.getElementById('image').value;
    var level = parseInt(document.getElementById('level').value);
    var ke = parseInt(document.getElementById('KE').value);
    var te = parseInt(document.getElementById('TE').value);
    var ve = parseInt(document.getElementById('VE').value);
    var fp = parseInt(document.getElementById('FP').value);
    var ep = parseInt(document.getElementById('EP').value);
    var sfe = parseInt(document.getElementById('SFE').value);
    var spj = parseInt(document.getElementById('SPJ').value);
    var spb = parseInt(document.getElementById('SPB').value);

    var character = new Character(charName,charClass, image, level, ke, te, ve, fp, ep, sfe, spj, spb);
    
    
    // kibaszott CORS error termeszetesen

    fetch('https://practicefullstackapp.azurewebsites.net/characters', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'accept': '*/*'
          },
        body: JSON.stringify( character )
    }).then(function(response) {
        if(response.status == 200){
            // alert("Character upload successful!");
            clearCharacters();
        }
    }).then(function() {
        getCharacters();       
    }).catch(error => {
        console.error(error)
    });

    var myModalEl = document.getElementById('exampleModal1');
    var modal = bootstrap.Modal.getInstance(myModalEl)
    modal.hide();  

}




var cardsToFight = [];

function select(id){
    var card = document.getElementById(`${id}`);
    
    card.classList.toggle("bg-success");
    
    if(cardsToFight.includes(id)){
        cardsToFight.pop(id);
    } else {
        cardsToFight.push(id);
    }
}
            
function deleteCharacter(id){
    console.log(id)

    fetch(`https://practicefullstackapp.azurewebsites.net/characters/${id}`, {
        method: 'DELETE',
    }).then((response) => {
        if(response.status == 200){
            clearCharacters();
        }
    })
    .then(() => {
        getCharacters();        
    }).catch((error) => {
        console.error(error)
    });

}

function clearCharacters(){
    var characters = document.getElementById('characters');
    characters.innerHTML = "";
}

// to transfer selected cards to battle
document.getElementById("betolt").addEventListener("click", dinamicNavigate);
function dinamicNavigate(){
    window.location.href = `fight.html?id1=${cardsToFight[0]}&id2=${cardsToFight[1]}`;
   
}


 

 



 
 