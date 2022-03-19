// PAGINADOR
$(document).ready(function(){     
  cambiarVista()
})
const btn1 = document.querySelectorAll('.btn1')
console.log(btn1)
function btn1s (){
  btn1.forEach(elm =>{
      elm.addEventListener('click', (e) =>{
        let entrada = []
        ds = e.target.value;
        entrada.push(ds)
        console.log(entrada)
        $(document).ready(function(){
          if(entrada.length !== 0){
            console.log(entrada[0])
            cambiarVista(entrada[0])
          }else{
              cambiarVista()
          }
      
      })
      })
  
  })
  
}
btn1s()

function cambiarVista(objetivo){
  $(".vista").hide();
  $("#" + objetivo).show()
}

const rayos = document.querySelector('#rayos')
const btnMain = document.querySelector('.boton')
const main = document.querySelector('#home')
const btnHome = document.querySelectorAll('.btnHome')

btnMain.addEventListener('click', (e) => {
  main.classList.add('no-view')
  rayos.classList.add('no-view')
})

btnHome.forEach(elm => {
  elm.addEventListener('click', (e) =>{
    main.classList.remove('no-view')
    rayos.classList.remove('no-view')
    $(".vista").hide();
  })
})



// SLIDER

let indice = 1;
muestraSlides(indice);

function avanzaSlide(n){
    muestraSlides( indice+=n );
}

function posicionSlide(n){
    muestraSlides(indice=n);
}

function muestraSlides(n){
    let i;
    let slides = document.getElementsByClassName('miSlider');
    let barras = document.getElementsByClassName('barra');

    if(n > slides.length){
        indice = 1;
    }
    if(n < 1){
        indice = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
   

    slides[indice-1].style.display = 'block';
    barras[indice-1].className += ' active';

}

  
  
  
  
  