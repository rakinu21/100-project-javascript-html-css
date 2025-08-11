// Theme toggle
const themeBtn = document.querySelector(".themer");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeBtn.textContent = document.body.classList.contains("dark") ? "Light" : "Dark";
});

// Follow/Unfollow functionality
document.querySelectorAll(".follow-button").forEach(button => {
    button.addEventListener("click", () => {
        if (button.classList.contains("followed")) {
            button.classList.remove("followed");
            button.textContent = "Follow";
        } else {
            button.classList.add("followed");
            button.textContent = "Unfollow";
        }
    });
});
