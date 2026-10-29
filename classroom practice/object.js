//object
let student = {
    id:101,
    name:"raj",
    marks:50,
    address:{
        city:"mathura",
        pincode:586428
    },
    displayInfo: function(){
       console.log(`my name is ${this.name} and got marks ${this.marks}`);
    }
}
console.log(student["name"]);
// student.city="mathura";
student.marks=90;
delete student.id;
let query="city";
console.log(student["address"][query]);
student.displayInfo();
console.log(student);

let listOfStudents = [
    { id: 101, name: "rahul", marks: 65, gender: "male" },
    { id: 102, name: "amit", marks: 75, gender: "male" },
    { id: 103, name: "priya", marks: 85, gender: "female" },
    { id: 104, name: "neha", marks: 90, gender: "female" }
];
for(let i=0;i<listOfStudents.length;i++){
    let ans=`My name is ${listOfStudents[i].name} and got marks ${listOfStudents[i].marks}`;
    console.log(ans);
};

listOfStudents.forEach(student => {
    console.log(`My name is ${student.name} and got marks ${student.marks}`);
});
let nameOfList = listOfStudents.map((x) => {
    let upper = x.name.toUpperCase();
    return upper;
});

console.log(nameOfList);

let maleCandidate=listOfStudents.filter((x)=>{
    return x.gender==="male";
});
console.log(maleCandidate)
let femaleCandidate=listOfStudents.filter((x)=>{
    return x.gender==="female";
});
console.log(femaleCandidate)
let res=listOfStudents.map((x)=>{
    if(x.gender==="male"){
        return "Mr."+x.name;
    }else{
        return "Ms."+x.name;
    }
})
console.log(res);