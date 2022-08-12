function fibonacci() {
  let bucket = document.getElementById("bucket");
  let number1 = parseInt(document.getElementById("firstInput").value);
  let number2 = parseInt(document.getElementById("secondInput").value);

  const fibonacciSequence = () => {
    let current = number1 + number2;
    number1 = number2;
    number2 = current;
    console.log(current);
    setTimeout(() => {
      bucket.style.width = current / 2 + "px";
      bucket.style.height = current / 2 + "px";
      bucket.innerHTML = `Original size is ${current} px, but this was adjusted to ${
        current / 2
      } px`;
    }, 1000);
  };

  for (let i = 0; i < 10; i++) {
    fibonacciSequence();
  }
}

const fibGenerator = () => {
  var range = document.getElementById("number-range").value;
  const manyBuckets = document.querySelector(".many-buckets");
  var output = [];

  if (range === 1) {
    output = [0];
  } else if (range === 2) {
    output = [0, 1];
    document.getElementById("number-range").innerHTML = output;
  } else {
    output = [0, 1];
    for (var i = 2; i < range; i++) {
      output.push(output[output.length - 2] + output[output.length - 1]);
      document.getElementById("result").innerHTML = output;
    }
  }
  document.getElementById("result").innerHTML = output;
  let myOutput = output;
  for (let i = 0; i < myOutput.length; i++) {
    let newBucket = document.createElement("div");
    newBucket.className = "new-bucket";
    newBucket.style.height = myOutput[i] + "px";
    newBucket.style.width = myOutput[i] + "px";
    newBucket.style.margin = "10px"
    newBucket.innerText = myOutput[i]
    manyBuckets.append(newBucket);
  }
};
