function sumTwoSmallestNumbers(numbers) {
  const filter = numbers.filter(x => x > -1).sort((a, b) => a - b);
  return filter[0] + filter[1];
}

sumTwoSmallestNumbers([544, 32654, 34297, 9237, 343, 98]);
