window.onload = () => {
  const genBtn = document.getElementById("generateButton");
  const output = document.getElementById("numbers");

  // ********************* genBtn*************
  genBtn.addEventListener("click", function () {
    let numbers = generateLottoNumbers();
    console.log(numbers);
    output.textContent = numbers.join(", ");
  });

  // **********************generateLottoNumbers() *********************
  function generateLottoNumbers() {
    let arrContainer = [];
    for (i = 0; i < 6; i++) {
      const ranNum = Math.floor(Math.random() * 45) + 1;
      arrContainer.includes(ranNum) || arrContainer.push(ranNum);
    }
    return arrContainer;
  }
};
