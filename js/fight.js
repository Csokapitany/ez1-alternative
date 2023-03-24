//ez kell ahoz hogy az oldal dinamikus URL-jet nezze 
const params = new URLSearchParams(window.location.search);

//ez szopja ki az erteket az url queryparameterebeol  pl (/fight.html?id=4)
const dynamicId1 = params.get('id1');
const dynamicId2 = params.get('id2');

// Use the dynamic id to generate content on the page
// document.getElementById('dynamic-content1').innerHTML = `This is content for id ${dynamicId1}.`;
// document.getElementById('dynamic-content2').innerHTML = `This is content for id ${dynamicId2}.`;


function getPosts(id, position){
    //fetch(`http://localhost:3000/karakter/${dynamicId}`)
    fetch(`https://practicefullstackapp.azurewebsites.net/characters/${id}`)
        .then( response => response.json() )
        .then((data) => {
            console.log(data)
        
            let div = document.createElement('div');

            div.innerHTML = (`
                <div class="card text-center text-dark p-3 d-flex justify-content-center" onclick="select(${data.id})" id="${data.id}" ">
                <div class="m-2">                                           
                    <img class="avatar" src="${data.image}">
                </div>  
                    <h2>${data.name}</h2>                         
                    <h4> ${data.class}</h4p>
                    <h4> Szint: ${data.level}</h4>
                    <p> KE: ${data.ke}</p>
                    <p> TE: ${data.te}</p>
                    <p> VE: ${data.ve}</p>
                    <p> FP: ${data.fp}</p>
                    <p> EP: ${data.ep}</p>
                    <p> SFE: ${data.sfe}</p>
                    <p> SPJ: ${data.spj}</p>
                    <p> SPB: ${data.spb}</p>                                                                                                                                    
                </div>
            `);
    
            let posts = document.getElementById(`cardholder${position}`);
    
            posts.appendChild(div);        
    });   
}

// Invoke the function
getPosts(dynamicId1, 1);
getPosts(dynamicId2, 2);
     