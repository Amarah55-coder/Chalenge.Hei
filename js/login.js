document.getElementById('formulaire__item').addEventListener("submit", (e) => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");
    const btn = document.getElementById("btn").value
    btn.innerHTML = "...";

    if (!email || !password) {
        setTimeout(function () { myFunction("Invalide registration"); }, 3000);

        function myFunction(value) {
            error.innerHTML = value;
            error.style.padding= "0.2rem 0.3rem";
            error.style.background= "red";
            error.style.fontSize="1rem";
            error.style.margin="0.5rem";
            error.style.color="#fff";
        }
        e.preventDefault();
    } else {
        window.open("../index.html");
    }

})