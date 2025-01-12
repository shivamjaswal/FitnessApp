let dashboardPage = document.querySelector("#dashboard");
let workoutPage = document.querySelector("#workout");
let activityPage = document.querySelector("#activity");
let goalPage = document.querySelector("#goal");

dashboardPage.addEventListener("click", () => {
    const url = `../html/dashboard.html`;

    window.location.href = url;
});

workoutPage.addEventListener("click", () => {
    const url = `../html/workout.html`;

    window.location.href = url;
});

activityPage.addEventListener("click", () => {
    const url = `../html/activity.html`;

    window.location.href = url;
});

goalPage.addEventListener("click", () => {
    const url = `../html/goal.html`;

    window.location.href = url;
});

let pastGoalList = document.querySelector("#pastGoalList");

let button = document.querySelector("button");

button.addEventListener("click", async (e) => {
    e.preventDefault();
    
    let description = document.querySelector("#description").value;
    let startDate = document.querySelector("#startDate").value;
    let endDate = document.querySelector("#endDate").value;

    let pastGoal = document.createElement("div");
    pastGoal.style.backgroundColor = "white";
    pastGoal.style.padding = "10px";
    pastGoal.style.margin = "10px";
    pastGoal.style.borderRadius = "10px";
    pastGoal.innerHTML = `Description: <span style="font-weight: bold;">${description}</span> - Start date: <span style="font-weight: bold;">${startDate}</span> - End date: <span style="font-weight: bold;">${endDate}</span>`;
    pastGoalList.append(pastGoal);

    const data = {
        "description": description,
        "startDate": startDate,
        "endDate": endDate
    };

    const other_params = {
        headers : { "content-type" : "application/json; charset=UTF-8" },
        body : JSON.stringify(data),
        method : "POST",
        mode : "cors"
    };

    await fetch("http://localhost:8080/goal/", other_params);

});

(async function getDataFunction() {
    let data = await fetch("http://localhost:8080/goal/");
    let completeData = await data.json();
    for(let i in completeData) {
        console.log(completeData[i].type);

        let description = completeData[i].description;

        let startDate = new Date(completeData[i].startDate);
        let endDate = new Date(completeData[i].endDate);

        const options = { year: 'numeric', month: 'short', day: '2-digit' };
        let formattedStartDate = startDate.toLocaleDateString('en-US', options);
        let formattedEndDate = endDate.toLocaleDateString('en-US', options);

        let pastGoal = document.createElement("div");
        pastGoal.style.backgroundColor = "white";
        pastGoal.style.padding = "10px";
        pastGoal.style.margin = "10px";
        pastGoal.style.borderRadius = "10px";
        pastGoal.innerHTML = `Description: <span style="font-weight: bold;">${description}</span> - Start date: <span style="font-weight: bold;">${formattedStartDate}</span> - End date: <span style="font-weight: bold;">${formattedEndDate}</span>`;
        pastGoalList.append(pastGoal);
    }
})();

