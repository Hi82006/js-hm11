window.onload=()=>{
//     1) Створити форму валідації яка отримує:
//  нікнейм, повино  бути мінімум 2 символа,
//  емейл повинен перевіряти валідність і не пропускати невалідні емейли
// номер  телефону, повиенен перевіряти номер на валідність і пропускати номери телефону тільки з +3

let submit = document.querySelector('.submit');
let username = document.querySelector('#name');
let email = document.querySelector('#e-mail');
let phoneNumber = document.querySelector ('#pNumber');
// let form =document.querySelector('#form');
let nick = /\w{2,}/;
let mail = /\w{2,}\@[a-z]{2,6}\.[a-z]{2,6}\b/;
let phone = /^\+380\d{3}\d{3}\d{2}\d{1}$\b/; 
    
submit.disabled = true
let usercheck = false;
let mailcheck = false;
let phonecheck = false

username.onchange = function(){
    if(nick.test(this.value)){
        this.classList.remove('upts')
        usercheck = true
    }
    else{
        alert('не валидный ник');
        username.classList.add('upts')
        usercheck = false
    }
    check()
} 
email.onchange = function(){
    if(mail.test(this.value)){
        this.classList.remove('upts')
        mailcheck = true
    }
    else{
        alert('не верно заполненое поле');
        this.classList.add('upts')
        mailcheck = false
    }
    check()
}       
phoneNumber.onchange = function(){
    if(phone.test(this.value)){
        this.classList.remove('upts')
        phonecheck = true
    }
    else{
        alert('не верно заполненое поле');
        this.classList.add('upts')
        phonecheck = false
    }
    check()
}
function check(){ 
    if(usercheck == true && phonecheck == true && mailcheck == true){
        submit.disabled = false
        submit.classList.remove('opacity')
    }
    else{
        submit.disabled = true
        submit.classList.add('opacity')
    }
}

// 2) Напишіть функцію яка рахує кількість букв великого регістру в стрінгу і повертає кількість

let task2 = document.querySelector('#task2')
let pattern =  /[A-Z]/g;
function upCase(text){
    if(pattern.test(text)){
    let result = text.match(pattern);
    document.querySelector('#result').innerHTML = (result.length);
    }
    else{
        document.querySelector('#result').innerHTML = ('0');
    }
}
task2.onchange = function(){ 
    upCase(this.value)
}

// 3) Написати функцію яка видаляє всі тексктові символи з стрінка, а отриманні цифрові значення переводить в тип намбер та повертає його 
let task3 = document.querySelector('#task3')

function number(text){
    let pattern2 = /\d/g;
    if(pattern2.test(text)){
    let result = text.match(pattern2);
    let result2 = result.reduce((res, item) => res + item, '');
    let finalres = Number(result2)
    document.querySelector('#result3').innerHTML = (`${finalres} тип данных: ${typeof(finalres)}`);
    }
    else{
        document.querySelector('#result3').innerHTML = ('Ничего не найдено');
    }
}
task3.onchange = function(){ 
    number(this.value)
}
// 4) Створіть колор пікер який змінює значення кольору body і записує значення в sessionStorage. При завантаженні сторінки сешен сторедж повинен перевірятись, якщо там є ключ зі значенням кольору для body треюа примінити цей колір до body
// let dataContainer = document.querySelector('.session-storage')
let root = document.querySelector(':root');
let bgBtn = document.querySelector('#bg');
let bgColor = window.sessionStorage.getItem('bgColor')
bgBtn.addEventListener("change", changeColor, false);
function changeColor(event) {
    root.style.setProperty('--body-bg', event.target.value);
    window.sessionStorage.setItem('bgColor', event.target.value)
    bgColor = event.target.value
    console.log(bgColor)
}
if(window.sessionStorage.getItem('bgColor') != null){
    root.style.setProperty('--body-bg', bgColor);
}
// 5) Створити інпут який отримує пін код ( це 4 цифрових значення). За допомогою регулярки перевітити чи валідний пін код ввів користувач
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

let pin = document.querySelector('#pin');
let pinpattern = /^\d{4}$/

pin.onchange = function(){
    if(pinpattern.test(this.value)){
        alert('pin is OK')
        this.classList.remove('upts')
    }
    else if(this.value.length < 1){
        alert('pin is empty');
        this.classList.add('upts')
    }
    else{
        alert('pin is no valid');
        this.classList.add('upts')
    }
}
// 6) Створити регулярку яка отримує адресс сторінки і повертає тільки адресс  
// "https://prog.academy/?page=1" -->"https://prog.academy/"

let linkPattern = /https:\W{2,}\w{2,}\.\w{2,}\W/
function linkCheck(arg){
let res = arg.match(linkPattern)
console.log(`6 задание: ${res[0]}`)
}
linkCheck('https://prog.academy/?page=1')
}
