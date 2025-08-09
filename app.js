// Exercise 10

const calculateGrade = (gradeInput) => {
    if (gradeInput >= 90) {
        return "A";
    }     else if (gradeInput >= 80) {
        return "B";
    }     else if (gradeInput >= 70) {
        return "C";
    }     else if (gradeInput >= 60) {
        return "D";
    }     else {
        return "F";
    }
}

console.log('Exercise 10 Result:', calculateGrade(85));


// Exercise 11

const createUsername = (firstNameInput, lastNameInput) => {
    let lengthCalculated = firstNameInput.length + lastNameInput.length;
    let slicedFirstName = firstNameInput.slice(0, 3);
    let slicedLastName = lastNameInput.slice(0,3);
    return (slicedFirstName + slicedLastName + lengthCalculated);
}

console.log('Exercise 11 Result:', createUsername('Samantha', 'Green'));


// Exercise 12

function numArgs(...userInput) {
    return userInput.length;
}


console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4));