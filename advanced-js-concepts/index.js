const readFileFunc = () => {
  setTimeout(() => {
    console.log('Reading file completed');
    return true;
  }, 3000);

  return false;
}

const writeFileFunc = () => {
  setTimeout(() => {
    console.log('Writing file completed');
  }, 3000);
}

const promise = new Promise((resolve, reject) => {
  const output = readFileFunc();

  if (output) {
    resolve();
  } else {
    reject('Error occured while reading file');
  }
});


promise.then((data) => {
  console.log(data);
})
.catch((err) => {
  console.log(err);
});