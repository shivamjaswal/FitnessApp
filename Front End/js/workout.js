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

let pastWorkoutList = document.querySelector("#pastWorkoutList");

let button = document.querySelector("button");

button.addEventListener("click", async (e) => {
    e.preventDefault();
    
    let caloriesBurned = document.querySelector("#caloriesBurned").value;
    let duration = document.querySelector("#duration").value;
    let date = document.querySelector("#date").value;
    let type = document.querySelector("#type").value;

    let pastWorkout = document.createElement("div");
    pastWorkout.style.backgroundColor = "white";
    pastWorkout.style.padding = "10px";
    pastWorkout.style.margin = "10px";
    pastWorkout.style.borderRadius = "10px";
    pastWorkout.innerHTML = `Calories Burned: <span style="font-weight: bold;">${caloriesBurned}</span> - Duration: <span style="font-weight: bold;">${duration}</span> - Date: <span style="font-weight: bold;">${date}</span> - Type: <span style="font-weight: bold;">${type}</span>`;
    pastWorkoutList.append(pastWorkout);

    const data = {
        "caloriesBurned": caloriesBurned,
        "duration": duration,
        "date": date,
        "type": type
    };

    const other_params = {
        headers : { "content-type" : "application/json; charset=UTF-8" },
        body : JSON.stringify(data),
        method : "POST",
        mode : "cors"
    };

    await fetch("http://localhost:8080/workout/", other_params);

});

(async function getDataFunction() {
    let data = await fetch("http://localhost:8080/workout/");
    let completeData = await data.json();
    for(let i in completeData) {
        console.log(completeData[i].type);

        let caloriesBurned = completeData[i].caloriesBurned;
        let duration = completeData[i].duration;

        const date = new Date(completeData[i].date);

        const options = { year: 'numeric', month: 'short', day: '2-digit' };
        let formattedDate = date.toLocaleDateString('en-US', options);

        // let date = completeData[i].date;
        let type = completeData[i].type;

        let pastWorkout = document.createElement("div");
        pastWorkout.style.backgroundColor = "white";
        pastWorkout.style.padding = "10px";
        pastWorkout.style.margin = "10px";
        pastWorkout.style.borderRadius = "10px";
        pastWorkout.innerHTML = `Calories Burned: <span style="font-weight: bold;">${caloriesBurned}</span> - Duration: <span style="font-weight: bold;">${duration}</span> - Date: <span style="font-weight: bold;">${formattedDate}</span> - Type: <span style="font-weight: bold;">${type}</span>`;
        pastWorkoutList.append(pastWorkout);
    }
})();
