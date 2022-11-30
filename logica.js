function convertir(){
    var valor=(document.getElementById("cantidad").value);
    document.getElementById("valor").innerHTML="<b>"+valor+"</b>";
    de=document.getElementById("de").value;
    a=document.getElementById("a").value;

    var dolar=23.81;
    var euro=25.90;

    

    if(de==4&&a==3){
        resultado=valor* 0.66;
        
    }else if(de==3&&a==4){
        resultado=valor/0.66;

    }else if(de==4&&a==2){
        resultado=valor+34;

    }else if(de==2&&a==4){
        resultado=valor-34;
    }

    document.getElementById("resultado").innerHTML="resultado: "+resultado;
}