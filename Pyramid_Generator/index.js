const character = "#"; // Definition of character
const count = 8; // Definition of count
rows = []; // Declaration of rows as an empty array
let inverted = false; // Creation of inverted variable to be re-used
// Creation of reusable function
function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}
// For Loop to iterate through
for (let i = 0; i < count; i++) {
    if (inverted) {
        rows.push(padRow(i + 1, count));
    } else {
        rows.unshift(padRow(i + 1, count));
    }
}
// Creation of results
let results = " ";
// Iterating through the rows
for (const row of rows) {
    results = results + row + "\n";
}
// Showing results
console.log(results);
