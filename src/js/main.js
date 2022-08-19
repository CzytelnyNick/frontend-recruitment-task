const con = document.querySelector(".container");
const con2 = document.querySelector(".container2");
const btn = document.querySelector('.btn');
const box = document.createElement('div');
const body = document.querySelector('body');
const closeBtn = document.createElement('div');
const img = document.querySelector('#img');


btn.addEventListener('click', () => {
    con.classList.add('bg')
    btn.classList.add('btn-hide')
    body.appendChild(box);
    box.classList.add('box');
     
    box.innerHTML = `<div class="box-content">
    <h1>Alert!</h1>
    <p>You have clicked X times to related button.</p>
    `;
    box.appendChild(closeBtn);
    closeBtn.classList.add('close-btn');
    closeBtn.innerHTML = `X`;
} );
// div.addEventListener('click', () => {
//     div.classList.remove('bg')
//     btn.classList.remove('btn-hide')
//     div.removeChild(box)
// });

