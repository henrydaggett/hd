function toCamelCase(str) {
  if (str.includes('-')) {
    const splitStr = str.split('-');
    for (let i = 1; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substr(1);
    }
    return splitStr.join('');
  }

  const splitStr = str.split('_');
  for (let i = 1; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substr(1);
  }
  return splitStr.join('');
}

toCamelCase('my_name_is_henry');
