const form= document.myForm

form.addEventListener("submit", (event) => {
    event.preventDefault()

    alert(form.check1.value)

const checkedInputs = []

for (let i = 0; i < form.check2.length; i++) {
    if(form.check2[i].checked){
        checkedInputs.push(form.check2[i].value)
    }
}
    alert(checkedInputs)
    alert(form.genre.value)
   
    function showAlert() {
        document.myForm.reset();
    }
        showAlert()
        
})
