//ez kell ahoz hogy az oldal dinamikus URL-jet nezze 
const params = new URLSearchParams(window.location.search);

//ez szopja ki az erteket az url queryparameterebeol  pl (/fight.html?id=4)
const dynamicId = params.get('id');

// Use the dynamic id to generate content on the page
document.getElementById('dynamic-content').innerHTML = `This is content for id ${dynamicId}.`;

// define a function to get the posts with a fetch
function getPosts(){
    fetch(`http://localhost:3000/karakter/${dynamicId}`)
        .then( response => response.json() )
        .then((data) => {
            console.log(data)
        
            let div = document.createElement('div');

            div.innerHTML = (`
                <div class="card text-center text-dark bg-success col-md-6 col-lg-3">                                          
                    <li> Nev: ${data.charName}</li>
                    <li> Kaszt: ${data.charCast}</li>
                    <li> Szint: ${data.charLevel}</li>
                    <li> KE: ${data.charKE}</li>
                    <li> TE: ${data.charTE}</li>
                    <li> VE: ${data.charVE}</li>
                    <li> FP: ${data.charFP}</li>
                    <li> EP: ${data.charEP}</li>
                    <li> SFE: ${data.charSFE}</li>
                    <li> SPJ: ${data.charSPJ}</li>
                    <li> SPB: ${data.charSPB}</li>                                                               
                </div>
            `);
    
            div.classList.add("d-flex");
            div.classList.add("justify-content-center");
    
            let posts = document.getElementById('wrapper');
    
            posts.appendChild(div);        
    });   
}

// Invoke the function
getPosts();
     