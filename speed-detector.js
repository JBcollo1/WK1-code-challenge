// Function to calculate the number of points on a driver's record based on their speed
let speedPoint = function (speed){
// Calculate the difference between the speed and the speed limit (70)
    let points = Math.floor([speed - 70] / 5)
 // If the number of points is negative, return 0 points   
    if (points < 0) {
       return (points * -0)
    
    } else{
        return `${points}`
    }

}

function speedDetector(points){
    if(points === 0){
        return "OK"
    }else if(points > 12){
        return "License suspended"
    }else{
        return `points:${points}`
    }

    

}
console.log(speedDetector(speedPoint(100)))
