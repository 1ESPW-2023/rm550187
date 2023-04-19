// //Exemplo de funções
// const divElement = document.getElementById("div-box")

// //divElement.addEventListener("click" ,()=>{
//   //  console.log(divElement);
// //});
// divElement.addEventListener("click",mostraElemento);

// function mostraElemento() {
//     console.log("divElement")
// }

// function soma(){
//     let n1 = 10
//     let n2 = 5
//     console.log(n1 + n2)
// }



// const arrayElements = [...document.querySelectorAll("li")];

// arrayElements.map ((el,key)=>{


//   if(el.textContent  == indexof("1") != (-1)){
//       el.textContent  =`[${el.textContext}]`;
//   }
// });
let tmp = 0
function mudaCor(){
  let r = Math.ceil(Math.random()*255);
  let g = Math.ceil(Math.random()*255);
  let b = Math.ceil(Math.random()*255);

   const elemento = [...document.getElementsByClassName("conteudo")];

   elemento.forEach((el)=>{
    el.backgroundColor =`rgb(${r},rgb(${g},rgb(${b},`
   })

  tmp = setTimeout(mudaCor , 5000)
}

function paraTimeout(){
    clearTimeout(tmp)
}

mudaCor();

