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
        //ez a resz csinalna a kivalasztast csak a bg sucsecc meg az onclick miatt nem megy most jol
        .then(() =>
            { const productCards = document.querySelectorAll('.kiJelol');
                
           
                productCards.forEach(kiJelol => 
                {  kiJelol.addEventListener("mousedown", function(event) 
                    {
                    if (event.button === 0) {
                        // Left click function here
                        kiJelol.classList.remove('kiJelol')
                        kiJelol.classList.remove('bg-warning')
                        kiJelol.classList.add('bg-primary')
                        console.log("zold");
                        
        event.preventDefault();

                    } else if (event.button === 2) {
                        // Right click function here
                        kiJelol.classList.add('kiJelol')
                        kiJelol.classList.remove('bg-success')
                        kiJelol.classList.add('bg-warning')
                        console.log("sarga");
                        
        event.preventDefault();
                    }
                    else if (event.button === 1) {
                        // Right click function here
                        kiJelol.classList.add('kiJelol')
                        kiJelol.classList.remove('bg-success')
                        kiJelol.classList.remove('bg-warning')
                        console.log("Alapbeallitas");
                       event.preventDefault(e);
                    } 

                      
                    });

                    
                });

               
            })
})();
    
    document.addEventListener('contextmenu', event => {
    event.preventDefault();
    });
    document.addEventListener('auxclick', event => {
        
        event.preventDefault();
    
    });


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



 
 