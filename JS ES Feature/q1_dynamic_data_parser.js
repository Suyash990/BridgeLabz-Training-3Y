const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

console.log("DYNAMIC DATA PARSER REPORT");
console.log("==========================");

for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];

    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    console.log(`\nOriginal Value: ${stringValue}`);
    console.log(`Number: ${numberValue}`);
    console.log(`Boolean: ${booleanValue}`);
    console.log(`String: "${stringValue}"`);

    if (
        typeof value === "string" &&
        value.trim() !== "" &&
        Number.isNaN(numberValue)
    ) {
        invalidNumbers.push(value);
        console.log("Status: Invalid Number");
    } else if (value === "NaN" || value === " " || value === "100px") {
        invalidNumbers.push(value);
        console.log("Status: Invalid Number");
    } else if (Number.isNaN(numberValue)) {
        invalidNumbers.push(value);
        console.log("Status: Invalid Number");
    } else {
        validNumbers.push(numberValue);
        console.log("Status: Valid Number");
    }
}

console.log("\n==========================");
console.log("VALID NUMERIC DATA:");
console.log(validNumbers);

console.log("\nINVALID NUMERIC DATA:");
console.log(invalidNumbers);

console.log("\nFINAL SUMMARY");
console.log("Total Values:", apiData.length);
console.log("Valid Numbers:", validNumbers.length);
console.log("Invalid Numbers:", invalidNumbers.length);

