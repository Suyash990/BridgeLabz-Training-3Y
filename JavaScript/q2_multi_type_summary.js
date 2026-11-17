let userName = "Suyash";
let age = 21;
let isStudent = true;
let skills = ["HTML", "CSS", "JavaScript"];
let user = { city: "Mathura", branch: "CSE" };
let address = null;
let result;

let data = [
    {
        label: "User Name",
        value: userName,
        type: typeof userName
    },
    {
        label: "Age",
        value: age,
        type: typeof age
    },
    {
        label: "Student",
        value: isStudent,
        type: typeof isStudent
    },
    {
        label: "Skills",
        value: skills,
        type: Array.isArray(skills) ? "Array" : typeof skills
    },
    {
        label: "User",
        value: user,
        type: typeof user
    },
    {
        label: "Address",
        value: address,
        type: "null"
    },
    {
        label: "Result",
        value: result,
        type: typeof result
    }
];

console.table(data);