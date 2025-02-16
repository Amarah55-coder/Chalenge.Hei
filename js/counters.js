const pourcentage = document.querySelectorAll(".pourcentage span");
const container = document.querySelector(".pourcentage ");

let activated = false;
window.addEventListener("scroll", () => {

    if (
        pageYOffset > container.offsetTop - container.offsetHeight - 200 &&
        activated === false
    ) {
        pourcentage.forEach(counters => {
            counters.innerHTML = 0;
            let count = 0;

            function updateCount() {
                const target = parseInt(counters.dataset.count);

                if (count < target) {
                    count++;

                    counters.innerHTML = count;

                    setTimeout(updateCount, 10);
                } else {
                    counters.innerHTML = target;

                }

                updateCount();

                activated = true
            }

        })
    } else if (
        pageYOffset < container.offsetTop - container.offsetHeight - 500 ||
        pageYOffset === 0 &&
        activated === true
    ) {
        pourcentage.forEach(counters => {
            counters.innerHTML = 0;
        });
        activated = false
    }
})