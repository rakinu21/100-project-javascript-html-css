document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
    const switchBtn = document.querySelector(".switch");

    switchBtn.addEventListener("click", () => {
      

        // Toggle body light state
        body.classList.toggle("on");
    });
});
