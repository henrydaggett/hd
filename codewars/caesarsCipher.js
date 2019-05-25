function rot13(str) { // LBH QVQ VG!
  const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const shift = [];
  for (let i = 0; i < str.length; i++) {
    if (/[A-Z]/.test(str[i]) === true) {
      if (alpha.indexOf(str[i]) < 13) {
        shift.push(alpha[25 - (12 - alpha.indexOf(str[i]))]);
      } else {
        shift.push(alpha[(alpha.indexOf(str[i])) - 13]);
      }
    } else {
      shift.push(str[i]);
    }
  }
  return shift.join('');
}

// Change the inputs below to test
rot13('SERR PBQR PNZC');
