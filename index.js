let x = "john"
let y = "Doe"
let z = x + y
console.log(z)

let person = {
    name: "Boni",
    surname: "Ndi",
    email: "ndibonny@gmail.com"
}
console.log(person)

delete person.email
console.log(person)

let man = ["janauary", "february", "march", "april", "may", "june", "july", "august", "september", "october"]
console.log(man)









//DOM

document.getElementById("container")

document.getElementsByTagName("td")

function myHeading() {
    const h1 = document.querySelector("h1")
    h1.innerText = "Champions League"
}

function newRow() {
    let x = document.getElementById('tr').insertRow(0);
let y = x.insertCell(0);
let z = x.insertCell(1);
y.innerHTML="New Cell1";
z.innerHTML="New Cell2";
    
}
