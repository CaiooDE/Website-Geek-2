let contador =1;
document.getElementById("rad1").checked = true;

setInterval(function(){
    proximaimagem();
},5000)


function proximaimagem(){
    contador++;
    if(contador>4){
        contador=1;
    }
    
    document.getElementById("rad"+contador).checked = true;
}

