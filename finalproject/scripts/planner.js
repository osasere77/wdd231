import {
getGoals,
saveGoals
}
from "./storage.js";

const menuBtn =
document.querySelector("#menuBtn");

const navMenu =
document.querySelector("#navMenu");

menuBtn.addEventListener("click", () => {
navMenu.classList.toggle("open");
});

const form =
document.querySelector("#goalForm");

const goalContainer =
document.querySelector("#goalContainer");

let goals = getGoals();

displayGoals();

form.addEventListener("submit", (event) => {

event.preventDefault();

const goal =
document.querySelector("#goal").value;

const deadline =
document.querySelector("#deadline").value;

const newGoal = {

id: Date.now(),

goal,

deadline

};

goals.push(newGoal);

saveGoals(goals);

displayGoals();

form.reset();

});

function displayGoals() {

goalContainer.innerHTML = "";

if(goals.length === 0){

goalContainer.innerHTML =
"<p>No study goals saved yet.</p>";

return;

}

goals.forEach(item => {

const card =
document.createElement("div");

card.classList.add("card");

card.innerHTML = `

<h3>${item.goal}</h3>

<p>
Deadline:
${item.deadline}
</p>

<button
class="btn deleteBtn"
data-id="${item.id}">
Delete
</button>

`;

goalContainer.appendChild(card);

});

const deleteButtons =
document.querySelectorAll(".deleteBtn");

deleteButtons.forEach(button => {

button.addEventListener("click", () => {

const id =
Number(button.dataset.id);

goals =
goals.filter(
goal => goal.id !== id
);

saveGoals(goals);

displayGoals();

});

});

}