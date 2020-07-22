//get name from user and change the title
console.log('hello');
const name=prompt('Enter your name',' anonymous');

title.innerText+=" welcome "+name;
const dmode=document.getElementById('dark');
dmode.onclick=function changeColor()
{

    document.body.style.backgroundColor='black';
    document.body.style.color='white';
    document.body.style.fontFamily='Times new roman';

}

const ctime = document.getElementById('clock');


function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}

 //clock();

setInterval(clock,1000);
