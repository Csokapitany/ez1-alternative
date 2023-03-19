function throwdice(faces){
    
    let newScore = Math.ceil(Math.random()*faces);
 
    document.getElementById(`score${faces}`).innerHTML = newScore;
 }