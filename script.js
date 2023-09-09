function validate(){
    var set = document.getElementById("set")
    if(document.myform.Name.value == ""){
        alert("Please enter your name");
        document.myform.Name.focus()
        return false;
    }else if(document.myform.Name.value.length <= 3 ){
        alert("Your name should be more than 3");
        document.myform.Name.focus()
        return false;
    }else if(document.myform.username.value.length <= 7 ){
        alert("Your username should be more than 7");
        document.myform.username.focus()
        set.style.borderColor='red'
        return false;
    }
}

var is_validate = false;
function see(){
    var input = document.getElementById("password")
    if(is_validate){
        input.type = 'password'
         is_validate = false;
    }else{
        input.type = 'text'
        is_validate = true;
    }
}

var MenuItems = document.getElementById("MenuItems");

function openmenu(){
    MenuItems.style.right = "0";
}
function closemenu(){
    MenuItems.style.right = "-200px";
}