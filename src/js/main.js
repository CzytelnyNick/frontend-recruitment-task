const con = document.querySelector(".container");
const con2 = document.querySelector(".container2");
const btn = document.querySelector('.btn');
const btn2 = document.createElement('button');
const box = document.createElement('div');
const body = document.querySelector('body');
const closeBtn = document.createElement('div');
const img = document.querySelector('#img');
const resetBtn = document.createElement('button');

let x = 0;
let y = 0;
const lcX = localStorage.getItem('x'); 
x = lcX
btn.addEventListener('click', () => {
    if(y == 0){
        x++;
        y = 1;
        
        con2.appendChild(btn2);
        btn2.innerHTML = 'Button';
        btn.remove();
        btn2.classList.add('btn2');
        con.classList.add('bg')
        btn2.classList.add('btn-hide')
        body.appendChild(box);
        box.classList.add('box');
        if (x != 5) {
        box.innerHTML = `<div class="box-content">
        <h1>Alert!</h1>
        <p>You have clicked <b>${x} times</b> to related button.</p>
        `;
        }
        if (x >= 5) {
            box.innerHTML = `<div class="box-content">
            <h1>Alert!</h1>
            <p>You have clicked <b>${x} times</b> to related button.</p>
            `;
            box.appendChild(resetBtn);
            resetBtn.classList.add('reset-btn');
            resetBtn.innerHTML = 'Reset';
            resetBtn.addEventListener('click', () => {
                x = 0;
                con2.appendChild(btn);
                localStorage.setItem('x', x);
                con.classList.remove('bg');
                btn.classList.remove('btn-hide');
                box.remove();
                btn2.remove();
                y = 0;
            })
            
        }
        box.appendChild(closeBtn);
        closeBtn.classList.add('close-btn');
        closeBtn.innerHTML = `X`;
        closeBtn.addEventListener('click', () => {
            box.remove();
            con.classList.remove('bg');
            btn.classList.remove('btn-hide');
            btn2.remove();
            con2.appendChild(btn);
            y = 0;
        } );
        localStorage.setItem('x', x);
    }
} );


// div.addEventListener('click', () => {
//     div.classList.remove('bg')
//     btn.classList.remove('btn-hide')
//     div.removeChild(box)
// });

