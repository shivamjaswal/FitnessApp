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

let pastActivityList = document.querySelector("#pastActivityList");

let button = document.querySelector("button");

button.addEventListener("click", async (e) => {
    e.preventDefault();
    
    let caloriesBurned = document.querySelector("#caloriesBurned").value;
    let distance = document.querySelector("#distance").value;
    let steps = document.querySelector("#steps").value;
    let date = document.querySelector("#date").value;

    let pastActivity = document.createElement("div");
    pastActivity.style.backgroundColor = "white";
    pastActivity.style.padding = "10px";
    pastActivity.style.margin = "10px";
    pastActivity.style.borderRadius = "10px";
    pastActivity.innerHTML = `Calories Burned: <span style="font-weight: bold;">${caloriesBurned}</span> - Distance: <span style="font-weight: bold;">${distance}</span> - Steps: <span style="font-weight: bold;">${steps}</span> - Date: <span style="font-weight: bold;">${date}</span>`;
    pastActivityList.append(pastActivity);

    const data = {
        "caloriesBurned": caloriesBurned,
        "distance": distance,
        "steps": steps,
        "date": date
    };

    const other_params = {
        headers : { "content-type" : "application/json; charset=UTF-8" },
        body : JSON.stringify(data),
        method : "POST",
        mode : "cors"
    };

    await fetch("http://localhost:8080/activity/", other_params);

});

(async function getDataFunction() {
    let data = await fetch("http://localhost:8080/activity/");
    let completeData = await data.json();
    for(let i in completeData) {
        console.log(completeData[i].type);

        let caloriesBurned = completeData[i].caloriesBurned;
        let distance = completeData[i].distance;

        const date = new Date(completeData[i].date);

        const options = { year: 'numeric', month: 'short', day: '2-digit' };
        let formattedDate = date.toLocaleDateString('en-US', options);

        let steps = completeData[i].steps;

        let pastActivity = document.createElement("div");
        pastActivity.style.backgroundColor = "white";
        pastActivity.style.padding = "10px";
        pastActivity.style.margin = "10px";
        pastActivity.style.borderRadius = "10px";
        pastActivity.innerHTML = `Calories Burned: <span style="font-weight: bold;">${caloriesBurned}</span> - Distance: <span style="font-weight: bold;">${distance}</span> KM - Steps: <span style="font-weight: bold;">${steps}</span> - Date: <span style="font-weight: bold;">${formattedDate}</span>`;
        pastActivityList.append(pastActivity);
    }
})();
