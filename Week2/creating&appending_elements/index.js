

var newH = document.createElement("h1")
newH.textContent = "Welcome to my JS site" 
document.body.append((newH))

var newP = document.createElement("p")
newP.textContent = "All of this was created with JavaScript"
document.body.append((newP))

var myList = document.createElement("ol")

var newli1 = document.createElement("li")
newli1.textContent = "Fist item !!!"

var newLi2 = document.createElement('li')
newLi2.textContent = "Second Item !!!"

var newLi3 = document.createElement("li")
newLi3.textContent = "Third item!!!"

document.querySelector("myList")
myList.append(newli1, newLi2, newLi3)

document.body.append(myList)