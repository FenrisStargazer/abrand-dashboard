/************
Static Data
************/
const allTheMonths = [
  "Morning Star",
  "Sun's Dawn",
  "First Seed",
  "Rain's Hand",
  "Second Seed",
  "Mid Year",
  "Sun's Height",
  "Last Seed",
  "Hearthfire",
  "Frostfall",
  "Sun's Dusk",
  "Evening Star"
];
const allTheDays = [
  "Sundas",
  "Morndas",
  "Tirdas",
  "Middas",
  "Turdas",
  "Fredas",
  "Loredas"
];

/************
Dynamic Data
************/
// Get and store current date and time with `new Date()` object
const dateNow = new Date();
// Check-Check: See all `Date()` methods and properties
console.log( dateNow );

const gotMonth = dateNow.getMonth();
// Get current day of the month
const gotDayOfMonth = dateNow.getDate();
const suffix = (gotDayOfMonth % 10 == 1) ? "st" : (gotDayOfMonth % 10 == 2) ? "nd" : (gotDayOfMonth % 10 == 3) ? "rd" : "th";
// Get current year
const gotYear = dateNow.getFullYear();
// Get current day of the week
const gotDayOfWeek = dateNow.getDay();

// Check-Check: Is the data correct? 
console.log(gotMonth, gotDayOfMonth, gotYear, gotDayOfWeek);

/************
Get DOM Elements
************/
// Get the month
const month = document.querySelector(".month");
// Get day of the month
const dayOfMonth = document.querySelector(".dayOfMonth");
const dom2 = document.querySelector(".dom2");
// Get year
const year1 = document.querySelector('.year1');
const year2 = document.querySelector('.year2');
// Get Day of Week
const dayOfWeek = document.querySelector('.dayOfWeek');


/************
Set DOM Elements
************/
// Set the month
month.innerText = allTheMonths[gotMonth];
// Set day of the month
dayOfMonth.innerText = gotDayOfMonth;
dom2.innerText = suffix;
// Set the year
year1.innerText = Math.trunc(gotYear / 1000);
year2.innerText = gotYear % 1000;
// Set the day of the week
dayOfWeek.innerText = allTheDays[gotDayOfWeek];