let marks = [90, 85, 78, 92, 88];

let total = 0;

for (let mark of marks) {
    total += mark;
}

let average = total / marks.length;
let percentage = (total / (marks.length * 100)) * 100;

console.log("Total Marks:", total);
console.log("Average:", average);
console.log("Percentage:", percentage + "%");

let failed = marks.some(mark => mark < 35);

if (failed) {
    console.log("Result: Detained");
}
else if (percentage >= 85) {
    console.log("Result: Promoted with Distinction");
}
else if (percentage >= 50 && percentage < 85) {
    console.log("Result: Promoted");
}
else {
    console.log("Result: Detained");
}