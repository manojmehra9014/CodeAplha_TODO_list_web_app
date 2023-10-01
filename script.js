const currentDate = new Date()
console.log(currentDate);
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Get day, date, and month components
const day = daysOfWeek[currentDate.getDay()];
const date = currentDate.getDate();
const month = months[currentDate.getMonth()];

document.getElementById('day').innerHTML = day;
document.getElementById('date').innerHTML = date;
document.getElementById('month').innerHTML = month;
