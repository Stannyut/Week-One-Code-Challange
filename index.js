
function grader(){
    let input = prompt();
    let marks = parseFloat(input)
if(marks=>0 || marks>=100){
    console.log(marks)
}
else{
   console.log("error")
}
 
let grade
 if(marks>79){
    grade = 'A'
 }
 else if(marks>=60){
    grade = 'B'
 }
 else if(marks>=49){
    grade = 'C'
 }
 else if(marks>=40){
    grade = 'D'
 }
 else {
    grade = 'E'
 }
 console.log(grade)
}
grader()