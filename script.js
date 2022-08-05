// Codificador

const bottonCodificar= document.querySelector("#btn-cripto");
bottonCodificar.addEventListener("click", function(event){
  event.preventDefault();
  let areText=document.querySelector("#input-texto");
  let texto=areText.value;
  let novoTexto=codificaTexto(texto);
  let msgOut=document.querySelector("#msg");
  msgOut.value=novoTexto;
  let form=document.querySelector("#cript");
  form.reset();

} );

// Botão copiar
const bottonCopiar=document.querySelector("#btn-copy");
bottonCopiar.addEventListener("click", function(event){
  let texCopia=document.querySelector("#msg");
  navigator.clipboard.writeText(texCopia.value);
  texCopia.value='';
})

function codificaTexto(texto){
  let novoTexto=texto;
  let tamanho=texto.length
  novoTexto=texto.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi, "ufat");

  return novoTexto;

}
function includeCode(indice,code, texto){
  let novo= texto.substr(0, indice)+code+texto.substr(indice+1);
  return novo;
}



// Decodificador

const bottonDecodificar= document.querySelector("#btn-descripto");
bottonDecodificar.addEventListener("click", function(event){
  event.preventDefault();
  let form=document.querySelector("#input-texto");
  let texto=form.value;
  let novoTexto=decodificaTexto(texto);
  let msgOut=document.querySelector("#msg");
  msgOut.value=novoTexto;
  let formr=document.querySelector("#cript");
  formr.reset();


} );

function decodificaTexto(texto){
  let i=0;
  let novoTexto='';
  novoTexto=texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi,"u");
  return novoTexto;
}