function totalFine(fare) {
  if (typeof fare === 'number' && fare > 0) {
    let fine = fare + fare * (20 / 100) + 30;
    return fine;
  } else {
    return 'Invalid';
  }
}

console.log(totalFine(200));
console.log(totalFine(0));
console.log(totalFine(50));
console.log(totalFine(552));
console.log(totalFine(-35));
console.log(totalFine('65'));
console.log(totalFine('Gorib tai ticket katinai'));
