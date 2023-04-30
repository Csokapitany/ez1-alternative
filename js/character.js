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
            hideSpinner()
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

// load avatars to list 
function loadAvatars(){
    // console.log('anyad');
    fetch(`https://practicefullstackapp.azurewebsites.net/avatars`)
        .then( response => 
            response.json() 
        )
        .then((data) => {
            data.forEach(avatar => {
            let li = document.createElement('li');
    
            li.innerHTML = (`
                <img class="m-2 avatarSelect" src="${avatar.image}" alt="" id="AV_${avatar.id}" onclick="setAvatarValue(${avatar.id})">         
            `);
        
            li.classList.add("d-flex");        
            li.classList.add("justify-content-center");        
        
            let avatarWrapper = document.getElementById('avatarWrapper');
                
            avatarWrapper.appendChild(li);        
        })
    })
};

// adds avatar value to input
function setAvatarValue(id){
    var image = document.getElementById('image');
    image.value = id;    
}

// to upload character
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
    
    
    transformCharacter(character);

    console.log(character);
    
    if(validateForm(character) == true){
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
                clearCharacters();
                clearInputFields();
            }
        }).then(function() {
            clearCharacters();
            getCharacters();
        }).catch(error => {
            console.error(error)
        });
    
        var myModalEl = document.getElementById('exampleModal1');
        var modal = bootstrap.Modal.getInstance(myModalEl)
        modal.hide();   
    } else {    
        let id = 'fields-error-message';

        showErrorMessage(id);

        setTimeout(() => {
            hideErrorMessage(id);
        }, 1000);
    }

}

var cardsToFight = [];

// to select cards
function select(id){
    var card = document.getElementById(`${id}`);
    
    card.classList.toggle("bg-success");
    
    if(cardsToFight.includes(id)){
        cardsToFight.pop(id);
    } else {
        cardsToFight.push(id);
    }
}

// to delete character
function deleteCharacter(id){
    // console.log(id)

    fetch(`https://practicefullstackapp.azurewebsites.net/characters/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'accept': '*/*'
          },
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

// clears character wrapper
function clearCharacters(){
    var characters = document.getElementById('characters');
    characters.innerHTML = "";
}

// ez kockadobo funkcio
function diceRoll(numberOfFaces){
    let diceRoll = Math.floor(Math.random() * numberOfFaces) + 1;
    // console.log(diceRoll);
    return diceRoll;
}

// form validator
function validateForm(character){
    // console.log(character);
    if(character.name == '' || character.class == '' || character.image == '' || character.level == 0 || character.ke == 0 || character.te == 0 || character.ve == 0 || character.fp == 0 || character.ep == 0 || character.sfe == 0 || character.spj == 0 || character.spb == 0){
        return false;
    } else {
        return true;
    }
};

// ez a karakter krealas utan visszaaliitja a form ertekeit ures stringre
function clearInputFields(){
    var charName = document.getElementById('name');
    charName.value = '';
    var charClass = document.getElementById('class');
    charClass.value = '';
    var image = document.getElementById('image');
    image.value = '';
    var level = document.getElementById('level');
    level.value = '';
    var ke = document.getElementById('KE');
    ke.value = '';
    var te = document.getElementById('TE');
    te.value = '';
    var ve = document.getElementById('VE');
    ve.value = '';
    var fp = document.getElementById('FP');
    fp.value = '';
    var ep = document.getElementById('EP');
    ep.value = '';
    var sfe = document.getElementById('SFE');
    sfe.value = '';
    var spj = document.getElementById('SPJ');
    spj.value = '';
    var spb = document.getElementById('SPB');
    spb.value = '';
    document.getElementById('fields-error-message').classList.add('visually-hidden');    
}

// ez dobokockak randomszm generalo fuggvenye
function generateValue(field){
    // itt fogjuk az ertekeket generálni
    switch(field) {
        case 1:
            document.getElementById('KE').value = diceRoll(10);
            break;
        case 2:
            document.getElementById('TE').value = diceRoll(10);
            break;
        case 3:
            document.getElementById('VE').value = diceRoll(10);
            break;
        case 4:
            document.getElementById('FP').value = diceRoll(10);
            break;
        case 5:
            document.getElementById('EP').value = diceRoll(10);
            break;
        case 6:
            document.getElementById('SFE').value = diceRoll(10);
            break;
        case 7:
            document.getElementById('SPJ').value = diceRoll(10);
            break;
        case 8:
            document.getElementById('SPB').value = diceRoll(10);
            break;
        default:
            console.log("error");
      }
}

//transforms character Nan values to 0

function transformCharacter(character){
    if(isNaN(character.level)){
        character.level = 0;
    }
    if(isNaN(character.ke)){
        character.ke = 0;
    }
    if(isNaN(character.te)){
        character.te = 0;
    }
    if(isNaN(character.ve)){
        character.ve = 0;
    }
    if(isNaN(character.fp)){
        character.fp = 0;
    }
    if(isNaN(character.ep)){
        character.ep = 0;
    }
    if(isNaN(character.sfe)){
        character.sfe = 0;
    }
    if(isNaN(character.spj)){
        character.spj = 0;
    }
    if(isNaN(character.spb)){
        character.spb = 0;
    }
}

//shows the error message
function showErrorMessage(id){
    document.getElementById(id).classList.remove('visually-hidden');
} 

//hides the error message
function hideErrorMessage(id){
    document.getElementById(id).classList.add('visually-hidden');
} 

// loading spinner hider
function hideSpinner(){
    var spinner = document.getElementById('spinner');
    spinner.style.display = "none";
}

// to transfer selected cards to battle
document.getElementById("betolt").addEventListener("click", dinamicNavigate);
function dinamicNavigate(){
    window.location.href = `fight.html?id1=${cardsToFight[0]}&id2=${cardsToFight[1]}`;
   
}


 

 



 
 