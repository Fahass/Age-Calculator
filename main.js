const calcAge = document.querySelector('.calc-age');
const yrs = document.querySelector('.a');
const mnts = document.querySelector('.b');
const dys = document.querySelector('.c');



calcAge.addEventListener("click", function(){
    var enteredDate = new Date(document.getElementById('db').value)
    var inputDate = {
        year: enteredDate.getFullYear(),
        month: enteredDate.getMonth(),
        day: enteredDate.getDate(),
    }
     
    var date = new Date();
    var dy = date.getDate();
    var mn = date.getMonth();
    var yr = date.getFullYear();
    var month = [31,28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


    if(inputDate.day > dy){
        dy = dy + month[mn-1];
        mn = mn - 1;
    }
    if(inputDate.month > mn){
        mn = mn + 12;
        yr = yr - 1
    }
    if(inputDate.year > yr){
        document.querySelector('.output-ans').innerHTML='You are not yet born!'
    }


    var d = dy - inputDate.day;
    var m = mn - inputDate.month;
    var y = yr - inputDate.year;


    yrs.innerHTML = y;
    mnts.innerHTML = m;
    dys.innerHTML = d;

})