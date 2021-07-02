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
    let table = document.getElementById("fish")
    let row = table.insertRow(0)
    let cell1 = row.insertCell(0)
    let cell2 = row.insertCell(1)
    cell1.innerHTML = "New Cell1"
    cell2.innerHTML = "New Cell2"
}

newRow();

function newBackground(){
    let oldColor = document.getElementsByClassName("bing")
    oldColor.style.color = "red"
}
newBackground()