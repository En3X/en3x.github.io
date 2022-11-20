var words = [
  "Maneesh Pandey",
  "Website Developer",
  "Web Application Developer",
  "Android Developer",
  "Maneesh Pandey",
];

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const applyTypingAnimation = async (element, delay) => {
  var count = 0;
  for (word of words) {
    count++;
    const stringToWrite = word;
    element.innerHTML = "";
    let refill = "";
    for (character of stringToWrite) {
      refill += character;
      await sleep(delay);
      element.innerHTML = refill;
    }
    await sleep(2000);
    if (count == words.length) {
      return;
    }
    for (character of stringToWrite) {
      refill = refill.substring(0, refill.length - 1);
      await sleep(delay);
      element.innerHTML = refill;
    }
  }

  // applyTypingAnimation(element,150);
};

applyTypingAnimation(document.querySelector("#typewriter"), 100);
