const ingresoTexto = document.getElementById("ingresoTexto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const mensajeFinal = document.getElementById("mensajeFinal");
const mono = document.getElementById("mono");
const advertencia2 = document.getElementById("advertencia2");
const right =document.getElementById("right");


let matrizCodigo1 = [["e","enter"],["i","imes"],
["a","ai"],["o","ober"],["u","ufat"], ]

let matrizCodigo2=[["enter","e"],["imes","i"],
["ai","a"],["ober","o"],["ufat","u"], ]


const reemplazar=(nuevoValor)=>{
    mensajeFinal.value = nuevoValor; 
    mono.classList.add("oculto");
    ingresoTexto.value = "";
    advertencia2.style.display = "none";
    botonCopiar.style.display = "block";
    right.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
}

console.log(matrizCodigo1)

botonEncriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    if(texto !=""){
        function encriptar(newText) {
            for (let i = 0; i < matrizCodigo1.length; i++) {
                if (newText.includes(matrizCodigo1[i][0])) {
                    newText = newText.replaceAll(matrizCodigo1[i][0], matrizCodigo1[i][1]);
                }
            }
            return newText;
        }
        reemplazar(encriptar(texto));
    }else{
        alert("Ingrese texto a encriptar");
    }
});

botonDesencriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    if(texto !=""){
        function desencriptar(newText) {
            for (let i = 0; i < matrizCodigo2.length; i++) {
                if (newText.includes(matrizCodigo2[i][0])) {
                    newText = newText.replaceAll(matrizCodigo2[i][0], matrizCodigo2[i][1]);
                };
            };
            return newText;
        }
        reemplazar(desencriptar(texto));
    }else{
        alert("Ingrese texto a desencriptar");
    }  
});

botonCopiar.addEventListener("click", () => {
    let texto = mensajeFinal;

    texto.select();
    document.execCommand('copy')
    alert("Texto Copiado");
    mensajeFinal.value = "Ningún mensaje fue encontrado.";
   
    mono.classList.remove("oculto");    
    advertencia2.style.display = "block";
    botonCopiar.style.display = "none";
    right.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    ingresoTexto.focus(); 
})

