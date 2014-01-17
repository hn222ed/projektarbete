document.getElementById("submit").onclick = function (e) {
    var name = document.getElementById("namn").value;
    var  email = document.getElementById("mail").value;
    var svar = document.getElementById('svar');

    
    
    if(name.length < 1) {
        svar.innerHTML = "<p>Please fill in your name</p>"+ svar.innerHTML;

        
        e.preventDefault();
    }
    if(email.length < 1) {
        svar.innerHTML = "<p>Please type your e-mail</p>"+ svar.innerHTML;  
}

