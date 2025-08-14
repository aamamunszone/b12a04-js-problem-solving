function onlyCharacter(str) {
  if (typeof str === 'string') {
    return str.replaceAll(' ', '').toUpperCase();
  } else {
    return 'Invalid';
  }
}

console.log(onlyCharacter('  h e llo wor   ld'));
