// ARRAY
const carouselWrapper= [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
]
const carouselImages = document.querySelector('.caurosel-img');
let counterImg = 0
// BUTTONS
const btnTop = document.querySelector('.btn-top')
const btnBot = document.querySelector('.btn-bottom')
// CICLE
for (let i = 0; i < carouselWrapper.length; i++){
    const img = carouselWrapper[i]
    carouselImages.innerHTML += `<img src=${img} class='item hide'>`
}
    const itemsWrapper = document.getElementsByClassName('item');
    itemsWrapper[0].classList.remove('hide')

    btnBot.addEventListener('click', function(){
      itemsWrapper[counterImg].classList.add('hide')
      counterImg++
      itemsWrapper[counterImg].classList.remove('hide')
      if(counterImg === itemsWrapper.length){
        btnBot.classList.add('hide')
      }
    })

    btnTop.addEventListener('click', function(){
        itemsWrapper[counterImg].classList.add('hide')
        counterImg--
        itemsWrapper[counterImg].classList.remove('hide')
    })