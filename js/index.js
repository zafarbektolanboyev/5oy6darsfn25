// const block = document.getElementById('block');
// const image = document.createElement('img');

// image.setAttribute('alt', 'Bu yerda tabiat rasmi bor');
// image.setAttribute('src', 'https://picsum.photos/200/300');
// block.appendChild(image);
// console.log(image);

// const btn = document.getElementById('btn');
// const fruits = ['olma', 'banan', 'apelsin', 'mandarin'];
// const body = document.querySelector('body')

// btn.addEventListener('click', () =>{
//     fruits.forEach(function(element) {
//         const li = document.createElement('li');
//         li.innerHTML = element;
//         li.setAttribute('class', 'item');
//         li.style.backgroundColor = 'red'
//         li.style.color = 'blue';
//         body.appendChild(li)
//     })
// })
// console.log(btn)
// const btn = document.getElementById('btn');
// btn.addEventListener('dblclick', function(){
//     alert('hello')
// })

// btn.addEventListener('mousemove', function() {
//     alert('hello');
// })

// const input = document.getElementById('field');
// input.addEventListener('keydown', function() {
//     console.log('hello')
// })



// const h3 = document.getElementById('h3')

// h3.addEventListener('click', () =>{
//     h3.style.color = 'red'
// })
// h3.addEventListener('mouseover', () =>{
//     h3.style.color = 'blue';
// })
// h3.addEventListener('mouseout', () =>{
//     h3.style.color = 'green';
// })
// h3.addEventListener('dblclick', () =>{
//     h3.style.color = 'yellow'
// })


// figma
const form = document.getElementById('form');
const table = document.getElementById('table');
const button  = document.getElementById('btn');
const name = document.getElementById('name');
const lastName = document.getElementById('lastName');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const email = document.getElementById('email');
const p = document.querySelector('.p');
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const p3 = document.querySelector('.p3');
const p4 = document.querySelector('.p4');
const user = document.querySelector('.user');

button && button.addEventListener('click', function(){
    p.innerHTML = lastName.value
    p.style.color = 'white';
    p.style.marginTop = '10px';
    p.style.width = '800px';
    p.style.height = '40px';
    p.style.border = '1px solid gray';
    p.style.borderRadius = '5px';
    p.style.paddingLeft = '20px';
    p.style.paddingTop = '10px';
// 
    p1.innerHTML = name.value
    p1.style.color = 'white';
    p1.style.marginTop = '10px';
    p1.style.width = '800px';
    p1.style.height = '40px';
    p1.style.border = '1px solid gray';
    p1.style.borderRadius = '5px';
    p1.style.paddingLeft = '20px';
    p1.style.paddingTop = '10px';
// 
    p2.innerHTML = phone.value
    p2.style.color = 'white';
    p2.style.marginTop = '10px';
    p2.style.width = '800px';
    p2.style.height = '40px';
    p2.style.border = '1px solid gray';
    p2.style.borderRadius = '5px';
    p2.style.paddingLeft = '20px';
    p2.style.paddingTop = '10px';
// 
    p3.innerHTML = password.value
    p3.style.color = 'white';
    p3.style.marginTop = '10px';
    p3.style.width = '800px';
    p3.style.height = '40px';
    p3.style.border = '1px solid gray';
    p3.style.borderRadius = '5px';
    p3.style.paddingLeft = '20px';
    p3.style.paddingTop = '10px';
// 
    p4.innerHTML = email.value
    p4.style.color = 'white';
    p4.style.marginTop = '10px';
    p4.style.width = '800px';
    p4.style.height = '40px';
    p4.style.border = '1px solid gray';
    p4.style.borderRadius = '5px';
    p4.style.paddingLeft = '20px';
    p4.style.paddingTop = '10px';

// 
    user.style.width = '802px';
    user.style.height = '250px';
    user.style.border = '1px solid white';
    user.style.borderRadius = '5px';
    user.style.marginTop = '10px'
})