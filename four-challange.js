function grading(score) {
    if (score >= 80 && score <= 100) {
        return 'your grad point is 5 and letter grade A+'
    }
    else if (score >= 70 && score <= 79) {
        return 'your grad point is 4 and letter grade A'
    }
    else if (score >= 60 && score <= 69) {
        return 'your grad point is 3.5 and letter grade A-'
    }
    else if (score >= 50 && score <= 59) {
        return 'your grad point is 3 and letter grade B'
    }
    else if (score >= 40 && score <= 49) {
        return 'your grad point is 2 and letter grade C'
    }
    else if (score >= 33 && score <= 39) {
        return 'your grad point is 1 and letter grade D'
    }
    else if (score >= 0 && score <= 32) {
        return 'your grad point is 0 and letter grade F'
    }
    else {
        return 'Hey! You were absent from the exam.'
    }
}
var myScore = 76;
var myGrade = grading(myScore);
console.log(myGrade);
