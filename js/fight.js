//ez kell ahoz hogy az oldal dinamikus URL-jet nezze 
const params = new URLSearchParams(window.location.search);

//ez szopja ki az erteket az url queryparameterebeol  pl (/fight.html?id=4)
const dynamicId1 = params.get('id1');
const dynamicId2 = params.get('id2');

function getPosts(id, position){
    //fetch(`http://localhost:3000/karakter/${dynamicId}`)
    fetch(`https://practicefullstackapp.azurewebsites.net/characters/${id}`)
        .then( response => response.json() )
        .then((data) => {
            // console.log(data)
        
            let div = document.createElement('div');

            div.innerHTML = (`
                <div class="card text-center text-dark d-flex justify-content-center" onclick="select(${data.id})" id="${data.id}" ">
                    <div class="m-2">                                           
                        <img class="avatar" src="${data.image}">
                    </div>  
                    <h2 id="${position}">${data.name}</h2>                         
                    <h4> ${data.class}</h4p>
                    <h4> Level: ${data.level}</h4>
                    <p id="char-KE"> Initiator Value: ${data.ke}</p>
                    <p id="TE${position}">Attack Power: ${data.te}</p>
                    <p id="VE${position}"> Defend Power: ${data.ve}</p>
                    <p id="FP${position}" class="changeable"> Pain Endurance: ${data.fp}</p>
                    <p id="EP${position}" class="changeable"> Health: ${data.ep}</p>
                    <p id="SFE${position}"class="changeable"> Armor: ${data.sfe}</p>
                    <p id="SPJ${position}"> Damage Right: ${data.spj}</p>
                    <p> Damage Left: ${data.spb}</p>                                                                                                                                    
                </div>
            `);
    
            let posts = document.getElementById(`cardholder${position}`);
    
            posts.appendChild(div);        
    })
    .then(() => {
        // console.log("legujabb then");
        getChangeableValues();
        setChangeableValues(myArr);
        resetMyArray();
    });   
}


// Invoke the function
getPosts(dynamicId1, 1);
getPosts(dynamicId2, 2);


let changeableValues = []; 
let myArr = [];

function getChangeableValues(){
    let temp = []; 
    
    document.querySelectorAll(".changeable").forEach((item) => {
        temp.push(item.innerHTML);
    });

    temp.forEach(item => {
        myArr.push(parseInt(item.split(":")[1].slice(1)));
    });         
    
    // console.log(myArr);
};

function resetMyArray(){
    myArr = [];
}

function setChangeableValues(myArr){
    let changeable1 = document.getElementById("changeable-0");
    changeable1.textContent = myArr[0];

    let changeable2 = document.getElementById("changeable-1");
    changeable2.textContent = myArr[1];

    let changeable3 = document.getElementById("changeable-2");
    changeable3.textContent = myArr[2];

    let changeable4 = document.getElementById("changeable-3");
    changeable4.textContent = myArr[3];

    let changeable5 = document.getElementById("changeable-4");
    changeable5.textContent = myArr[4];

    let changeable6 = document.getElementById("changeable-5");
    changeable6.textContent = myArr[5];
};

// ez kockadobo funkcio
function diceRoll(numberOfFaces){
    let diceRoll = Math.floor(Math.random() * numberOfFaces) + 1;
    // console.log(diceRoll);
    return diceRoll;
}

// aktualis dobas ertek mutato szoveg
function setCurrentRollAmount(rollNr, Value){
    let currentRollAmount = document.getElementById(`diceroll-${rollNr}`);
    currentRollAmount.textContent = Value;
};

// karakternev kiszedo
function getCharacterNames(){
    let characterNames1 = document.getElementById("1");
    let characterNames2 = document.getElementById("2");

    let characterNames = [characterNames1, characterNames2];

    return characterNames;
}

// melyik player kezd
let turnOfPlayer = 0;

// eldonti hogy ki kezd
function decideWhoStarts(){
    let bothKE = document.querySelectorAll("#char-KE");

    let roll1 = diceRoll(10);
    let roll2 = diceRoll(10);
   
    let KE1 = bothKE[0] = parseInt(bothKE[0].innerHTML.split(":")[1].slice(1)) + roll1;
    let KE2 = bothKE[1] = parseInt(bothKE[1].innerHTML.split(":")[1].slice(1)) + roll2;

    setCurrentRollAmount(1, roll1);
    setCurrentRollAmount(2, roll2);

    let names = getCharacterNames();

    if(KE1 > KE2){
        let notification = document.getElementById("current-round-noticifation");
        notification.textContent =  names[0].innerHTML + "'s turn! ";
        turnOfPlayer = 1;
    } else {
        let notification = document.getElementById("current-round-noticifation");
        notification.textContent =  names[1].innerHTML +  "'s turn!";
        turnOfPlayer = 2;
    }
}

// harcmezo tisztito 
function clearBattleField(){
    document.getElementById("current-round-noticifation").textContent = "";
    document.getElementById("round-finished").classList.add("visually-hidden");
    document.getElementById("diceroll-1").textContent = "";
    document.getElementById("diceroll-2").textContent = "";
}

