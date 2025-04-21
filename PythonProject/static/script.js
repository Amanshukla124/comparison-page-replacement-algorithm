document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("button");
    if (button) {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.05)";
        });
        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1)";
        });
    }
});
