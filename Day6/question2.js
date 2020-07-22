const list = document.querySelector('#list');
console.log(list);
let iNo=prompt('Enter number whose table to be Displayed');

table=[];

for(let i=1;i<=10;i++)
{
    table[i]=i*iNo;
}

table.forEach(element=>{
    let i=1;
    // list.innerText += `<li>${fruit}</li>`;
    list.innerHTML += `<li>${i}*${iNo}= ${element}</li>`;
})