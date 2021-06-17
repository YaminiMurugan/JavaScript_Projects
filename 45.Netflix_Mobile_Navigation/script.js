const nav_list = document.querySelectorAll('.nav')
const close_btn = document.querySelector('.close-btn')
const open_btn = document.querySelector('.open-btn')

open_btn.addEventListener('click' , () =>{
    nav_list.forEach(nav_el => nav_el.classList.add('visible'))
} )

close_btn.addEventListener('click' , () =>{
    nav_list.forEach(nav_el => nav_el.classList.remove('visible'))
} )