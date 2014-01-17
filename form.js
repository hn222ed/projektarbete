document.getElementById("submit").onclick = function (e) {
    var name = document.getElementById("namn").value;
    var  email = document.getElementById("mail").value;
    
    
    if(name.length < 1) {
       
        alert("Du har glömt fylla i ditt namn");
        
        
        e.preventDefault();
    }
    if(email.length < 1) {
        alert("Du har glömt fylla i din epost");
        e.preventDefault(); 
    }
    
}
