function sum()
{
    let field1=document.getElementById("num1").value; 
    let field2=document.getElementById("num2").value; 

    let result=parseInt(field1)+parseInt(field2);

    if((result))
    {
        document.getElementById("answer").innerHTML="The answer is "+result;
    }
}
function subtractValue()
{
    let field1=document.getElementById("num3").value; 
    let field2=document.getElementById("num4").value; 

    let result=parseInt(field1)-parseInt(field2);

    if((result))
    {
        document.getElementById("answer2").innerHTML="The answer is "+result;
    }
}

function timesValue()
{
    let field1=document.getElementById("num5").value; 
    let field2=document.getElementById("num6").value; 

    let result=parseInt(field1)*parseInt(field2);

    if((result))
    {
        document.getElementById("answer3").innerHTML="The answer is "+result;
    }
}