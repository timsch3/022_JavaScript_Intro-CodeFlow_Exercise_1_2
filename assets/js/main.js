function calcAge() {
    document.getElementById("result").innerHTML = "You are " + (new Date().getFullYear() - document.getElementById("birthyear").value) + " years old.";
}