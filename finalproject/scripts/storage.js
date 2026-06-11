const STORAGE_KEY = "sscnGoals";

export function getGoals() {

const goals =
JSON.parse(
localStorage.getItem(STORAGE_KEY)
);

return goals || [];

}

export function saveGoals(goals) {

localStorage.setItem(
STORAGE_KEY,
JSON.stringify(goals)
);

}