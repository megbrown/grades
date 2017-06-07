console.log("hello Megan");
// Requirements

// Loop over an array of student grades (values from 50-100) 
// and output how many of each grades there are.

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A

// Start with array of random scores in your JavaScript

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

// Use console.log() to output the following criteria:

// How many of each grade?
countA = 0;
countB = 0;
countC = 0;
countD = 0;
countF = 0;

for (i = 0; i < scores.length; i++) {
	if (scores[i] >= 50 && scores[i] <= 60) {
		countF++;
	} else if (scores[i] >= 61 && scores[i] <= 70) {
		countD++;
	} else if (scores[i] >= 71 && scores[i] <= 80) {
		countC++;
	} else if (scores[i] >= 81 && scores[i] <= 90) {
		countB++;
	} else if (scores[i] >= 91 && scores[i] <= 100) {
		countA++;
	}
}
console.log("Number of F's = ", countF);
console.log("Number of D's = ", countD);
console.log("Number of C's = ", countC);
console.log("Number of B's = ", countB);
console.log("Number of A's = ", countA);

// What is the lowest grade?
var scoresOrder = scores.sort(function(first, second) {
	return first - second;
});

var lowest = scoresOrder.shift();
console.log("The lowest grade is " + lowest);

// What is the highest grade?
var highest = scoresOrder.pop();
console.log("The highest grade is " + highest);









