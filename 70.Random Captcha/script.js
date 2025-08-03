document.addEventListener("DOMContentLoaded", () => {
    const captchaInput = document.querySelector(".Random-Captcha");
    const generateBtn = document.querySelector(".Random");
    const userInput = document.querySelector(".Captcha-text");
    const checkBtn = document.querySelector(".check");
    const validationMessage = document.querySelector(".validationcheck");

    let generatedCaptcha = "";

    // Function to generate random captcha
    function generateCaptcha(length = 6) {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    // Generate CAPTCHA on button click
    generateBtn.addEventListener("click", () => {
        generatedCaptcha = generateCaptcha();
        captchaInput.value = generatedCaptcha;
        validationMessage.textContent = "";
        userInput.value = "";
    });

    // Check user input
    checkBtn.addEventListener("click", () => {
        if (userInput.value === generatedCaptcha) {
            validationMessage.textContent = "✅ Captcha matched!";
            validationMessage.style.color = "green";
        } else {
            validationMessage.textContent = "❌ Captcha did not match!";
            validationMessage.style.color = "red";
        }
    });
});
