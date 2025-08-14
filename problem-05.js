function resultReport(marks) {
  if (Array.isArray(marks)) {
    let total = 0;
    for (let i = 0; i < marks.length; i++) {
      total += marks[i];
    }

    let avg;
    // The main reason for getting NaN earlier was that in the empty array ([]) case, division by zero occurred.
    if (marks.length === 0) {
      avg = 0;
    } else {
      avg = Math.round(total / marks.length);
    }

    let passCount = 0;
    let failCount = 0;
    for (let i = 0; i < marks.length; i++) {
      if (marks[i] >= 40) {
        passCount++;
      } else {
        failCount++;
      }
    }

    return {
      finalScore: avg,
      pass: passCount,
      fail: failCount,
    };
  } else {
    return 'Invalid';
  }
}

console.log(resultReport([]));
console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));
console.log(resultReport([99, 87, 67, 12, 87]));
console.log(resultReport([99]));
console.log(resultReport(100));
