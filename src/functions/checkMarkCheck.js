function checkMarkCheck(name, array) {
  let checkCount = 0;
  for (let i = 0; i < finalState[name].length; i++) {
    if (finalState[name][i] == true) {
      checkCount += 1;
    }
  }
  if (checkCount > 0) {
    return true;
  } else {
    return false;
  }
}

export default checkMarkCheck;
