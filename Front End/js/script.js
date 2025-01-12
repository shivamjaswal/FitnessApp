let dashboardPage = document.querySelector("#dashboard");
let workoutPage = document.querySelector("#workout");
let activityPage = document.querySelector("#activity");
let goalPage = document.querySelector("#goal");

dashboardPage.addEventListener("click", () => {
    const url = `html/dashboard.html`;

    window.location.href = url;
});

workoutPage.addEventListener("click", () => {
    const url = `html/workout.html`;

    window.location.href = url;
});

activityPage.addEventListener("click", () => {
    const url = `html/activity.html`;

    window.location.href = url;
});

goalPage.addEventListener("click", () => {
    const url = `html/goal.html`;

    window.location.href = url;
});