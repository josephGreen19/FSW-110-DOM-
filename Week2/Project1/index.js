

var newH = document.createElement("h1")
newH.textContent = "First JavaScript Webpage" 
document.body.append((newH))
document.querySelector("h1").style.textAlign = "center"
//Nav link
var newNav = document.createElement("nav")
var newA = document.createElement("a")
var link = document.createTextNode("Home")
newA.append(link)
newA.title = "Home"
newA.href = ""

var newA2 = document.createElement("a")
var link2 = document.createTextNode("About")
newA2.append(link2)
newA2.title = "About"
newA2.href = ""

var newA3 = document.createElement("a")
var link3 = document.createTextNode("Contact")
newA3.append(link3)
newA3.title = "Contact"
newA3.href = ""
newNav.append(newA, newA2, newA3)
document.body.append(newNav)
document.querySelector("nav").style.textAlign = "center"
document.querySelector("nav").style.fontSize = "20px"

//Paragraph
var newP = document.createElement("p")
newP.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa sed elementum tempus egestas sed sed. Suspendisse in est ante in nibh. Nunc aliquet bibendum enim facilisis. Massa sapien faucibus et molestie ac feugiat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa sed elementum tempus egestas sed sed. Suspendisse in est ante in nibh. Nunc aliquet bibendum enim facilisis. Massa sapien faucibus et molestie ac feugiat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa sed elementum tempus egestas sed sed. Suspendisse in est ante in nibh. Nunc aliquet bibendum enim facilisis. Massa sapien faucibus et molestie ac feugiat."
document.body.append((newP))
document.querySelector("p").style.textAlign = "center"
document.querySelector("p").style.border = "solid black 2px"
document.querySelector("p").style.marginTop = "50px"
document.querySelector("p").style.fontSize = "25px"

//List
var myList = document.createElement("ul")
var newli1 = document.createElement("li")
newli1.textContent = "Number One !!!"
var newLi2 = document.createElement('li')
newLi2.textContent = "Number Two !!!"
var newLi3 = document.createElement("li")
newLi3.textContent = "Number Three!!!"
document.querySelector("myList")
myList.append(newli1, newLi2, newLi3)
document.body.append(myList)
document.querySelector("ul").style.fontSize = ("30px")

//Footer
var newFooter = document.createElement("footer")
var newA4 = document.createElement("a")
var link4 = document.createTextNode("Home")
newA4.append(link4)
newA4.title = "Home"
newA4.href = ""


var newA5 = document.createElement("a")
var link5 = document.createTextNode("About")
newA5.append(link5)
newA5.title = "About"
newA5.href = ""

var newA6 = document.createElement("a")
var link6 = document.createTextNode("Contact")
newA6.append(link6)
newA6.title = "Contact"
newA6.href = ""
newFooter.append(newA4, newA5, newA6)
document.body.append(newFooter)
document.querySelector("footer").style.textAlign = "center"
document.querySelector("footer").style.position = "absolute"
document.querySelector("footer").style.bottom = "0"
document.querySelector("footer").style.width = "100%"
document.querySelector("footer").style.height = "2.5rem"
document.querySelector("footer").style.fontSize = "20px"


