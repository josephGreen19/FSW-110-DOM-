document.myForm.addEventListener("submit", function(e){
    e.preventDefault()

    var fname = document.myForm.fname.value
    var lname = document.myForm.lname.value
    var age = document.myForm.age.value
    var gender = document.myForm.gender.value
    var place = document.myForm.place.value
    var checkedInputs = []
   
    for( let i = 0; i < myForm.meal.length; i++) {
        if (myForm.meal[i].checked) {
            checkedInputs.push(myForm.meal[i].value)
        }
    }

    alert("First name: " + fname + "\n " + "Last name: " + lname + "\n " + "Age: " + age + "\n " + "Gender: " +  gender + "\n " + "Location: " + place + "\n " + "Dietary restrictions: " + checkedInputs)
})