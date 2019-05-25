function persistence(num) {
  let count = 0;

  while (num > 9) {
    num = num.toString().split('').reduce((a, b) => a * b);
    count += 1;
  }
  return count;
}

console.log(persistence(39));
