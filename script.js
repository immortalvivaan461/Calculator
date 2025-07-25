const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "=") {
            if (currentInput !== "" && !/[+\-*/.]$/.test(currentInput)) {
                try {
                    currentInput = eval(currentInput).toString();
                } catch {
                    currentInput = "Error";
                }
            }
            
            
        } else if (button.id === "clear") {
            currentInput = "";
        } else if (button.id === "backspace") {
            currentInput = currentInput.slice(0, -1);
        } else {
            currentInput += value;
        }

        display.value = currentInput;
    });
});
