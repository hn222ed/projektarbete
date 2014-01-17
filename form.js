document.getElementById("submit").onclick = function (e) {
    var name = document.getElementById("namn").value;
    var  email = document.getElementById("mail").value;
    

    
    
    if(name.length < 1) {
        alert("Please type your name");

        
        e.preventDefault();
    }
    if(email.length < 1) {
        alert("Please type your e-mail"); 
}

};