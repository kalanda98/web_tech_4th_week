function mouseOver()
{
    document.getElementById("nika1").style.color = "black";
    document.getElementById("nika1").style.backgroundColor = "white";

}
function mouseOut() 
{
    document.getElementById("nika1").style.color = "white";
    document.getElementById("nika1").style.backgroundColor = "#383E4C";
}

function mouseOver2()
{
    document.getElementById("nika2").style.color = "black";
    document.getElementById("nika2").style.backgroundColor = "white";

}
function mouseOut2()
{
    document.getElementById("nika2").style.color = "white";
    document.getElementById("nika2").style.backgroundColor = "#383E4C";
}

function mouseOver3()
{
    document.getElementById("nika3").style.color = "black";
    document.getElementById("nika3").style.backgroundColor = "white";

}
function mouseOut3()
{
    document.getElementById("nika3").style.color = "white";
    document.getElementById("nika3").style.backgroundColor = "#383E4C";
}

function mouseOver4()
{
    document.getElementById("nika4").style.color = "black";
    document.getElementById("nika4").style.backgroundColor = "white";

}
function mouseOut4()
{
    document.getElementById("nika4").style.color = "white";
    document.getElementById("nika4").style.backgroundColor = "#383E4C";
}

function mouseOver5()
{
    document.getElementById("nika5").style.color = "black";
    document.getElementById("nika5").style.backgroundColor = "white";

}
function mouseOut5()
{
    document.getElementById("nika5").style.color = "white";
    document.getElementById("nika5").style.backgroundColor = "#383E4C";
}

function clicked()
{
    alert("asdasdasd");
} 

function traki()
{
    document.getElementById("change_color").innerHTML='mwvane';
    document.getElementById("change_color").style.backgroundColor = 'blue';
}

document.getElementById("alert").onclick=function(){

    var name= document.getElementById("name");
    var email= document.getElementById("mail");
    var subject= document.getElementById("subject");
    var message= document.getElementById("comment");

    var error = '';
    if(name.value.length == 0){

        error = error + "name is missing \n";    
    }

    else if(email.value.length == 0){

        error = error + "email is missing \n";    
    }

    else if(subject.value.length == 0){

        error = error + "subject is missing \n";    
    }
    
    else if(message.value.length == 0){

        error = error + "message is missing \n";    
    }

    if(error.length > 0){

        alert(error);
    }else{

        alert(name.value +' \n'+ email.value +'\n' + subject.value + '\n' + message.value);
    }

        

}