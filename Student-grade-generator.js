//code starts here

// The function first checks if the marks are within a valid range (0-100).
// If the marks are outside this range, it logs 'Invalid Marks' and immediately
// exits the function.
function gradeAssigner(marks){
if(marks < 0 || marks > 100 ){
    console.log('Invalid Marks')
}else if(marks > 79){
    console.log("Grade A");
}else if(marks >= 60 && marks <=79){
    console.log("Grade B")
}else if(marks >49 && marks <=59) {
    console.log("Grade C")
}else if(marks <= 49 && marks >= 40) {
    console.log("Grade D")
}else if(marks < 40){
    console.log("Grade E")
}

}

gradeAssigner(14)