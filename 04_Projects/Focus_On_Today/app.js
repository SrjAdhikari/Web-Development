const checkBoxList = document.querySelectorAll(".custom-checkbox");
const inputFields = document.querySelectorAll(".goal-input");
const errorMsg = document.querySelector(".error-msg");
const progressLabel = document.querySelector('.progress-label');
const progressBar = document.querySelector(".progress-bar");
const progressValue  = document.querySelector(".progress-indicator");

const quotes = [
    'Raise the bar by completing your goals!',
    'Well begun is half done!',
    'Just a step away, keep going!',
    'Whoa! You just completed all the goals, time for chill 😊',
];

const allGoals = JSON.parse(localStorage.getItem("allGoals")) || {
    goal1 : {
        name : "",
        completed : false
    },
    goal2 : {
        name : "",
        completed : false
    },
    goal3 : {
        name : "",
        completed : false
    }
};
let completedGoalsCount = Object.values(allGoals).filter((goal) => goal.completed).length;

progressValue.style.width = `${(completedGoalsCount / inputFields.length) * 100}%`;
progressValue.firstElementChild.innerText = `${completedGoalsCount}/${inputFields.length} completed`;
progressLabel.innerText = quotes[completedGoalsCount];

checkBoxList.forEach((checkbox) => {
    checkbox.addEventListener("click", (e) => {
        const isAllGoalsFilled = [...inputFields].every((input) => {
            return input.value;
        });

        if(isAllGoalsFilled) {
            checkbox.parentElement.classList.toggle("completed");
            const goalId = checkbox.nextElementSibling.id;
            allGoals[goalId].completed = !allGoals[goalId].completed;
            completedGoalsCount = Object.values(allGoals).filter((goal) => goal.completed).length;
            progressValue.style.width = `${(completedGoalsCount / inputFields.length) * 100}%`;
            progressValue.firstElementChild.innerText = `${completedGoalsCount}/${inputFields.length} completed`;
            progressLabel.innerText = quotes[completedGoalsCount];
            localStorage.setItem("allGoals", JSON.stringify(allGoals));
        }
        else {
            progressBar.classList.add("show-error");
        }
        
    });
});

inputFields.forEach((input) => {
    if (allGoals[input.id]) {
        input.value = allGoals[input.id].name;

        if(allGoals[input.id].completed){
            input.parentElement.classList.add("completed");
        }    
    } 
    else {
        input.value = '';
    }

    input.addEventListener("focus", () => {
        progressBar.classList.remove("show-error");
    });

    input.addEventListener("input", (e) => {
        if(allGoals[input.id].completed) {
            input.value = allGoals[input.id].name;
            return;
        }

        allGoals[input.id].name = input.value
        localStorage.setItem("allGoals", JSON.stringify(allGoals));
    });
});