const checkBoxList = document.querySelectorAll(".custom-checkbox");
const inputFields = document.querySelectorAll(".goal-input");
const errorMsg = document.querySelector(".error-msg");
const progressBar = document.querySelector(".progress-bar");
const progressVlaue = document.querySelector(".progress-indicator");

checkBoxList.forEach((checkbox) => {
    checkbox.addEventListener("click", (e) => {
        const isAllGoalsFilled = [...inputFields].every((input) => {
            return input.value;
        });

        if(isAllGoalsFilled) {
            checkbox.parentElement.classList.toggle("completed");
        }
        else {
            progressBar.classList.add("show-error");
        }
        
    });
});

inputFields.forEach((input) => {
    input.addEventListener("focus", () => {
        progressBar.classList.remove("show-error");
    });
});