function mostrar(){
    let encriptado = document.getElementById("codigo").value;
    let imagen = document.querySelector(".c_c_m");
    let text = document.querySelector(".c_c_men");
    let Bcopiar = document.querySelector("#c_b_c")
    if(encriptado==""){
        imagen.removeAttribute("style");
        text.removeAttribute("style");
        Bcopiar.removeAttribute("style");
    }else{
        imagen.style.display = "none";
        text.style.display = "flex";
        Bcopiar.style.display = "inline-block";
    }
}

function reglasEncript(texto){
    nuevo = []
    for(let i=0;i<texto.length;i++){
        if (texto[i]!="a" && texto[i]!="e" && texto[i]!="i"
            && texto[i]!="o" && texto[i]!="u")
            {
            nuevo.push(texto[i]);
            continue;
        }

        if(texto[i]=="a"){
            nuevo.push("ai");
            continue;
        }
        if(texto[i]=="e"){
            nuevo.push("enter");
            continue;
        }
        if(texto[i]=="i"){
            nuevo.push("imes");
            continue;
        }
        if(texto[i]=="o"){
            nuevo.push("ober");
            continue
        }
        if(texto[i]=="u"){
            nuevo.push("ufat");
            continue
        }
    }
    return(nuevo);
}

function reglasDesencript(texto){
    nuevo = []
    for(let i=0;i<texto.length;i++){
        if(texto[i]=="a" && texto[i+1]=="i"){
            nuevo.push("a");
            i+=1
            continue;
        }

        else if(texto[i]=="e" && texto[i+1]=="n" && texto[i+2]=="t"
            && texto[i+3]=="e" && texto[i+4]=="r")
        {
            nuevo.push("e");
            i+=4;
        }

        else if(texto[i]=="i" && texto[i+1]=="m" && texto[i+2]=="e"
            && texto[i+3]=="s")
        {
            nuevo.push("i");
            i+=3;
        }

        else if(texto[i]=="o" && texto[i+1]=="b" && texto[i+2]=="e"
            && texto[i+3]=="r"
        )
        {
            nuevo.push("o");
            i+=3;
        }

        else if(texto[i]=="u" && texto[i+1]=="f" && texto[i+2]=="a"
            && texto[i+3]=="t"
        )
        {
            nuevo.push("u");
            i+=3;
        }

        else{
            nuevo.push(texto[i]);
        }
    }
    return nuevo
}

function encriptar(){
    mostrar()
    let texto = document.getElementById("codigo").value;
    let nuevotexto = document.getElementById("textEncript");
    let nuevo = reglasEncript(texto);
    let encriptado = nuevo.join("");
    nuevotexto.innerHTML = encriptado;
    area(nuevotexto)
}

function desencriptar(){
    mostrar()
    let texto = document.getElementById("codigo").value;
    let nuevotexto = document.getElementById("textEncript");
    let nuevo = reglasDesencript(texto);
    let desencriptado = nuevo.join("");
    nuevotexto.innerHTML = desencriptado;
    area(nuevotexto)
}

function copiar(){
    let texto = document.getElementById("textEncript").value;
    navigator.clipboard.writeText(texto)
}

function area(texto){
    let ventana = document.querySelector("body").clientWidth;
    if(ventana>800){
        texto.removeAttribute("style");
    }else{
        if(texto.value==""){
            texto.removeAttribute("style")
        }else{
            texto.style.height = (texto.scrollHeight)+"px";
        }
    }
}