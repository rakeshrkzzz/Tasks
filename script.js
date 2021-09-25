var name1 = document.getElementById("name");
var age1 = document.getElementById("age");
var dob1 = document.getElementById("dob");
var rmv = document.getElementById("rmv");
var table = document.getElementById("table");

var save1 = document.getElementById("btnsave");
var remove1 = document.getElementById("btnrmv");

var row = 1;
var array = [];

function save (){
    let user = {
        name: name1.value,
        age: age1.value,
        dob: dob1.value,
    }
    
    if(!name1.value || !age1.value || !dob1.value){
        alert("Please Input A value");
        return;  
    }
    else{
        array.push(user);
        var newRow = table.insertRow(row);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        
        cell1.innerHTML = name1.value;
        cell2.innerHTML = age1.value;
        cell3.innerHTML = dob1.value;
        row++;
    }
    
    console.log(array);
    
}

function ageconversion(){
    let dob = dob1.value;
    
    let date = new Date(dob);
    
    let mnth = new Date() - date.getTime();
    
    let year = new Date(mnth).getUTCFullYear();
    
    let age = Math.abs(year - 1970);
    
    age1.value = age;
    // console.log(age);
}

function remove(){
    let x = rmv.value;
    array.splice(x, 1);
    console.log(array);
}


save1.addEventListener("click", ageconversion);
save1.addEventListener("click", save);
remove1.addEventListener("click", remove);
