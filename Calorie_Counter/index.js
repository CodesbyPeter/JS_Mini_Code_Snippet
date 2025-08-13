// CalorieCounter
const calorieCounter = document.getElementById('calorie-counter');
// BudgetNumberInput
const budgetNumberInput = document.getElementById('budget');
// EntryDropdown
const entryDropdown = document.getElementById('entry-dropdown');
// AddEntryButton
const addEntryButton = document.getElementById('add-entry');
// ClearButton
const clearButton = document.getElementById('clear');
// Output
const output = document.getElementById('output');
// isError
let isError = false;

// Cleaning up input in DailyCalories removing + and -
function cleanInputString(str) {
  // Testing workability
  // console.log("original string: ", str);  
  // Defining pattern
  const regex = /[+-\s]/g; // g flag for global search
  // Replacing pattern with empty string
  return str.replace(regex, "");
}
// Testing if cleanInputString is working seamlessly
// console.log(cleanInputString("+-99"));

// Filtering up input
function isInvalidInput(str) {
  // Defining valid input pattern
  const regex = /\d+e\d+/i; // i flag is for insensitivity
  // Matching the valid input pattern
  return str.match(regex);
}
// Testing if isInvalidInput is working seamlessly
// console.log(isInvalidInput("1e3"));