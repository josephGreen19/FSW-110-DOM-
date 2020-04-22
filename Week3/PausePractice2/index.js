var myList = document.createElement("ol")

var newli1 = document.createElement("li")
newli1.textContent = "Fist List Item"

var newLi2 = document.createElement('li')
newLi2.textContent = "Second List Item"

var newLi3 = document.createElement("li")
newLi3.textContent = "Third List Item"

document.querySelector("myList")
myList.append(newli1, newLi2, newLi3)

document.body.append(myList)
// aray of list 
const newList = ["First Item, Second Item, Third Item"]

for(let i = 0; i < newList.length; i++){
    var h1 = document.createElement("header")
    h1.innerHTML = newList[i]
    document.body.appendChild(h1)
    
}//style of list
document.querySelector("h1")
h1.style.fontSize = "20px";
h1.style.fontWeight = "lighter";
h1.style.fontFamily = "sans-serif";
h1.style.color = "cornflowerblue"
//
document.getElementById("h1").classList.add(".border")
