document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('header');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});
document.getElementById('form').addEventListener("submit", function validate(e) {
    const email = document.getElementById("email").value;
    const location = document.getElementById("plocation").value;
    const dateD = document.getElementById("dateD").value;
    const dateA = document.getElementById("dateA").value;
    const sms = document.getElementById("error");
    const btn = document.getElementById("btn").value
    btn.innerHTML = "...";

    if (email || location || dateD || dateA, dateD) {
        setTimeout(function() { myFunction("reservation succes"); }, 3000);

        function myFunction(value) {
            sms.innerHTML = value;
            sms.style.padding = "0.2rem 0.3rem";
            sms.style.background = "green";
            sms.style.fontSize = "1rem";
            sms.style.margin = "0.5rem";
            sms.style.color = "#fff";
        }
        e.preventDefault();
    } else {
        window.open("../index.html");
    }

})