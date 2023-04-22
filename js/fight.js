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
                    <h2>${data.name}</h2>                         
                    <h4> ${data.class}</h4p>
                    <h4> Szint: ${data.level}</h4>
                    <p> KE: ${data.ke}</p>
                    <p> TE: ${data.te}</p>
                    <p> VE: ${data.ve}</p>
                    <p class="changeable"> FP: ${data.fp}</p>
                    <p class="changeable"> EP: ${data.ep}</p>
                    <p class="changeable"> SFE: ${data.sfe}</p>
                    <p> SPJ: ${data.spj}</p>
                    <p> SPB: ${data.spb}</p>                                                                                                                                    
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

function battle(){
    // ez igy nem lesz jo :)
    getChangeableValues();
    console.log(myArr);
}