function submit()
{

let title = document.getElementById("title").value
let description = document.getElementById("des").value
  document.getElementById("answer").innerHTML= "TItle: " + title 
  document.getElementById("answer2").innerHTML="Description " + description
 

}



function removeElement()
{
  document.getElementById("answer").style.display = "none"; 
}
function removeElement2()
{
document.getElementById("answer2").style.display = "none";
}

