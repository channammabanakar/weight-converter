let kgbtn = document.getElementById('kg');
let poundbtn = document.getElementById('pound');

kgbtn.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    console.log(input);
    document.getElementById('output').value =input / 2.205 + "kg";
})

poundbtn.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    console.log(input);
    document.getElementById('output').value =input * 2.205 + "pound";
})