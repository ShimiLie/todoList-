const inputBox = document.querySelector(".text");
const listContainer = document.querySelector(".list-container");
const addBtn = document.querySelector(".add-btn");
const time = document.querySelector("h3");
const date = new Date();

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const day = dayNames[date.getDay()];
const month = `${monthNames[date.getMonth()]} ${date.getDate()}`;
const year = date.getFullYear();
time.textContent = `${day} ${month} ${year}`;
console.log(time);

// console.log(inputBox);
// console.log(listContainer);
// console.log(addBtn);
addBtn.addEventListener("click", () => {
  if (inputBox.value === "") {
    alert("You have to do something today!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "❌";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
});

listContainer.addEventListener(
  "click",
  function (e) {
    // console.log(e.target.tagName);
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

const saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};

const showTask = () => {
  listContainer.innerHTML = localStorage.getItem("data");
};

showTask();
