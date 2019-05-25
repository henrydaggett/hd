function findOutlier(integers) {
  const even = [];
  const odd = [];

  integers.forEach((value) => {
    if (value % 2) {
      odd.push(value);
    } else {
      even.push(value);
    }
  });

  if (even.length === 1) {
    return (even[0]);
  } else if (odd.length === 1) {
    return (odd[0]);
  }
}

findOutlier([1, 2, 2]);
