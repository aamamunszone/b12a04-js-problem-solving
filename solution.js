// Problem-01 : Train TT's Fine Calculator
function totalFine(fare) {
  if (typeof fare === 'number' && fare > 0) {
    let fine = fare + fare * (20 / 100) + 30;
    return fine;
  } else {
    return 'Invalid';
  }
}

// Problem-02 : Clean & Capitalize Characters
function onlyCharacter(str) {
  if (typeof str === 'string') {
    return str.replaceAll(' ', '').toUpperCase();
  } else {
    return 'Invalid';
  }
}

// Problem-03 : FIFA Best Team Award
function bestTeam(player1, player2) {
  if (typeof player1 === 'object' && typeof player2 === 'object') {
    let team1 = player1.foul + player1.cardY + player1.cardR;
    let team2 = player2.foul + player2.cardY + player2.cardR;
    if (team1 < team2) {
      return player1.name;
    } else if (team1 > team2) {
      return player2.name;
    } else {
      return 'Tie';
    }
  } else {
    return 'Invalid';
  }
}

// Problem-04: Same Same But Different
function isSame(arr1, arr2) {
  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    if (arr1.length === arr2.length) {
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  } else {
    return 'Invalid';
  }
}

// Problem-05: Exam Result Report Generator
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
