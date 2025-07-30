class Calculator {
    constructor(numbers, operators, equalBtn, clearBtn, outputElement) {
        this.numbers = numbers;
        this.operators = operators;
        this.equalBtn = equalBtn;
        this.clearBtn = clearBtn;
        this.output = outputElement;
        this.currentInput = "";

        this.initialize();
    }

    initialize() {
        this.numbers.forEach(btn => {
            btn.addEventListener("click", () => this.appendToInput(btn.value));
        });

        this.operators.forEach(btn => {
            btn.addEventListener("click", () => this.appendToInput(btn.value));
        });

        this.equalBtn.addEventListener("click", () => this.calculate());
        this.clearBtn.addEventListener("click", () => this.clear());
    }

    appendToInput(value) {
        if (this.output.value === "0") {
            this.output.value = value;
        } else {
            this.output.value += value;
        }
        this.currentInput = this.output.value;
    }

    calculate() {
        try {
            const result = eval(this.currentInput);
            this.output.value = result;
            this.currentInput = result.toString();
        } catch (error) {
            this.output.value = "Error";
            this.currentInput = "";
        }
    }

    clear() {
        this.output.value = "0";
        this.currentInput = "";
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const numbers = document.querySelectorAll(".number-value");
    const operators = document.querySelectorAll(".operator");
    const equalBtn = document.querySelector(".equalbtn");
    const clearBtn = document.querySelector(".buttonclear");
    const output = document.querySelector(".output");

    new Calculator(numbers, operators, equalBtn, clearBtn, output);
});