// harcmezo beallito
function setBattlefield(){
    document.getElementById("battle-control-buttons").classList.remove("visually-hidden");
    document.getElementById("round-finished").classList.remove("visually-hidden");
    document.getElementById("fight-button").classList.add("visually-hidden");
};

// harc induklasa
function startBattle(){    
    setBattlefield();

    decideWhoStarts();
}

// egyes player erkeit kiszedo
let playerOne = function getPlayerOne(){
    let ID1 = 1;
    let FP1 = parseInt(document.getElementById("changeable-0").innerText);
    let EP1 = parseInt(document.getElementById("changeable-1").innerText);
    let SFE1 = parseInt(document.getElementById("changeable-2").innerText);
    let SPJ1 = parseInt(document.getElementById("SPJ1").innerText.split(":")[1]);
    
    let playerOne = {
        id: ID1,
        fp: FP1,
        ep: EP1, 
        sfe: SFE1,
        spj: SPJ1   
    } 

    return playerOne;
}

// kettes player erkeit kiszedo
let playerTwo = function getPlayerTwo(){
    let ID2 = 2;    
    let FP2 = parseInt(document.getElementById("changeable-3").innerText);
    let EP2 = parseInt(document.getElementById("changeable-4").innerText);
    let SFE2 = parseInt(document.getElementById("changeable-5").innerText);
    let SPJ2 = parseInt(document.getElementById("SPJ2").innerText.split(":")[1]);
    
    let playerTwo = {
        id: ID2,
        fp: FP2,
        ep: EP2, 
        sfe: SFE2,
        spj: SPJ2   
    } 

    return playerTwo;
}


// egy kor a csataban
function fightOneRound(attackingPlayer, defendingPlayer){
    console.log("Attackingplayer: " + attackingPlayer.id);
    console.log("DefendingPlayer: " + defendingPlayer.id);

    let roll = diceRoll(100);

    let attack = parseInt(document.getElementById(`TE${attackingPlayer.id}`).innerText.split(":")[1]) + roll;
    let defend = parseInt(document.getElementById(`VE${defendingPlayer.id}`).innerText.split(":")[1]);

    if(attackingPlayer.id == 1){
        setCurrentRollAmount(1, roll);
    } else {
        setCurrentRollAmount(2, roll);
    }

    if(attack > defend + 1){
        let damage = attackingPlayer.spj - (defendingPlayer.sfe - 1);
        document.getElementById("current-round-noticifation").innerText = "Hit! Health Damage! " + damage;
        let defendingEP = 0;
        
        if(defendingPlayer.id == 1){
            defendingEP = document.getElementById("changeable-1").innerText;
        }
        if(defendingPlayer.id == 2){
            defendingEP = document.getElementById("changeable-3").innerText;
        }
        
        let currentEP = defendingEP - damage; 

        if(defendingPlayer.id == 1){
            document.getElementById("changeable-1").innerText = currentEP;
            updatePlayerCard(1, currentFP, currentEP);
        }
        if(defendingPlayer.id == 2){
            document.getElementById("changeable-3").innerText = currentEP;
            updatePlayerCard(2, currentFP, currentEP);
        }

        // document.getElementById(`changeable-${defendingPlayer.id}`).innerText = currentEP;

        console.log("StartingEP: " + defendingEP)
        console.log("Damage: " + damage)
        console.log("EndingEP: " + currentEP)

    } else if(attack > defend){
        let damage = attackingPlayer.spj - defendingPlayer.sfe;
        document.getElementById("current-round-noticifation").innerText = "Hit! Pain Endurance damage! " + damage;
    } else {
        document.getElementById("current-round-noticifation").innerText = "No Hit!";
    }

    turnOfPlayer = defendingPlayer.id;

    // console.log("currentroll " + roll);
    // console.log("currentattack " + attack);
    // console.log("defend " + defend);
};

// kovetkezo kor a csataban
function nextRound(playerOne, playerTwo, turnOfPlayer){
    console.log(turnOfPlayer);
    clearBattleField();

    if(playerOne.ep === 0 || playerOne.fp === 0 || playerTwo.ep === 0 || playerTwo.fp === 0){
        finishBattle();
    }

    if(turnOfPlayer === 1){
        // console.log(playerOne);
        fightOneRound(playerOne, playerTwo);
        // clearBattleField();
    }
    
    if(turnOfPlayer === 2){
        // console.log(playerTwo);
        fightOneRound(playerTwo, playerOne);
        // clearBattleField();
    }    
};

function updatePlayerCard(id, fp, ep){
    console.log("test")
    document.getElementById(`FP${id}`).innerText = fp;
    document.getElementById(`EP${id}`).innerText = ep;
};

// cssata befejezese
function finishBattle(){
    console.log("Battle finished!");
};

// menekules
function runAway(turnOfPlayer){ 
    let name = document.getElementById(`${turnOfPlayer}`).innerText;
    document.getElementById("current-round-noticifation").innerText = `${name} is running away!!!`;

    // clearBattleField();
};    