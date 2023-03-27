// (() => {
//     console.log('upload');
// })();

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
    // console.log(JSON.stringify(character));

    // kibaszott CORS error termeszetesen

    fetch('https://practicefullstackapp.azurewebsites.net/characters', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'accept': '*/*'
          },
        // mode: 'no-cors',
        body: JSON.stringify( character )
    }).then(function(response) {
        console.log(response);
    }).then(function(data) {
        console.log(data);
    }).catch(error => {
        console.error(error)
    });
}

