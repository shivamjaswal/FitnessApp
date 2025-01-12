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

async function createChartForWorkout() {
    const ctx = document.getElementById('workoutChart').getContext('2d');

    let workoutData = await fetch("http://localhost:8080/workout/");
    let completeWorkoutData = await workoutData.json();
    let workoutCaloriesData = [];
    let workoutDurationData = [];
    let workoutDateData = [];

    for(let i in completeWorkoutData) {
        console.log(completeWorkoutData[i].type);

        workoutCaloriesData.push(completeWorkoutData[i].caloriesBurned);
        workoutDurationData.push(completeWorkoutData[i].duration);

        const workoutDate = new Date(completeWorkoutData[i].date);

        // Format the date as 'MM/DD'
        const workoutFormattedDate = `${(workoutDate.getMonth() + 1).toString().padStart(2, '0')}/${workoutDate.getDate().toString().padStart(2, '0')}`;

        workoutDateData.push(workoutFormattedDate);
    }

    // workoutDateData = ['06/27', '06/28', '06/29'];

    const myChart = new Chart(ctx, {
        type: 'line', // Type of chart: line, bar, pie, etc.
        data: {
            labels: workoutDateData, // X-axis labels
            datasets: [
                {
                    label: 'Calories Burned',
                    data: workoutCaloriesData, // Data points
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    tension: 0.4, // Curved lines
                },
                {
                    label: 'Duration',
                    data: workoutDurationData,
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    tension: 0.4,
                },
            ],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                },
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Date',
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: 'Values',
                    },
                },
            },
        },
    });
}

async function createChartForActivity() {
    const ctx = document.getElementById('activityChart').getContext('2d');

    let activityData = await fetch("http://localhost:8080/activity/");
    let completeActivityData = await activityData.json();
    let activityCaloriesData = [];
    let activityStepsData = [];
    let activityDistanceData = [];
    let activityDateData = [];

    for(let i in completeActivityData) {
        console.log(completeActivityData[i].type);

        activityCaloriesData.push(completeActivityData[i].caloriesBurned);
        activityStepsData.push(completeActivityData[i].steps);
        activityDistanceData.push(completeActivityData[i].distance);

        const activityDate = new Date(completeActivityData[i].date);

        // Format the date as 'MM/DD'
        const activityFormattedDate = `${(activityDate.getMonth() + 1).toString().padStart(2, '0')}/${activityDate.getDate().toString().padStart(2, '0')}`;

        activityDateData.push(activityFormattedDate);
    }

    const myChart = new Chart(ctx, {
        type: 'line', // Type of chart: line, bar, pie, etc.
        data: {
            labels: activityDateData, // X-axis labels
            datasets: [
                {
                    label: 'Calories Burned',
                    data: activityCaloriesData, // Data points
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    tension: 0.4, // Curved lines
                },
                {
                    label: 'Steps',
                    data: activityStepsData,
                    borderColor: 'rgba(237, 89, 18, 1)',
                    backgroundColor: 'rgba(237, 89, 18, 0.2)',
                    tension: 0.4,
                },
                {
                    label: 'Distance',
                    data: activityDistanceData,
                    borderColor: 'rgba(48, 237, 18, 1)',
                    backgroundColor: 'rgba(48, 237, 18, 0.2)',
                    tension: 0.4,
                }
            ],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                },
            },
            scales: {
                x: {
                    title: {
                    display: true,
                    text: 'Date',
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: 'Values',
                    },
                },
            },
        },
    });
}

(async function getDataFunction() {
    let workoutData = await fetch("http://localhost:8080/workout/");
    let goalData = await fetch("http://localhost:8080/goal/");
    let activityData = await fetch("http://localhost:8080/activity/");
    let completeWorkoutData = await workoutData.json();
    let completeGoalData = await goalData.json();
    let completeActivityData = await activityData.json();

    let totalCaloriesBurned = 0;
    let totalDistanceCovered = 0;
    let totalStepsTaken = 0;
    let totalTimespent = 0;
    let totalAchievedGoals = 0;
    let totalNotAchievedGoals = 0;

    for(let i in completeWorkoutData) {
        console.log(completeWorkoutData[i].type);

        let caloriesBurned = completeWorkoutData[i].caloriesBurned;
        let duration = completeWorkoutData[i].duration;
        let date = completeWorkoutData[i].date;
        let type = completeWorkoutData[i].type;

        totalCaloriesBurned += caloriesBurned;
        console.log("cal1" + caloriesBurned);

        totalTimespent += duration;
    }

    for(let i in completeGoalData) {
        console.log(completeGoalData[i].type);

        let description = completeGoalData[i].description;
        let startDate = completeGoalData[i].startDate;
        let endDate = completeGoalData[i].endDate;
    }

    for(let i in completeActivityData) {
        console.log(completeActivityData[i].type);

        let caloriesBurned = completeActivityData[i].caloriesBurned;
        let distance = completeActivityData[i].distance;
        let date = completeActivityData[i].date;
        let steps = completeActivityData[i].steps;

        totalCaloriesBurned += caloriesBurned;
        console.log("cal2" + caloriesBurned);

        totalDistanceCovered += distance;

        totalStepsTaken += steps;
    }

    let totalCaloriesBurnedElement = document.querySelector("#caloriesBurned");
    let totalDistanceCoveredElement = document.querySelector("#distanceCovered");
    let totalStepsTakenElement = document.querySelector("#stepsTaken");
    let totalTimespentElement = document.querySelector("#timespent");
    let totalAchievedGoalsElement = document.querySelector("#achievedGoals");
    let totalNotAchievedGoalsElement = document.querySelector("#notAchievedGoals");
        // pastGoal.style.backgroundColor = "white";
        // pastGoal.style.padding = "10px";
        // pastGoal.style.margin = "10px";
        // pastGoal.style.borderRadius = "10px";
    totalCaloriesBurnedElement.innerHTML = `<br><b>Total Calories Burned</b><br><br><br><br>${totalCaloriesBurned}`;
    totalDistanceCoveredElement.innerHTML = `<br><b>Total Distance Covered</b><br><br><br><br>${totalDistanceCovered}`;
    totalStepsTakenElement.innerHTML = `<br><b>Total Steps Taken</b><br><br><br><br>${totalStepsTaken}`;
    totalTimespentElement.innerHTML = `<br><b>Total Time Spent</b><br><br><br><br>${totalTimespent}`;
    totalAchievedGoalsElement.innerHTML = `<br><b>Achieved Goals</b><br><br><br><br>`;
    totalNotAchievedGoalsElement.innerHTML = `<br><b>Not Achieved Goals</b><br><br><br><br>`;

        // pastGoalList.append(pastGoal);

})();

createChartForWorkout();
createChartForActivity();
