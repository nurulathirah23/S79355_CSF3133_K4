// Error 1 (grade.html, Line 11): onsubmit="checkMark()"
// Error 2 (grade.html, Line 18): <script src="grades.js"> should be "grade.js".
// Error 3 (grade.js, Line 4): Used "=" instead of "===" in if (name = "").
// Error 4 (grade.js, Line 8): Wrong casing "isNan" instead of "isNaN".
// Error 5 (grade.js, Line 14): Used "&&" instead of "||" in if (mark < 0 && mark > 100).
// Error 6 (grade.js, Lines 30): Used "style.color" instead of "style.colour".
// Error 7 (grade.js, Lines 38): Loop started at i = 1 instead of i = 0 (missing grade "A"),
// Error 8 (grade.js, Lines 42): Wrong casing "innerHtml" should be "innerHTML".

function checkMark() {
  let name = document.forms["gradeForm"]["name"].value.trim();
  let rawMark = document.forms["gradeForm"]["mark"].value.trim();

  if (name === "") {
    alert("Name must be filled out.");
    return false;
  }

if (rawMark === "") {
    alert("Mark field cannot be empty.");
    return false;
  }

  if (isNaN(rawMark)) {
    alert("Please enter a valid numeric value.");
    return false;
  }

  let mark = parseInt(rawMark, 10);

  if (mark < 0 || mark > 100) {
    alert("Mark must be between 0 and 100.");
    return false;
  }

let grade;
let color;
  if (mark >= 80) {
    grade = "A";
    color = "green";
  } else if (mark >= 65) {
    grade = "B";
    color = "green";
  } else if (mark >= 50) {
    grade = "C";
    color = "orange";
  } else {
    grade = "F";
    color = "red";
  }

let resultEl = document.getElementById("result");
  resultEl.innerHTML = name + " got grade " + grade;
  resultEl.style.color = color;

let now = new Date();
  document.getElementById("checkedTime").innerHTML = "Checked on: " + now;
document.getElementById("checkedTime").style.color = color;

  return false;
}


function setRandomMark() {
  let randomMark = Math.floor(Math.random() * 101);
  document.getElementById("mark").value = randomMark;
}

function showTable() {
  let grades = ["A", "B", "C", "F"];
  let ranges = ["80-100", "65-79", "50-64", "0-49"];
  let tableHTML = "<table>";
  tableHTML += "<tr><th>Grade</th><th>Mark range</th></tr>";

  for (let i = 0; i < grades.length; i++) {
    tableHTML += "<tr><td>" + grades[i] + "</td><td>" + ranges[i] + "</td></tr>";
  }

  tableHTML += "</table>";
  document.getElementById("tableContainer").innerHTML = tableHTML;
}