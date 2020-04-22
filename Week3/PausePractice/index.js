const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"]



for(let i = 0; i < names.length; i++){
    var h1 = document.createElement("h1")
    h1.innerHTML = names[i]
    document.body.appendChild(h1)
    
}
document.querySelector("h1")
h1.style.fontSize = "40px"
