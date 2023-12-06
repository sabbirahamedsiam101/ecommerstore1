let allCategory = document.getElementById('allCetagory');
console.log(allCategory);
let categoryMenu = document.getElementById('categoryMenu');



allCategory.addEventListener('click' , ()=>{
    categoryMenu.classList.toggle('block')
    categoryMenu.classList.toggle('hidden')
})

// let sizeSelector = document.querySelector('.size-selector');
// console.log(sizeSelector.classList);

// sizeSelector.addEventListener('cl' , ()=>{
//    sizeSelector.style.backgroundColor = '#FD3D57'
// })