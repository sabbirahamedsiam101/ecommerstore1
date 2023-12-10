let allCategory = document.getElementById('allCetagory');
let menu = document.getElementById('menu');
let menuItem = document.getElementById('menuItem');
console.log(allCategory);
let categoryMenu = document.getElementById('categoryMenu');



allCategory.addEventListener('click' , ()=>{
    categoryMenu.classList.toggle('block')
    categoryMenu.classList.toggle('hidden')
})

menu.addEventListener('click' , ()=>{
    menuItem.classList.toggle('block')
    menuItem.classList.toggle('hidden')
})

// let sizeSelector = document.querySelector('.size-selector');
// console.log(sizeSelector.classList);

// sizeSelector.addEventListener('cl' , ()=>{
//    sizeSelector.style.backgroundColor = '#FD3D57'
// })